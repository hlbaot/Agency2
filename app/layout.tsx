import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../src/index.css";

export const metadata: Metadata = {
  title: {
    default: "CNA Entertainment",
    template: "%s | CNA Entertainment",
  },
  description:
    "Studio TikTok cho thương hiệu Viet voi cac goi san xuat, portfolio, blog va thong tin lien he.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <div className="min-h-screen bg-purple-deeper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
