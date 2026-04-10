import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import BrandLogo from "./BrandLogo";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587158335103",
  },
];

export default function Footer() {
  return (
    <footer className="bg-purple-deeper border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <BrandLogo className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Studio TikTok hàng đầu cho thương hiệu Việt. Chúng tôi giúp doanh
              nghiệp xây dựng hệ thống content chuyên nghiệp, chuyển đổi người
              xem thành khách hàng.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-[#C9A163]/35 bg-[#C9A163]/10 px-4 text-[#C9A163] transition-all hover:scale-105 hover:border-[#C9A163]/60 hover:bg-[#C9A163]/16"
                  title={s.label}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.3 1.4-1.3H16V5.9c-.5-.1-1.3-.2-2.4-.2-2.4 0-4 1.5-4 4.2v1.4H7V14h2.2v7h4.3Z" />
                  </svg>
                  <span className="text-sm font-medium">Facebook</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-3">
              {["Xây kênh TikTok", "Sản xuất video", "Chiến lược nội dung", "Quản lý kênh"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-pink-brand transition text-sm">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Khám phá</h4>
            <ul className="space-y-3">
              {[
                { label: "Báo giá", to: "/pricing" },
                { label: "Dự án", to: "/portfolio" },
                { label: "Blog", to: "/blog" },
                { label: "Livestream", to: "/livestream" },
                { label: "Liên hệ", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="text-gray-400 hover:text-pink-brand transition text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone size={18} strokeWidth={2.2} className="text-pink-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p>0906 914 696</p>
                  <p>0935 357 656</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} strokeWidth={2.2} className="text-pink-brand mt-0.5 flex-shrink-0" />
                <p>458/64 D. 3 Tháng 2, Quận 10, TP.HCM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 SHORT PRO. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
