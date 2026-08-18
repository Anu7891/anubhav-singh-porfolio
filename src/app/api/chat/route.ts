import { NextResponse } from "next/server";
import { site, about, experience, skillCategories, projects } from "@/lib/data";

/**
 * Free AI backend for the portfolio assistant, powered by Groq
 * (OpenAI-compatible, generous free tier — https://console.groq.com).
 *
 * Setup: add GROQ_API_KEY to your env (Vercel → Settings → Environment
 * Variables). Optionally override GROQ_MODEL. With no key, the client
 * falls back to the built-in rule-based answers, so the bot never breaks.
 */

const systemPrompt = `You are the friendly AI assistant on ${site.name}'s portfolio website. Answer visitor questions about ${site.firstName} concisely (2–4 sentences), in a warm, professional tone. Only use the facts below — never invent anything. If a question is off-topic or not covered, say you're not sure and suggest emailing ${site.email}.

ABOUT: ${about.body}
ROLE: ${site.role}, based in ${site.location}. ${site.availability}.
SUMMARY: ${site.tagline}

EXPERIENCE:
${experience.map((e) => `- ${e.role} at ${e.company} (${e.period}) — ${e.points.join(" ")}`).join("\n")}

SKILLS:
${skillCategories.map((c) => `- ${c.title}: ${c.pills.join(", ")}`).join("\n")}

PROJECTS:
${projects.map((p) => `- ${p.name} (${p.category}): ${p.description}`).join("\n")}

CONTACT: Email ${site.email} · LinkedIn ${site.linkedin} · GitHub ${site.github}.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const key = process.env.GROQ_API_KEY;
  if (!key) {
    // Signal the client to use its offline fallback.
    return NextResponse.json({ error: "no_key" }, { status: 503 });
  }

  let messages: ChatMessage[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Keep only well-formed, recent turns.
  const history = messages
    .filter((m) => (m?.role === "user" || m?.role === "assistant") && typeof m?.content === "string")
    .slice(-8);

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        temperature: 0.4,
        max_tokens: 400,
        messages: [{ role: "system", content: systemPrompt }, ...history],
      }),
    });

    if (!res.ok) {
      let detail = "";
      try {
        const e = await res.json();
        detail = e?.error?.message || JSON.stringify(e).slice(0, 200);
      } catch {
        detail = (await res.text().catch(() => "")).slice(0, 200);
      }
      // Note: never includes the API key — only Groq's error message.
      return NextResponse.json({ error: "upstream", upstreamStatus: res.status, detail }, { status: 502 });
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) return NextResponse.json({ error: "empty" }, { status: 502 });
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "network" }, { status: 502 });
  }
}
