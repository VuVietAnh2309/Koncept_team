export type Project = {
  id: string;
  title: string;
  client: string;
  category: "Web & Backend" | "Mobile & Multimedia" | "Fullstack" | "AI / ML";
  summary: string;
  highlights: string[];
  stack: string[];
  member: string;
  metric?: string;
  image?: string;
};

// Flagship team project first, then per-member order: Trung Hieu → Dam Viet Anh → Quang Quan → Vu Viet Anh
export const projects: Project[] = [
  {
    id: "banking-digital-transformation-2026",
    title: "Banking Digital Transformation 2026 — Real-time Quiz & Puzzle Platform",
    client: "Ngân hàng Nhà nước Việt Nam · Vietcombank tổ chức",
    category: "Fullstack",
    summary:
      "Nền tảng thi đấu kiến thức thời gian thực cho sự kiện cấp ngành Banking Digital Transformation 2026 do Ngân hàng Nhà nước Việt Nam tài trợ, Vietcombank đại diện tổ chức — quy tụ các đội đến từ toàn bộ hệ thống ngân hàng trong cả nước.",
    highlights: [
      "Realtime đa người chơi qua Socket.io với NTP-style time sync (độ chính xác ms)",
      "Admin / Setup / Player / Ranking — 4 màn hình tách biệt, có ephemeral test rooms",
      "Sliding puzzle round + Quiz round độc lập, export kết quả Excel",
      "Triển khai Docker Distroless đa tầng, có load test & test suite Jest",
    ],
    stack: ["Node.js", "Express 5", "Socket.io 4", "Nunjucks", "Docker", "Jest"],
    member: "team",
    metric: "Sự kiện cấp ngành ngân hàng · realtime · production",
    image: "/banner-khodoc.png",
  },
  {
    id: "cybersecurity-microservices",
    title: "Cybersecurity Microservices Platform",
    client: "Viettel Cyber Security",
    category: "Web & Backend",
    summary:
      "Hệ microservices hiệu năng cao xử lý dữ liệu an ninh mạng cho nhiều dòng sản phẩm cybersecurity.",
    highlights: [
      "Module Packet Analysis tại Layer 3 — tối ưu độ trễ inspection",
      "CI/CD pipeline thống nhất cho nhiều team phân tán",
      "Throughput cao, scale theo product line",
    ],
    stack: ["Go", "Python", "gRPC", "Kafka", "Docker", "Kubernetes"],
    member: "trunghieu",
    metric: "L3 packet inspection · multi-product",
    image: "/tech-bg.jpg",
  },
  {
    id: "samsung-motion-photo",
    title: "Motion Photo & SUM Framework",
    client: "Samsung R&D Vietnam",
    category: "Mobile & Multimedia",
    summary:
      "Tính năng chụp ảnh động Motion Photo trên toàn bộ hệ sinh thái Galaxy, cùng framework đa phương tiện thống nhất.",
    highlights: [
      "Thiết kế & tối ưu hiệu năng Motion Photo trên các dòng Galaxy",
      "Kiến trúc Samsung Universal Multimedia (SUM) Framework",
      "Áp dụng Clean Architecture + MVVM cho khả năng mở rộng",
    ],
    stack: ["Kotlin", "Java", "C++/NDK", "Android Native", "Jetpack Compose"],
    member: "damvietanh",
    metric: "Galaxy ecosystem · production",
    image: "/motionPhoto.png",
  },
  {
    id: "vbee-data-platform",
    title: "VBEE Data Platform",
    client: "Cổ phần VBEE",
    category: "Fullstack",
    summary:
      "Dịch vụ và giải pháp xử lý dữ liệu cho doanh nghiệp với vai trò fullstack web developer.",
    highlights: [
      "Phát triển fullstack từ UI tới database",
      "Tham gia các dự án nội bộ với quy trình của công ty",
      "UI dựng trên Material UI + Tailwind",
    ],
    stack: ["React", "Node.js", "MongoDB", "Material UI", "Tailwind", "SQL Server"],
    member: "quangquan",
    image: "/Vbee.png",
  },
  {
    id: "construction-platform",
    title: "Enterprise Construction Management Platform",
    client: "Tokyo Tech Lab",
    category: "Web & Backend",
    summary:
      "Nền tảng quản lý xây dựng cấp doanh nghiệp với module tích hợp dữ liệu 3D mô phỏng kiến trúc.",
    highlights: [
      "RESTful APIs cho luồng quản lý nguồn lực, tiến độ và chi phí",
      "Module đồng bộ mô phỏng kiến trúc 3D với dashboard quản lý",
      "Định nghĩa kiến trúc hệ thống đảm bảo high availability",
    ],
    stack: ["Node.js", "REST API", "3D Data Pipeline", "PostgreSQL"],
    member: "trunghieu",
    image: "/about-coding.jpg",
  },
  {
    id: "aes-ielts",
    title: "AES — Hệ thống chấm điểm IELTS Writing & Speaking",
    client: "Prep Education",
    category: "AI / ML",
    summary:
      "Pipeline AI chấm điểm tự động bài thi IELTS Writing Task 1/2 và Speaking, phục vụ hàng nghìn học viên đồng thời.",
    highlights: [
      "Speaking: APA + GEC + phân tích từ vựng — Accuracy ±0.5 ~82%",
      "Writing: PANN (Deberta-V3, 189M) & T5 quantized (120M) — Accuracy ±0.5 ~85–87%",
      "MLOps end-to-end: Docker → GitLab CI/CD → ArgoCD → Kubernetes",
      "Dynamic batching và request queue cho high-throughput inference",
    ],
    stack: ["PyTorch", "Deberta-V3", "T5", "Docker", "Kubernetes", "ArgoCD"],
    member: "vuvietanh",
    metric: "QWK & PCC ~90% · production",
    image: "/prep_aes.png",
  },
  {
    id: "suckhoe-viet-ai",
    title: "Sức Khỏe Việt AI — Trợ lý Y tế AI cho người Việt",
    client: "Dự án cá nhân · Open-source",
    category: "Mobile & Multimedia",
    summary:
      "Ứng dụng Android tư vấn sức khoẻ: đánh giá triệu chứng, phân loại độ khẩn cấp, tóm tắt bệnh án và lưu lộ trình sức khoẻ cá nhân.",
    highlights: [
      "Triage 3 mức (Xanh / Vàng / Đỏ) tự động phân loại độ khẩn cấp",
      "Tự động tóm tắt bệnh án từ hội thoại với LLM qua custom ChatResponseParser",
      "Bản đồ tìm cơ sở y tế & nhà thuốc gần nhất; lưu lịch sử sức khoẻ với Paging 3",
      "Clean Architecture + MVVM, Material 3 adaptive UI cho mọi kích thước màn hình",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "Room", "Firebase AI (Gemini)", "Coroutines"],
    member: "damvietanh",
    metric: "Triage tự động · LLM-powered · Material 3 adaptive",
    image: "/anh_y_te.png",
  },
  {
    id: "financial-ocr",
    title: "OCR cho nhận dạng Báo cáo Tài chính",
    client: "FPT Information System",
    category: "AI / ML",
    summary:
      "Hệ OCR trích xuất thông tin từ báo cáo tài chính ngân hàng, kết hợp hiểu bố cục tài liệu và NER hậu xử lý.",
    highlights: [
      "PaddleOCR, Tesseract, TrOCR cho nhận dạng văn bản",
      "LayoutLMv3 cho hiểu bố cục bảng / cặp khoá–giá trị",
      "Pipeline Regex + NER chuẩn hoá đầu ra",
    ],
    stack: ["PaddleOCR", "TrOCR", "LayoutLMv3", "NER", "Python"],
    member: "vuvietanh",
    image: "/ocr_fpt.png",
  },
];
