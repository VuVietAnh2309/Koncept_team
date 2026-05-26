"use client";

import { motion } from "motion/react";
import { Code2, Smartphone, Brain, Layers } from "lucide-react";

const services = [
  {
    icon: Code2,
    color: "#c2410c",
    title: "Web Platforms & Backend",
    desc: "RESTful APIs, microservices, hệ phân tán, packet analysis cấp hệ thống. Stack chính Go, Node.js, Python.",
    items: ["Microservices", "API design", "Data pipelines", "DevOps & CI/CD"],
    illustration: (
      <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
        <rect x="10" y="15" width="100" height="62" rx="6" fill="#f1f0ed" stroke="#e2deda" strokeWidth="1.5"/>
        <rect x="10" y="15" width="100" height="18" rx="6" fill="#e2deda"/>
        <rect x="10" y="27" width="100" height="6" fill="#e2deda"/>
        <circle cx="22" cy="24" r="3" fill="#ef4444"/>
        <circle cx="32" cy="24" r="3" fill="#f59e0b"/>
        <circle cx="42" cy="24" r="3" fill="#22c55e"/>
        <rect x="20" y="42" width="35" height="4" rx="2" fill="#c2410c" opacity="0.7"/>
        <rect x="20" y="50" width="55" height="3" rx="1.5" fill="#d4d4d4"/>
        <rect x="20" y="57" width="45" height="3" rx="1.5" fill="#d4d4d4"/>
        <rect x="20" y="64" width="30" height="3" rx="1.5" fill="#c2410c" opacity="0.4"/>
        <rect x="75" y="42" width="24" height="28" rx="3" fill="#c2410c" opacity="0.12" stroke="#c2410c" strokeWidth="1" strokeOpacity="0.3"/>
        <rect x="79" y="46" width="16" height="2" rx="1" fill="#c2410c" opacity="0.4"/>
        <rect x="79" y="51" width="12" height="2" rx="1" fill="#c2410c" opacity="0.3"/>
        <rect x="79" y="56" width="14" height="2" rx="1" fill="#c2410c" opacity="0.3"/>
      </svg>
    ),
  },
  {
    icon: Smartphone,
    color: "#0891b2",
    title: "Mobile & Multimedia",
    desc: "Ứng dụng Android từ tầng app xuống native (C++/NDK), tối ưu hiệu năng multimedia, tích hợp AI on-device.",
    items: ["Android native", "Jetpack Compose", "Multimedia APIs", "On-device AI"],
    illustration: (
      <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
        <rect x="38" y="8" width="44" height="74" rx="8" fill="#f1f0ed" stroke="#e2deda" strokeWidth="1.5"/>
        <rect x="43" y="15" width="34" height="54" rx="3" fill="#dbeafe"/>
        <circle cx="60" cy="76" r="3" fill="#d4d4d4"/>
        <rect x="52" y="10" width="16" height="2.5" rx="1.25" fill="#d4d4d4"/>
        <rect x="46" y="20" width="28" height="16" rx="2" fill="#0891b2" opacity="0.2"/>
        <circle cx="60" cy="28" r="6" fill="#0891b2" opacity="0.5"/>
        <rect x="46" y="40" width="28" height="3" rx="1.5" fill="#0891b2" opacity="0.5"/>
        <rect x="46" y="46" width="20" height="2.5" rx="1.25" fill="#d4d4d4"/>
        <rect x="46" y="52" width="24" height="2.5" rx="1.25" fill="#d4d4d4"/>
        <rect x="46" y="58" width="16" height="6" rx="3" fill="#0891b2" opacity="0.3"/>
        <rect x="88" y="30" width="22" height="30" rx="5" fill="#f1f0ed" stroke="#e2deda" strokeWidth="1.5"/>
        <rect x="91" y="35" width="16" height="10" rx="2" fill="#e0f2fe"/>
        <rect x="91" y="48" width="16" height="2" rx="1" fill="#d4d4d4"/>
        <rect x="91" y="52" width="12" height="2" rx="1" fill="#d4d4d4"/>
      </svg>
    ),
  },
  {
    icon: Brain,
    color: "#7c3aed",
    title: "AI / ML Solutions",
    desc: "Từ huấn luyện mô hình tới triển khai production: LLMs, NLP, Computer Vision, OCR, hệ thống recommendation.",
    items: ["LLM applications", "Computer Vision", "NLP & OCR", "MLOps"],
    illustration: (
      <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
        <circle cx="60" cy="45" r="18" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
        <circle cx="60" cy="45" r="10" fill="#7c3aed" opacity="0.2"/>
        <circle cx="60" cy="45" r="4" fill="#7c3aed" opacity="0.6"/>
        {/* 0° */}
        <line x1="60" y1="45" x2="78" y2="45" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4"/>
        <circle cx="88" cy="45" r="5" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
        {/* 60° */}
        <line x1="60" y1="45" x2="69" y2="30" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4"/>
        <circle cx="74" cy="21" r="5" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
        {/* 120° */}
        <line x1="60" y1="45" x2="51" y2="30" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4"/>
        <circle cx="46" cy="21" r="5" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
        {/* 180° */}
        <line x1="60" y1="45" x2="42" y2="45" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4"/>
        <circle cx="32" cy="45" r="5" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
        {/* 240° */}
        <line x1="60" y1="45" x2="51" y2="60" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4"/>
        <circle cx="46" cy="69" r="5" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
        {/* 300° */}
        <line x1="60" y1="45" x2="69" y2="60" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.4"/>
        <circle cx="74" cy="69" r="5" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="1.5"/>
        <circle cx="32" cy="20" r="4" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="1"/>
        <circle cx="88" cy="20" r="4" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="1"/>
        <circle cx="32" cy="70" r="4" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="1"/>
        <circle cx="88" cy="70" r="4" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="1"/>
        <line x1="36" y1="22" x2="44" y2="30" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2"/>
        <line x1="84" y1="22" x2="76" y2="30" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2"/>
        <line x1="36" y1="68" x2="44" y2="60" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2"/>
        <line x1="84" y1="68" x2="76" y2="60" stroke="#7c3aed" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    icon: Layers,
    color: "#059669",
    title: "Fullstack Product Dev",
    desc: "Đi cùng startup và doanh nghiệp từ MVP tới khi sản phẩm đứng vững. Frontend React, backend Node.js.",
    items: ["MVP build", "React / Next.js", "Database design", "Long-term maintenance"],
    illustration: (
      <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
        <ellipse cx="60" cy="72" rx="36" ry="8" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1.5"/>
        <rect x="30" y="52" width="60" height="20" rx="4" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1.5"/>
        <ellipse cx="60" cy="52" rx="30" ry="7" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1.5"/>
        <rect x="36" y="33" width="48" height="20" rx="4" fill="#f0fdf4" stroke="#a7f3d0" strokeWidth="1.5"/>
        <ellipse cx="60" cy="33" rx="24" ry="6" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="1.5"/>
        <rect x="42" y="16" width="36" height="18" rx="4" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1.5"/>
        <ellipse cx="60" cy="16" rx="18" ry="5" fill="#059669" opacity="0.3" stroke="#059669" strokeWidth="1" strokeOpacity="0.5"/>
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="section-y border-t border-[var(--color-border)] bg-[var(--color-card-alt)] relative overflow-hidden">

      {/* 3D perspective grid background */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Vertical lines */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "70%",
            backgroundImage: "linear-gradient(to right, #c8c4be 1px, transparent 1px)",
            backgroundSize: "80px 100%",
            transform: "perspective(600px) rotateX(55deg)",
            transformOrigin: "bottom center",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 100%)",
          }}
        />
        {/* Horizontal lines */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "70%",
            backgroundImage: "linear-gradient(to bottom, transparent 0%, #c8c4be 1px, transparent 1px)",
            backgroundSize: "100% 60px",
            transform: "perspective(600px) rotateX(55deg)",
            transformOrigin: "bottom center",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 100%)",
          }}
        />
        {/* Fade overlay top */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "70%",
            background: "linear-gradient(to bottom, var(--color-bg) 0%, transparent 40%)",
          }}
        />
        {/* Subtle accent glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "60%",
            height: "30%",
            background: "radial-gradient(ellipse at center bottom, rgba(194,65,12,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-sm text-[var(--color-accent)] mb-3">③ Dịch vụ</div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl text-balance">
              Bốn mảng chính, một team xuyên suốt.
            </h2>
          </div>
          <p className="text-[var(--color-muted)] max-w-sm text-sm leading-relaxed">
            Chúng tôi không nhận mọi loại dự án — chỉ những việc team có thể làm tốt nhất, dựa trên thế mạnh thật từ kinh nghiệm production.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Illustration — top right (hidden on mobile to give text full width) */}
              <div className="hidden sm:block absolute top-4 right-4 w-28 h-20 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {s.illustration}
              </div>

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center size-11 rounded-xl mb-5"
                style={{ background: s.color + "18" }}
              >
                <s.icon className="size-5" style={{ color: s.color }} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 sm:max-w-[60%]">{s.title}</h3>

              {/* Desc */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 sm:max-w-[65%]">
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
