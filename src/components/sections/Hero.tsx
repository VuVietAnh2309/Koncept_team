"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

// ── Perspective grid (subtle overlay trên ảnh) ───────────────────────────────

function PerspectiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let offset = 0;
    const mouse = { x: 0.5, y: 0.5 };
    const vpSmooth = { x: 0.5, y: 0.38 };

    const onResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    onResize();
    window.addEventListener("resize", onResize);

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouse);

    const COLS = 18;
    const H_LINES = 14;

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      vpSmooth.x += (0.42 + mouse.x * 0.16 - vpSmooth.x) * 0.04;
      vpSmooth.y += (0.3 + mouse.y * 0.1 - vpSmooth.y) * 0.04;

      const vpX = vpSmooth.x * W;
      const vpY = vpSmooth.y * H;

      ctx.clearRect(0, 0, W, H);
      offset = (offset + 0.2) % (H / H_LINES);

      for (let i = 0; i <= COLS; i++) {
        const xBot = (i / COLS) * W;
        const grad = ctx.createLinearGradient(vpX, vpY, xBot, H);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.5, "rgba(255,255,255,0.04)");
        grad.addColorStop(1, "rgba(255,255,255,0.12)");
        ctx.beginPath();
        ctx.moveTo(vpX, vpY);
        ctx.lineTo(xBot, H);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      const floorH = H - vpY;
      for (let i = 0; i <= H_LINES + 1; i++) {
        const raw = (i + offset / (floorH / H_LINES)) / H_LINES;
        const p = Math.pow(Math.min(raw, 1), 2.5);
        const y = vpY + p * floorH;
        if (y < vpY || y > H + 2) continue;
        const progress = (y - vpY) / floorH;
        const halfW = progress * W * 0.6;
        const xL = Math.max(0, vpX - halfW);
        const xR = Math.min(W, vpX + halfW);

        ctx.beginPath();
        ctx.moveTo(xL, y);
        ctx.lineTo(xR, y);
        ctx.strokeStyle = `rgba(255,255,255,${progress * 0.1})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    />
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

const trustedBy = ["Samsung R&D", "Viettel", "Prep Education", "FPT IS", "Tokyo Tech Lab", "Vietsens"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0d0d0d]" style={{ height: "100svh", minHeight: 480 }}>

      {/* Background photo — full bleed */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center select-none pointer-events-none"
        />
        {/* Tối nhẹ để grid và text ở bottom bar đọc được */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-40"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }}
        />
      </div>

      {/* Perspective grid overlay */}
      <PerspectiveGrid />


      {/* Bottom marquee bar */}
      <div className="absolute bottom-0 inset-x-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
        <div className="flex items-center h-12">
          {/* Label cố định */}
          <div className="shrink-0 px-3 md:px-6 border-r border-white/15 h-full flex items-center">
            <span className="text-[10px] md:text-xs font-medium text-white/40 uppercase tracking-widest whitespace-nowrap">
              Our team previously at
            </span>
          </div>

          {/* Marquee track */}
          <div className="flex-1 overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="flex items-center gap-12 whitespace-nowrap w-max"
            >
              {[...trustedBy, ...trustedBy].map((c, i) => (
                <span
                  key={i}
                  className="text-sm font-semibold text-white/55 tracking-wide"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
