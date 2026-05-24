"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "6%" : "-6%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-6%" : "6%", opacity: 0 }),
};

const categoryColor: Record<string, string> = {
  "Web & Backend": "#3b82f6",
  "Mobile & Multimedia": "#f59e0b",
  "Fullstack": "#8b5cf6",
  "AI / ML": "#10b981",
};

export default function SelectedWork() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      const clamped = (next + projects.length) % projects.length;
      setDir(next > current ? 1 : -1);
      setCurrent(clamped);
    },
    [current]
  );

  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  const p = projects[current];
  const accent = categoryColor[p.category] ?? "var(--color-accent)";

  return (
    <section id="work" className="section-y border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="container-wide">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-sm text-[var(--color-accent)] mb-3">② Dự án</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl text-balance">
              Từ web platform tới hệ AI chạy production.
            </h2>
          </div>
        </div>

        {/* Carousel card */}
        <div className="relative rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-card)]" style={{ height: 600 }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={p.id}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
              className="absolute inset-0 grid md:grid-cols-[1fr_380px]"
            >
              {/* Left: project info */}
              <div className="p-8 md:p-12 flex flex-col">
                <div className="flex items-center gap-5 mb-6">
                  <span
                    className="inline-block h-2 w-2 rounded-full shrink-0"
                    style={{ background: accent }}
                  />
                  <span className="text-sm text-[var(--color-muted)]">{p.client}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-4 text-balance">
                  {p.title}
                </h3>
                <p className="text-[15px] text-[var(--color-muted)] leading-relaxed mb-6">
                  {p.summary}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[14px] text-[var(--color-fg)]/85 leading-relaxed">
                      <span
                        className="mt-2 size-1.5 rounded-full shrink-0"
                        style={{ background: accent }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                {p.metric && (
                  <div
                    className="text-sm font-medium mb-5 pl-4 border-l-2 py-1"
                    style={{ borderColor: accent, color: "var(--color-fg)" }}
                  >
                    {p.metric}
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)]">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-bg)] text-[var(--color-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: clean image */}
              {p.image && (
                <div className="hidden md:block relative overflow-hidden border-l border-[var(--color-border)]">
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation: dots + note */}
        <div className="mt-6 flex items-center justify-between gap-6">
          <p className="text-xs italic text-[var(--color-muted)] hidden md:block">
            Một vài dự án có ràng buộc bảo mật, mô tả chỉ ở mức cho phép.
          </p>
          <div className="flex items-center gap-5 ml-auto">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Dự án ${i + 1}`}
                className={`size-3 rounded-full border-2 transition-all duration-250 ${
                  i === current
                    ? "bg-[var(--color-accent)] border-[var(--color-accent)] scale-110"
                    : "bg-transparent border-[var(--color-fg)]/30 hover:border-[var(--color-fg)]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
