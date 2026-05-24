"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Dự án" },
  { href: "#services", label: "Dịch vụ" },
  { href: "#team", label: "Thành viên" },
  { href: "#process", label: "Quy trình" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-white/70 border-b border-black/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center">
            <img
              src="/logo.png"
              alt="Koncept Production Team"
              className="h-20 w-auto transition-all duration-500"
              style={{
                filter: open
                  ? "brightness(10)"
                  : scrolled
                  ? "brightness(0)"
                  : "brightness(10)",
              }}
            />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`relative z-[60] flex items-center justify-center size-10 rounded-full transition-colors ${
              open
                ? "text-white hover:bg-white/10"
                : scrolled
                ? "text-[var(--color-fg)] hover:bg-[var(--color-border)]"
                : "text-white hover:bg-white/15"
            }`}
            aria-label={open ? "Đóng menu" : "Mở menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Circular reveal overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0px at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(200vmax at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex"
            style={{ background: "#111" }}
          >
            {/* Right: blurred gradient panel */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0f0f0f 45%, #1a1f2e 65%, #1e2a3a 80%, #162032 100%)",
              }}
            />
            {/* Blurred orb right side */}
            <div
              className="absolute right-0 top-0 w-1/2 h-full opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 40%, #1e3a5f 0%, #0d1f35 40%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute right-10 bottom-20 w-72 h-72 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, #c2410c 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col">
              <div className="h-16" />
              <nav className="flex flex-col justify-center py-8 gap-0 flex-1 px-12 md:px-20">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.07, ease: "easeOut", duration: 0.4 }}
                    className="group flex items-baseline gap-6 py-6 border-b border-white/10 hover:border-[var(--color-accent)] transition-colors"
                  >
                    <span className="font-mono text-xs text-white/30 w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-3xl sm:text-5xl font-semibold tracking-tight text-white group-hover:text-[var(--color-accent)] transition-colors">
                      {l.label}
                    </span>
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.58 }}
                  className="mt-10 flex items-center gap-10"
                >
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] text-white px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity"
                  >
                    Hợp tác ngay →
                  </a>

                  <div className="text-sm text-white/40 font-mono hidden md:block">
                    vietanhresearcher@gmail.com
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
