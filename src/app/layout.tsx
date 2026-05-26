import type { Metadata } from "next";
import { Poppins, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koncept — A small team building software that ships",
  description:
    "Koncept là team kỹ sư phần mềm nhỏ tại Hà Nội, làm web platform, mobile, multimedia và AI/ML cho khách hàng trong và ngoài nước.",
  openGraph: {
    title: "Koncept",
    description:
      "Team kỹ sư phần mềm — web, mobile, multimedia & AI/ML.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${poppins.variable} ${jetbrainsMono.variable} ${serif.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
