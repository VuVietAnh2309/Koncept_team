"use client";

import { useState } from "react";
import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Hiểu vấn đề của bạn trước khi nói tới giải pháp. Kết quả: scope rõ ràng, rủi ro được nêu sớm.",
    detail: "Kick-off call · Requirements doc · Risk matrix",
  },
  {
    n: "02",
    title: "Design & Architecture",
    desc: "Wireframe / API design / system diagram. Bạn duyệt trước khi team viết dòng code đầu tiên.",
    detail: "System design · API spec · UI wireframe",
  },
  {
    n: "03",
    title: "Build",
    desc: "Sprint 1–2 tuần. Demo định kỳ. Code review nội bộ. CI/CD ngay từ đầu, không để đến cuối.",
    detail: "Sprint planning · Weekly demo · CI/CD pipeline",
  },
  {
    n: "04",
    title: "Ship & Iterate",
    desc: "Triển khai production, monitoring, hand-off tài liệu. Hỗ trợ tiếp tục nếu bạn cần.",
    detail: "Production deploy · Monitoring · Handoff docs",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="section-y border-t border-[var(--color-border)] bg-[var(--color-card-alt)] relative overflow-hidden"
    >
      <div className="container-wide relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
          <div>
            <div className="text-sm text-[var(--color-accent)] mb-4 flex items-center gap-2">
              <span>⑤ Quy trình làm việc</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-fg)] max-w-sm text-balance">
              Kiến tạo giải pháp, quy trình kiểm soát.
            </h2>
          </div>
          <p className="text-[var(--color-muted)] max-w-xs text-sm leading-relaxed md:pt-12">
            4 bước — từ lúc bạn gửi brief tới lúc hệ thống chạy trên production.
          </p>
        </div>

        {/* Glass panel wrapper — 3D perspective */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: "1400px" }}
        >
          {/* Outer tilt container — disable 3D tilt on mobile (looks weird on narrow screen) */}
          <div
            className="md:[transform:rotateX(6deg)]"
            style={{
              transformOrigin: "bottom center",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glow dots row — only show on md+ where they actually align with cells */}
            <div className="hidden md:grid grid-cols-4 mb-0">
              {steps.map((s, idx) => (
                <div key={s.n} className="flex justify-start px-8 md:px-10">
                  <div className="relative">
                    {/* Glow */}
                    <div
                      className="size-3 rounded-full transition-all duration-300"
                      style={{
                        background: active === idx
                          ? "radial-gradient(circle, #f5b942 0%, #c2410c 60%, transparent 100%)"
                          : "radial-gradient(circle, rgba(255,220,120,0.9) 0%, rgba(200,160,60,0.4) 60%, transparent 100%)",
                        boxShadow: active === idx
                          ? "0 0 12px 4px rgba(194,65,12,0.5), 0 0 24px 8px rgba(245,185,66,0.3)"
                          : "0 0 8px 2px rgba(245,185,66,0.5), 0 0 16px 4px rgba(245,185,66,0.2)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Glass panel */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 2px 0 rgba(255,255,255,0.9) inset, 0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4">
                {steps.map((s, idx) => (
                  <div
                    key={s.n}
                    onMouseEnter={() => setActive(idx)}
                    onMouseLeave={() => setActive(null)}
                    className={`relative p-6 md:p-10 cursor-default transition-colors duration-200 ${
                      idx < 3 ? "border-b md:border-b-0 md:border-r border-black/[0.07]" : ""
                    }`}
                    style={{
                      background: active === idx ? "rgba(255,255,255,0.6)" : "transparent",
                    }}
                  >
                    <div
                      className="font-mono text-xs mb-4 transition-colors duration-200"
                      style={{ color: active === idx ? "var(--color-accent)" : "rgba(0,0,0,0.3)" }}
                    >
                      {s.n}
                    </div>
                    <h3 className="text-base font-semibold mb-3 text-[var(--color-fg)] leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {s.desc}
                    </p>
                    {/* Detail — fade in on hover, no height change */}
                    <motion.div
                      animate={{ opacity: active === idx ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t text-xs font-mono text-[var(--color-accent)]"
                      style={{ borderColor: "rgba(194,65,12,0.2)", minHeight: 36 }}
                    >
                      {s.detail}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Bottom edge shine */}
              <div
                className="h-px w-full"
                style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.9) 70%, transparent)" }}
              />
            </div>

            {/* Wood desk layer 1 — thicker, darker grain (hidden on mobile) */}
            <div
              className="hidden md:block mx-4 h-5 rounded-b-2xl"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.06) 1px, transparent 2px, transparent 18px),
                  repeating-linear-gradient(90deg, transparent 0px, rgba(0,0,0,0.06) 1px, transparent 3px, transparent 35px),
                  linear-gradient(to bottom, #b8894e, #a07840)
                `,
                boxShadow: "0 2px 0 rgba(255,255,255,0.18) inset, 0 -1px 0 rgba(0,0,0,0.15) inset",
                border: "1px solid rgba(160,120,60,0.6)",
                borderTop: "none",
              }}
            />
            {/* Wood desk layer 2 — slightly narrower, slightly lighter (hidden on mobile) */}
            <div
              className="hidden md:block mx-8 h-3 rounded-b-xl"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.05) 1px, transparent 2px, transparent 22px),
                  linear-gradient(to bottom, #c8a06a, #b08848)
                `,
                boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset",
                border: "1px solid rgba(180,140,80,0.5)",
                borderTop: "none",
              }}
            />
          </div>

          {/* Cast shadow from desk onto cream surface (hidden on mobile) */}
          <div
            className="hidden md:block mx-6 mt-1 h-6 rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(120,70,20,0.3) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
          />
        </motion.div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 sm:px-8 py-5 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.7)",
            backdropFilter: "blur(12px)",
          }}
        >
          <p className="text-sm text-[var(--color-muted)]">
            Toàn bộ quy trình thường mất 4–12 tuần tùy scope.
          </p>
          <a
            href="#contact"
            className="text-sm font-medium text-[var(--color-fg)] hover:text-[var(--color-accent)] transition-colors group flex items-center gap-1.5"
          >
            Bắt đầu ngay
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
