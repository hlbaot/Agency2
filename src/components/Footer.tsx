import Link from "next/link";

const socialLinks = [
  { label: "TikTok", icon: "♪", href: "#" },
  { label: "Facebook", icon: "f", href: "#" },
  { label: "YouTube", icon: "▶", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-purple-deeper border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-bold text-white text-lg">
                C
              </div>
              <span className="text-white font-bold text-lg">
                CNA <span className="text-pink-brand">Entertainment</span>
              </span>
            </Link>
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
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-brand hover:border-pink-brand/50 hover:bg-pink-brand/10 transition-all"
                  title={s.label}
                >
                  {s.icon}
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
                <span className="text-pink-brand mt-0.5">📞</span>
                <div>
                  <p>0523 860 068</p>
                  <p>0888 430 620</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-brand mt-0.5">📍</span>
                <p>458/64 D. 3 Tháng 2, Quận 10, TP.HCM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 CNA Entertainment. All rights reserved.
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
