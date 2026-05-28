"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

// Wireframe cube: position as fraction of canvas, size in px, rotation speeds rad/s
const CUBE_DEFS = [
  { px: 0.82, py: 0.22, size: 72,  srx: 0.28, sry: 0.42, srz: 0.12, color: "rgba(150,130,110,0.32)" },
  { px: 0.10, py: 0.72, size: 50,  srx: -0.18, sry: 0.60, srz: 0.22, color: "rgba(150,130,110,0.25)" },
  { px: 0.62, py: 0.88, size: 34,  srx: 0.35,  sry: -0.30, srz: 0.45, color: "rgba(194,65,12,0.22)"  },
  { px: 0.50, py: 0.10, size: 28,  srx: 0.20,  sry: 0.55, srz: -0.20, color: "rgba(150,130,110,0.18)" },
];

const CUBE_VERTS: [number,number,number][] = [
  [-1,-1,-1],[1,-1,-1],[1,1,-1],[-1,1,-1],
  [-1,-1, 1],[1,-1, 1],[1,1, 1],[-1,1, 1],
];
const CUBE_EDGES: [number,number][] = [
  [0,1],[1,2],[2,3],[3,0],
  [4,5],[5,6],[6,7],[7,4],
  [0,4],[1,5],[2,6],[3,7],
];

function rot3(x: number, y: number, z: number, rx: number, ry: number, rz: number) {
  // X
  let y1 = y * Math.cos(rx) - z * Math.sin(rx);
  let z1 = y * Math.sin(rx) + z * Math.cos(rx);
  y = y1; z = z1;
  // Y
  let x2 = x * Math.cos(ry) + z * Math.sin(ry);
  let z2 = -x * Math.sin(ry) + z * Math.cos(ry);
  x = x2; z = z2;
  // Z
  let x3 = x * Math.cos(rz) - y * Math.sin(rz);
  let y3 = x * Math.sin(rz) + y * Math.cos(rz);
  return [x3, y3, z2] as const;
}

function drawCube(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number, size: number,
  rx: number, ry: number, rz: number, color: string,
) {
  const projected = CUBE_VERTS.map(([x, y, z]) => {
    const [px, py] = rot3(x * size, y * size, z * size, rx, ry, rz);
    return [cx + px, cy + py] as const;
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  CUBE_EDGES.forEach(([a, b]) => {
    ctx.beginPath();
    ctx.moveTo(projected[a][0], projected[a][1]);
    ctx.lineTo(projected[b][0], projected[b][1]);
    ctx.stroke();
  });
}

function FloatingCubes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const start = Date.now();

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = (Date.now() - start) / 1000;

      CUBE_DEFS.forEach((c) => {
        drawCube(
          ctx,
          canvas.width * c.px,
          canvas.height * c.py,
          c.size,
          t * c.srx, t * c.sry, t * c.srz,
          c.color,
        );
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden />;
}

const PANELS = [
  {
    id: 0,
    n: "01",
    label: "Engineering",
    headline: "Smart Solutions.",
    italic: false,
    body: "Koncept là nhóm kỹ sư phần mềm tại Hà Nội. Chúng tôi nhận làm web platform, ứng dụng di động, hệ thống multimedia và giải pháp AI/ML — từ ý tưởng tới bản chạy được trên production.",
    extra: "cta",
  },
  {
    id: 1,
    n: "02",
    label: "Infrastructure",
    headline: "Scalable Software.",
    italic: false,
    body: "Từ microservices backend đến MLOps pipeline — chúng tôi xây dựng hệ thống chạy ổn định trên production.",
    extra: "capabilities",
  },
  {
    id: 2,
    n: "03",
    label: "Delivery",
    headline: "Real Impact.",
    italic: true,
    body: "Mỗi dòng code đều hướng tới kết quả thực — sản phẩm đến tay người dùng, hệ thống xử lý được tải thật, pipeline không bao giờ ngừng chạy.",
    extra: "stats",
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};

const SWIPE_THRESHOLD = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export default function About() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = (idx: number) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const next = () => goTo((current + 1) % PANELS.length);
  const prev = () => goTo((current - 1 + PANELS.length) % PANELS.length);

  const panel = PANELS[current];

  return (
    <section id="about" className="border-t border-[var(--color-border)] bg-[var(--color-card-alt)] relative overflow-hidden">
      <FloatingCubes />
      <div className="container-wide pt-12 pb-8 relative z-10">

        {/* Section label */}
        <div className="text-base md:text-lg font-medium text-[var(--color-accent)] mb-10">
          ① Về chúng tôi
        </div>

        {/* Panel content — fixed height bằng panel lớn nhất */}
        <div className="relative min-h-[640px] md:min-h-[360px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={panel.id}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -SWIPE_THRESHOLD) next();
              else if (swipe > SWIPE_THRESHOLD) prev();
            }}
            style={{ touchAction: "pan-y" }}
            className="absolute inset-0 grid md:grid-cols-[1fr_400px] gap-8 md:gap-20 items-start cursor-grab active:cursor-grabbing"
          >
            {/* Left: headline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs text-[var(--color-muted)]/50">{panel.n}</span>
                <span className="h-px w-8 bg-[var(--color-accent)] inline-block" />
                <span className="text-sm text-[var(--color-muted)]">{panel.label}</span>
              </div>

              <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.03]">
                {panel.italic ? (
                  <>Real{" "}<span className="text-[var(--color-fg)]">Impact.</span></>
                ) : (
                  panel.headline
                )}
              </h2>
            </div>

            {/* Right: body + extras */}
            <div className="space-y-8 pt-2 md:pt-16">
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                {panel.body}
              </p>

              {panel.extra === "cta" && (
                <div className="flex flex-wrap gap-3">
                  <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] text-[var(--color-bg)] px-6 py-3 text-sm font-medium hover:bg-[var(--color-accent)] transition-colors">
                    Xem dự án
                    <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" />
                  </a>
                  <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-fg)] px-6 py-3 text-sm font-medium hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] transition-colors">
                    Liên hệ team
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}

              {panel.extra === "capabilities" && (
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { k: "Web platform", v: "API, dashboard, hệ phân tán" },
                    { k: "Mobile", v: "Android native, multimedia" },
                    { k: "AI / ML", v: "LLM, NLP, Computer Vision" },
                    { k: "MLOps", v: "K8s, ArgoCD, GitLab CI" },
                  ].map((item) => (
                    <div key={item.k} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 space-y-1">
                      <div className="text-sm font-medium">{item.k}</div>
                      <div className="text-xs text-[var(--color-muted)]">{item.v}</div>
                    </div>
                  ))}
                </div>
              )}

              {panel.extra === "stats" && (
                <div className="grid grid-cols-3 gap-4 pt-2 border-t border-[var(--color-border)]">
                  {[
                    { n: "8", label: "dự án đã ship" },
                    { n: "4", label: "kỹ sư" },
                    { n: "3+", label: "năm kinh nghiệm" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl font-semibold tracking-tight text-[var(--color-accent)]">{s.n}</div>
                      <div className="text-xs text-[var(--color-muted)] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        </div>

        {/* Dots — góc phải dưới */}
        <div className="flex items-center justify-end gap-5 mt-16">
          {PANELS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              aria-label={`Panel ${p.n}`}
              className={`size-3 rounded-full border-2 transition-all duration-200 ${
                i === current
                  ? "bg-[var(--color-accent)] border-[var(--color-accent)] scale-110"
                  : "bg-transparent border-[var(--color-fg)]/30 hover:border-[var(--color-fg)]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
