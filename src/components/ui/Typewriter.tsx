"use client";

import { useEffect, useState } from "react";

export function Typewriter({ phrases, className }: { phrases: string[]; className?: string }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];

    let delay = deleting ? 45 : 85;
    if (!deleting && text === current) delay = 1500; // hold at full word
    else if (deleting && text === "") delay = 350; // brief pause before next

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((v) => v + 1);
        return;
      }
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className} aria-hidden="true">
      <span>{text}</span>
      <span className="tw-caret" />
    </span>
  );
}
