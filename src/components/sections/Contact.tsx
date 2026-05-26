"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: Mail,
    label: "Email · Team Leader",
    value: "vietanhresearcher@gmail.com",
    href: "mailto:vietanhresearcher@gmail.com?subject=[Koncept] Project inquiry",
    primary: true,
  },
  {
    icon: MapPin,
    label: "Vị trí",
    value: "Hà Nội, Việt Nam — làm việc remote toàn cầu",
    href: null,
    primary: false,
  },
  {
    icon: Clock,
    label: "Thời gian phản hồi",
    value: "Trong vòng 24 giờ làm việc",
    href: null,
    primary: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden"
    >

      <div className="container-wide section-y relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 md:gap-20 items-center"
        >
          {/* Left */}
          <div>
            <div className="text-sm text-[var(--color-accent)] mb-6 flex items-center gap-2">
              <span>⑥ Liên hệ</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-balance text-[var(--color-fg)]">
              Bạn có ý tưởng?{" "}
              <span className="text-[var(--color-fg)]">
                Hãy nói team nghe.
              </span>
            </h2>
            <p className="mt-6 text-[var(--color-muted)] max-w-md leading-relaxed text-sm">
              Mô tả ngắn gọn về dự án, ngân sách và timeline. Team sẽ phản hồi
              trong vòng 24 giờ làm việc với đánh giá khả thi và đề xuất bước
              tiếp theo.
            </p>
          </div>

          {/* Right — cards */}
          <div className="space-y-3">
            {cards.map((c, i) => {
              const Inner = (
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5 rounded-2xl transition-all duration-200"
                  style={{
                    background: c.primary
                      ? "rgba(255,255,255,0.75)"
                      : "rgba(255,255,255,0.45)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: c.primary
                      ? "1px solid rgba(255,255,255,0.9)"
                      : "1px solid rgba(255,255,255,0.6)",
                    boxShadow: c.primary
                      ? "0 4px 24px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.8) inset"
                      : "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="shrink-0 size-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: c.primary
                        ? "rgba(194,65,12,0.10)"
                        : "rgba(0,0,0,0.05)",
                    }}
                  >
                    <c.icon
                      className="size-4"
                      style={{ color: c.primary ? "var(--color-accent)" : "var(--color-muted)" }}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[var(--color-muted)] mb-0.5">
                      {c.label}
                    </div>
                    <div
                      className="text-xs md:text-sm font-medium break-words"
                      style={{ color: c.primary ? "var(--color-fg)" : "var(--color-fg)" }}
                    >
                      {c.value}
                    </div>
                  </div>

                  {c.href && (
                    <ArrowUpRight
                      className="size-4 shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
                      strokeWidth={1.6}
                    />
                  )}
                </motion.div>
              );

              return c.href ? (
                <a key={c.label} href={c.href}>
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Image band */}
      <div className="grid md:grid-cols-2 h-56 md:h-64 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src="/teamwork.png"
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative overflow-hidden">
          <img
            src="/teamwork_2.png"
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
}
