export type Member = {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  avatar: string;
  cv: string;
  skills: string[];
  isLeader?: boolean;
};

export const team: Member[] = [
  {
    id: "vuvietanh",
    name: "Vũ Việt Anh",
    role: "AI/ML Engineer · Team Leader",
    shortBio:
      "Xây dựng các hệ thống AI/ML chạy production trong giáo dục và y tế, từ huấn luyện mô hình đến triển khai MLOps trên Kubernetes.",
    avatar: "/avatar/VuVietAnh.jpg",
    cv: "/cv/VuVietAnh.pdf",
    skills: [
      "PyTorch",
      "LLMs",
      "Computer Vision",
      "MLOps",
      "Docker",
      "Kubernetes",
      "ArgoCD",
    ],
    isLeader: true,
  },
  {
    id: "trunghieu",
    name: "Nguyễn Trung Hiếu",
    role: "Backend & Systems Engineer",
    shortBio:
      "Thiết kế microservices high-throughput, packet analysis cấp hệ thống và CI/CD pipeline cho team phân tán.",
    avatar: "/avatar/TrungHieu.jpg",
    cv: "/cv/NguyenTrungHieu.pdf",
    skills: [
      "Go",
      "Python",
      "Microservices",
      "gRPC",
      "Kafka",
      "PostgreSQL",
      "Docker / K8s",
    ],
  },
  {
    id: "damvietanh",
    name: "Đàm Việt Anh",
    role: "Mobile & Multimedia Engineer",
    shortBio:
      "Phát triển multimedia trên Android từ tầng app xuống native, có kinh nghiệm tích hợp AI trên thiết bị và Clean Architecture.",
    avatar: "/avatar/DamVietAnh.jpg",
    cv: "/cv/DamVietAnh.pdf",
    skills: [
      "Kotlin",
      "Java",
      "C++/NDK",
      "Jetpack Compose",
      "Android Multimedia",
      "On-device AI",
    ],
  },
  {
    id: "quangquan",
    name: "Trịnh Quang Quân",
    role: "Fullstack Web Developer",
    shortBio:
      "Fullstack web developer, làm việc xuyên suốt frontend React và backend Node.js, có kinh nghiệm dự án doanh nghiệp.",
    avatar: "/avatar/TrinhQuangQuan.jpg",
    cv: "/cv/TrinhQuangQuan.pdf",
    skills: [
      "React",
      "Node.js",
      "Material UI",
      "Tailwind",
      "MongoDB",
      "SQL Server",
    ],
  },
];
