"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { team } from "@/data/team";

function GeometricCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 48;
    type Node = { x: number; y: number; vx: number; vy: number };
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const LINK_DIST = 180;
    const TRI_DIST = 160;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw triangles first
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx1 = nodes[i].x - nodes[j].x;
          const dy1 = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx1 * dx1 + dy1 * dy1) > TRI_DIST) continue;
          for (let k = j + 1; k < nodes.length; k++) {
            const dx2 = nodes[i].x - nodes[k].x;
            const dy2 = nodes[i].y - nodes[k].y;
            const dx3 = nodes[j].x - nodes[k].x;
            const dy3 = nodes[j].y - nodes[k].y;
            if (
              Math.sqrt(dx2 * dx2 + dy2 * dy2) < TRI_DIST &&
              Math.sqrt(dx3 * dx3 + dy3 * dy3) < TRI_DIST
            ) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.lineTo(nodes[k].x, nodes[k].y);
              ctx.closePath();
              ctx.fillStyle = "rgba(180,170,160,0.07)";
              ctx.fill();
            }
          }
        }
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(160,150,140,${0.2 * (1 - dist / LINK_DIST)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(160,145,130,0.35)";
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}

const accentMap: Record<string, string> = {
  vuvietanh:  "#c2410c",
  trunghieu:  "#16a34a",
  damvietanh: "#ea580c",
  quangquan:  "#7c3aed",
};

export default function Team() {
  return (
    <section
      id="team"
      className="section-y border-t border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden"
    >
      <GeometricCanvas />
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="text-sm text-[var(--color-accent)] mb-5">④ Thành viên</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-xl text-balance">
              Đội ngũ chuyên sâu, làm chủ mọi mảnh ghép công nghệ.
            </h2>
            <div className="md:text-right shrink-0 space-y-2">
              <div className="flex md:justify-end items-center gap-2">
                <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-sm font-medium">4 kỹ sư · 3+ năm kinh nghiệm · production-ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Group photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 relative rounded-2xl overflow-hidden border border-[var(--color-border)] aspect-[16/7] bg-[var(--color-card)]"
        >
          <img
            src="/team1.jpg"
            alt="Koncept team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-5 md:bottom-6 md:left-7 text-white">
            <div className="text-xs md:text-sm font-mono uppercase tracking-wider opacity-80">Koncept · Hà Nội</div>
            <div className="text-base md:text-xl font-medium mt-1">Cùng nhau dựng nên những hệ thống thật.</div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, idx) => {
            const accent = accentMap[member.id] ?? "var(--color-accent)";
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative bg-[var(--color-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top accent stripe */}
                <div className="h-1 w-full" style={{ background: accent }} />

                {/* Avatar */}
                <div className="px-6 pt-6 pb-4 flex items-center gap-4">
                  <div
                    className="size-16 rounded-full overflow-hidden border-2 shrink-0"
                    style={{ borderColor: accent + "55" }}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-semibold text-sm leading-tight">{member.name}</span>
                      {member.isLeader && (
                        <span
                          className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full font-medium text-white shrink-0"
                          style={{ background: accent }}
                        >
                          <Star className="size-2.5 fill-current" />
                          Lead
                        </span>
                      )}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: accent }}>
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 border-t border-[var(--color-border)]" />

                {/* Bio */}
                <p className="px-6 pt-4 pb-3 text-xs text-[var(--color-muted)] leading-relaxed flex-1">
                  {member.shortBio}
                </p>

                {/* Skills */}
                <div className="px-6 pb-4 flex flex-wrap gap-1">
                  {member.skills.slice(0, 5).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: accent,
                        borderColor: accent + "30",
                        background: accent + "0d",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Experience */}
                <div className="mx-6 mb-5 flex items-center gap-2 pt-3 border-t border-[var(--color-border)]">
                  <span className="inline-block size-1.5 rounded-full shrink-0" style={{ background: accent }} />
                  <span className="text-[11px] text-[var(--color-muted)]">3+ năm kinh nghiệm · production</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
