export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] sticky bottom-0 z-0">
      {/* Footer columns */}
      <div className="bg-[var(--color-card)] border-t border-[var(--color-border)]">
        <div className="container-wide py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">

            {/* Col 1: About */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Koncept" className="h-8 w-auto" style={{ filter: "brightness(0)" }} />
              </div>
              <p className="text-[var(--color-muted)] leading-relaxed max-w-xs">
                Một team kỹ sư tại Hà Nội — xây phần mềm thật cho khách hàng thật.
              </p>
            </div>

            {/* Col 2: Dịch vụ */}
            <div>
              <div className="font-semibold text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
                Dịch vụ
              </div>
              <ul className="space-y-2.5 text-[var(--color-muted)]">
                <li>Web platform & Backend</li>
                <li>Mobile & Multimedia</li>
                <li>AI / ML & NLP</li>
                <li>MLOps & DevOps</li>
              </ul>
            </div>

            {/* Col 3: Khám phá */}
            <div>
              <div className="font-semibold text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
                Khám phá
              </div>
              <ul className="space-y-2.5">
                <li><a href="#about" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">① Về chúng tôi</a></li>
                <li><a href="#work" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">② Dự án</a></li>
                <li><a href="#services" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">③ Dịch vụ</a></li>
                <li><a href="#team" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">④ Thành viên</a></li>
                <li><a href="#process" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">⑤ Quy trình</a></li>
                <li><a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">⑥ Liên hệ</a></li>
              </ul>
            </div>

            {/* Col 4: Liên hệ */}
            <div>
              <div className="font-semibold text-xs tracking-widest uppercase text-[var(--color-accent)] mb-4">
                Liên hệ
              </div>
              <ul className="space-y-2.5 text-[var(--color-muted)]">
                <li>
                  <a href="mailto:vietanhresearcher@gmail.com" className="hover:text-[var(--color-accent)] transition-colors break-all">
                    vietanhresearcher@gmail.com
                  </a>
                </li>
                <li>Hà Nội, Việt Nam</li>
              </ul>

              <div className="mt-6">
                <div className="font-semibold text-xs tracking-widest uppercase text-[var(--color-accent)] mb-3">
                  Mạng xã hội
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/VuVietAnh2309"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="size-8 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-[var(--color-muted)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/viet-anh-vu-30a268336/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="size-8 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-[var(--color-muted)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://web.facebook.com/Vanhbeti2309/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="size-8 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors text-[var(--color-muted)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-[var(--color-muted)]">
            <div>© {year} Koncept Production Team. All rights reserved.</div>
            <div>Hà Nội, Việt Nam</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
