const stack = [
  { name: "Go", note: "Backend services" },
  { name: "Python", note: "AI / data pipelines" },
  { name: "TypeScript", note: "Web & API" },
  { name: "Next.js", note: "Frontend framework" },
  { name: "PostgreSQL", note: "Primary database" },
  { name: "Kafka", note: "Event streaming" },
  { name: "Docker", note: "Containerization" },
  { name: "Kubernetes", note: "Orchestration" },
  { name: "ArgoCD", note: "GitOps deployment" },
  { name: "PyTorch", note: "ML framework" },
];

export default function TechStack() {
  return (
    <section className="border-y border-[var(--color-border)] section-y bg-[var(--color-card)]">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-sm text-[var(--color-accent)] mb-3">
              ③ Công nghệ chúng tôi dùng
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl text-balance">
              Stack chính, đã chứng minh trên production.
            </h2>
          </div>
          <p className="text-[var(--color-muted)] max-w-xs text-sm">
            Các công nghệ team dùng xuyên suốt từ backend, data, hạ tầng tới ML.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
          {stack.map((s) => (
            <div
              key={s.name}
              className="bg-[var(--color-bg)] p-4 md:p-6 flex flex-col gap-1 hover:bg-[var(--color-card)] transition-colors"
            >
              <div className="text-lg md:text-xl font-semibold tracking-tight">
                {s.name}
              </div>
              <div className="text-sm text-[var(--color-muted)]">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
