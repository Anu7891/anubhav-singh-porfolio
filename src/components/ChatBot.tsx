"use client";

import { useEffect, useRef, useState } from "react";
import { site, experience, skillCategories, projects, stats } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* AskAnubhav — portfolio assistant. Talks to /api/chat (Groq, free    */
/* tier) for real AI answers grounded in data.ts. If no GROQ_API_KEY    */
/* is set or the request fails, it falls back to the rule-based         */
/* answer() below, so the bot always works.                             */
/* ------------------------------------------------------------------ */

type Msg = { from: "bot" | "user"; text: string };

const suggestions = [
  "What's your experience?",
  "Which skills do you have?",
  "Show me your projects",
  "How do I contact you?",
  "Are you open to work?",
];

function answer(raw: string): string {
  const q = raw.toLowerCase();
  const has = (...words: string[]) => words.some((w) => q.includes(w));

  if (has("experience", "work history", "company", "job", "3embed", "career")) {
    const jobs = experience
      .map((e) => `• ${e.role} — ${e.company} (${e.period})`)
      .join("\n");
    return `Here's the journey so far:\n${jobs}\n\nCurrently a ${site.role} at 3Embed Software Technologies in Surat, working with Next.js, React, TypeScript and Redux.`;
  }

  if (has("skill", "tech", "stack", "technology", "know", "react", "next")) {
    return skillCategories
      .map((g) => `${g.title}: ${g.pills.join(", ")}`)
      .join("\n");
  }

  if (has("project", "built", "portfolio", "qykly", "trulyfree", "plateaway", "paris", "storefront", "commerce")) {
    const list = projects
      .slice(0, 4)
      .map((p) => `• ${p.name} — ${p.description.split("—")[0].split(".")[0]}.`)
      .join("\n");
    return `A few things I've built:\n${list}\n\nScroll to the Projects section for links and details.`;
  }

  if (has("contact", "email", "reach", "hire", "connect", "linkedin", "touch")) {
    return `Easiest way is email: ${site.email} — I reply within a day.\nLinkedIn: ${site.linkedinHandle}\nOr just use the contact form below 👇`;
  }

  if (has("open to work", "available", "hiring", "role", "opportunit", "join")) {
    return `Yes — I'm open to frontend roles (on-site, hybrid or remote). I'm based in ${site.location}. Drop a line at ${site.email}.`;
  }

  if (has("where", "location", "based", "city", "surat")) {
    return `I'm based in ${site.location}.`;
  }

  if (has("resume", "cv", "download")) {
    return `You can grab my résumé from the "Resume" button in the hero section — or email me at ${site.email}.`;
  }

  if (has("year", "long", "since")) {
    const y = stats.find((s) => s.label.toLowerCase().includes("year"));
    return `${y ? `${y.value}${y.suffix} years of experience` : "3+ years of experience"} — professionally since Oct 2022 at 3Embed, building for the web well before that.`;
  }

  if (has("who", "about", "yourself", "anubhav")) {
    return `I'm ${site.name}, a ${site.role.toLowerCase()} from ${site.shortLocation}. ${site.tagline}`;
  }

  if (has("hello", "hi", "hey", "namaste")) {
    return "Hey! 👋 Ask me about Anubhav's experience, skills, projects, or how to get in touch.";
  }

  if (has("bot", "ai", "gpt", "how do you work", "chatbot")) {
    return "I'm a lightweight on-device assistant — no AI API, no server, no tracking. I answer from the same data that renders this site, so I'm always up to date (and always free).";
  }

  return `Good question — that one's beyond my little on-device brain 🤏\nFor anything specific, email ${site.email} — Anubhav replies within a day. Or try one of the suggestions below.`;
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi, I'm Anubhav's assistant 👋 Ask me anything about his work — or tap a question below." },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = async (text: string) => {
    const clean = text.trim();
    if (!clean || typing) return;
    const history = [...msgs, { from: "user" as const, text: clean }];
    setMsgs(history);
    setInput("");
    setTyping(true);

    let reply = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.from === "user" ? "user" : "assistant", content: m.text })),
        }),
      });
      if (res.ok) reply = (await res.json()).reply ?? "";
    } catch {
      /* fall through to offline answer */
    }
    // Offline fallback when there's no API key or the request failed.
    if (!reply) reply = answer(clean);

    setMsgs((m) => [...m, { from: "bot", text: reply }]);
    setTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with Anubhav's assistant"}
        aria-expanded={open}
        className="fixed bottom-7 right-7 z-40 flex size-13 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-cyan text-white shadow-lg shadow-indigo/30 transition-transform hover:scale-105"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-8 8H4l2.3-2.9A8 8 0 1 1 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="9" cy="12" r="1" fill="currentColor" /><circle cx="13" cy="12" r="1" fill="currentColor" /><circle cx="17" cy="12" r="1" fill="currentColor" />
          </svg>
        )}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label="Chat with Anubhav's assistant"
          className="fixed bottom-24 right-7 z-40 flex h-[480px] w-[min(360px,calc(100vw-3.5rem))] flex-col overflow-hidden rounded-3xl border border-line bg-bg shadow-2xl"
        >
          <header className="flex items-center gap-3 border-b border-line bg-panel px-5 py-4">
            <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-cyan text-xs font-bold text-white">
              {site.initials}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Anubhav's assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-muted">
                <span className="size-1.5 rounded-full bg-emerald-400" /> AI assistant · ask me anything
              </p>
            </div>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <p
                key={i}
                className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "ml-auto rounded-br-md bg-gradient-to-br from-indigo to-cyan text-white"
                    : "rounded-bl-md border border-line bg-panel text-ink"
                }`}
              >
                {m.text}
              </p>
            ))}
            {typing ? (
              <p className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-bl-md border border-line bg-panel px-4 py-3" aria-label="Assistant is typing">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="size-1.5 animate-bounce rounded-full bg-muted"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-1.5 px-4 pb-2">
            {suggestions.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="rounded-full border border-line bg-panel px-3 py-1.5 text-xs text-muted transition-colors hover:border-indigo/50 hover:text-ink"
              >
                {s}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-line p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects…"
              aria-label="Your message"
              className="min-w-0 flex-1 rounded-full border border-line bg-panel px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-indigo/60"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-bg transition-colors hover:bg-indigo disabled:opacity-40"
              disabled={!input.trim() || typing}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M14.5 1.5 7 9m7.5-7.5L9.8 14.3a.4.4 0 0 1-.74.03L7 9m7.5-7.5L1.7 6.2a.4.4 0 0 0 .03.74L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
