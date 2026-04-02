"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star, ChevronDown, Camera, Users, Sparkles, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Gói Chuyên Nghiệp",
    desc: "Phù hợp cho doanh nghiệp mới bắt đầu xây kênh TikTok",
    features: ["Quay bằng Sony A7 series", "Ekip 2 người", "Không bao gồm studio", "Dựng video cơ bản", "Tư vấn nội dung"],
    prices: [
      { qty: 10, price: "8tr", priceActor: "12tr" },
      { qty: 20, price: "15tr", priceActor: "22tr" },
      { qty: 40, price: "28tr", priceActor: "40tr" },
      { qty: 100, price: "60tr", priceActor: "85tr" },
    ],
    popular: false,
  },
  {
    name: "Gói Cao Cấp",
    desc: "Dành cho thương hiệu muốn nội dung chất lượng cao, ấn tượng",
    features: ["Quay bằng Sony FX3", "Ekip 3 người chuyên nghiệp", "Studio riêng", "Hậu kỳ nâng cao", "Chiến lược nội dung", "Diễn viên chuyên nghiệp"],
    prices: [
      { qty: 10, price: "15tr", priceActor: "20tr" },
      { qty: 20, price: "28tr", priceActor: "38tr" },
      { qty: 40, price: "50tr", priceActor: "68tr" },
      { qty: 100, price: "100tr", priceActor: "140tr" },
    ],
    popular: true,
  },
  {
    name: "Gói Toàn Diện",
    desc: "Giải pháp trọn gói từ chiến lược đến sản xuất & phân phối",
    features: ["Full thiết bị cao cấp", "Ekip 4+ người", "Studio premium", "Hậu kỳ cinematic", "Chiến lược & quản lý kênh", "Diễn viên + KOL", "Bảo hành chất lượng view"],
    prices: [
      { qty: 20, price: "45tr", priceActor: "58tr" },
      { qty: 40, price: "80tr", priceActor: "105tr" },
      { qty: 100, price: "180tr", priceActor: "230tr" },
      { qty: 200, price: "320tr", priceActor: "420tr" },
    ],
    popular: false,
  },
];

const bundles = [
  { name: "Toàn diện", price: "120tr", videos: 100, goal: "Brand awareness + Conversion", desc: "Xây dựng thương hiệu toàn diện trên TikTok", viewCommit: "10M+ views" },
  { name: "Tăng nhận diện", price: "55tr", videos: 40, goal: "Awareness", desc: "Tập trung tăng nhận diện thương hiệu", viewCommit: "5M+ views" },
  { name: "Giới thiệu sản phẩm", price: "35tr", videos: 20, goal: "Product showcase", desc: "Video giới thiệu sản phẩm chuyên nghiệp", viewCommit: "2M+ views" },
  { name: "Kích thích mua hàng", price: "80tr", videos: 60, goal: "Conversion", desc: "Nội dung tối ưu chuyển đổi bán hàng", viewCommit: "8M+ views" },
  { name: "Định vị thương hiệu", price: "25tr", videos: 15, goal: "Branding", desc: "Video storytelling định vị thương hiệu", viewCommit: "3M+ views" },
];

const workflow = [
  { step: 1, title: "Onboarding", desc: "Tìm hiểu thương hiệu, mục tiêu và đối tượng khách hàng", icon: "🎯" },
  { step: 2, title: "Kịch bản", desc: "Xây dựng content strategy và viết kịch bản cho từng video", icon: "📝" },
  { step: 3, title: "Quay dựng", desc: "Sản xuất video với ekip và thiết bị chuyên nghiệp", icon: "🎬" },
  { step: 4, title: "Bàn giao", desc: "Review, chỉnh sửa và bàn giao sản phẩm cuối cùng", icon: "✅" },
];

const faqs = [
  { q: "Thời gian hoàn thành bao lâu?", a: "Tùy theo số lượng video, thông thường 10-20 video sẽ hoàn thành trong 7-14 ngày làm việc. Gói lớn hơn sẽ được sản xuất theo lộ trình hàng tháng." },
  { q: "Có được duyệt nội dung trước khi quay không?", a: "Có! Chúng tôi luôn gửi kịch bản chi tiết để bạn duyệt trước khi bắt đầu sản xuất. Bạn có thể yêu cầu chỉnh sửa không giới hạn ở bước kịch bản." },
  { q: "Có cung cấp diễn viên không?", a: "Có! Chúng tôi có đội ngũ diễn viên chuyên nghiệp. Bạn có thể chọn gói có diễn viên hoặc tự cung cấp người đại diện thương hiệu." },
  { q: "Thanh toán như thế nào?", a: "Thanh toán 50% khi ký hợp đồng và 50% khi bàn giao sản phẩm. Chúng tôi hỗ trợ chuyển khoản ngân hàng." },
  { q: "Có bảo hành chất lượng không?", a: "Có! Với gói Toàn Diện, chúng tôi cam kết số lượng view tối thiểu. Nếu không đạt, chúng tôi sẽ sản xuất thêm video miễn phí." },
];

export default function PricingPage() {
  const [hasActor, setHasActor] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-purple-deeper text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple-deeper to-purple-dark" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink-brand/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Báo giá dịch vụ <span className="gradient-text">xây kênh TikTok</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Chất lượng production chuyên nghiệp – Giá trị thương hiệu bền vững
          </p>
        </div>
      </section>

      {/* Actor Toggle */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setHasActor(false)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                !hasActor ? "gradient-bg text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              Không diễn viên
            </button>
            <button
              onClick={() => setHasActor(true)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                hasActor ? "gradient-bg text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              Có diễn viên
            </button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-b from-pink-brand/10 to-purple-brand/10 border-pink-brand/30 scale-[1.02] shadow-2xl shadow-pink-brand/10"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full gradient-bg text-white text-sm font-bold shadow-lg">
                      <Star size={14} fill="white" /> Best Seller
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{pkg.desc}</p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Check size={16} className="text-pink-brand flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Bảng giá theo số lượng</p>
                  {pkg.prices.map((p, j) => (
                    <div key={j} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-gray-400 text-sm">{p.qty} video</span>
                      <span className="text-white font-bold">{hasActor ? p.priceActor : p.price}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-full font-semibold text-center block transition-all ${
                    pkg.popular
                      ? "gradient-bg text-white hover:opacity-90 shadow-lg shadow-pink-brand/25"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  Tư vấn ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Best Seller */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-10 sm:p-14 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-90" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                  🔥 Gói bán chạy nhất
                </span>
                <h3 className="text-3xl font-black text-white mb-2">100 Video / 50 Triệu</h3>
                <p className="text-white/80 mb-6">Gói Chuyên Nghiệp – Giải pháp tối ưu chi phí cho doanh nghiệp SME</p>
              </div>
              <div className="space-y-3">
                {["Chiến lược nội dung bài bản", "Full production chuyên nghiệp", "Bảo hành chất lượng video", "Hỗ trợ quản lý kênh"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-4 bg-white text-pink-brand px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
                >
                  Liên hệ ngay <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Table */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all mb-4"
          >
            <span className="text-xl font-bold">📊 Bảng giá chi tiết</span>
            <ChevronDown size={24} className={`text-gray-400 transition-transform ${showDetails ? "rotate-180" : ""}`} />
          </button>

          {showDetails && (
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 text-left text-sm font-medium text-gray-400">Gói</th>
                    <th className="p-4 text-center text-sm font-medium text-gray-400">Số video</th>
                    <th className="p-4 text-center text-sm font-medium text-gray-400">Không DV</th>
                    <th className="p-4 text-center text-sm font-medium text-gray-400">Có DV</th>
                    <th className="p-4 text-center text-sm font-medium text-gray-400">Thời gian</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg) =>
                    pkg.prices.map((p, j) => (
                      <tr key={`${pkg.name}-${j}`} className="border-t border-white/5 hover:bg-white/[0.02]">
                        {j === 0 && (
                          <td className="p-4 font-semibold text-white" rowSpan={pkg.prices.length}>
                            {pkg.name}
                          </td>
                        )}
                        <td className="p-4 text-center text-gray-300">{p.qty}</td>
                        <td className="p-4 text-center text-white font-medium">{p.price}</td>
                        <td className="p-4 text-center text-pink-brand font-medium">{p.priceActor}</td>
                        <td className="p-4 text-center text-gray-400">{Math.ceil(p.qty / 10) * 3} ngày</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Gói combo <span className="gradient-text">theo mục tiêu</span>
            </h2>
            <p className="text-gray-400 text-lg">Chọn gói phù hợp với mục tiêu kinh doanh của bạn</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((b, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-pink-brand/30 transition-all duration-300 group">
                <div className="text-3xl font-black gradient-text mb-1">{b.price}</div>
                <h3 className="text-xl font-bold text-white mb-2">{b.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{b.desc}</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Số video</span>
                    <span className="text-white font-medium">{b.videos}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Mục tiêu</span>
                    <span className="text-white font-medium">{b.goal}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Cam kết view</span>
                    <span className="text-pink-brand font-medium">{b.viewCommit}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-center block hover:bg-pink-brand/10 hover:border-pink-brand/30 transition-all text-sm"
                >
                  Nhận tư vấn
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capability */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-brand/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Năng lực <span className="gradient-text">sản xuất</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Camera size={32} />, title: "Thiết bị", items: ["Sony A7 IV", "Sony FX3", "DJI RS3 Pro", "Hệ thống đèn Aputure"] },
              { icon: <Sparkles size={32} />, title: "Studio", items: ["Studio 50m² chuyên nghiệp", "Green screen", "Nhiều bối cảnh", "Âm thanh cách âm"] },
              { icon: <Users size={32} />, title: "Nhân sự", items: ["Đạo diễn nội dung", "Quay phim chuyên nghiệp", "Editor hậu kỳ", "Diễn viên đa dạng"] },
            ].map((cap, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 text-center">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-white mx-auto mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                <ul className="space-y-2">
                  {cap.items.map((item, j) => (
                    <li key={j} className="text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Quy trình <span className="gradient-text">làm việc</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflow.map((w, i) => (
              <div key={i} className="relative text-center group">
                <div className="text-4xl mb-4">{w.icon}</div>
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {w.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{w.title}</h3>
                <p className="text-gray-400 text-sm">{w.desc}</p>
                {i < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-14 left-[60%] w-[80%]">
                    <div className="border-t border-dashed border-white/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Câu hỏi <span className="gradient-text">thường gặp</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 sm:p-16 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 gradient-bg opacity-90" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Sẵn sàng bắt đầu?</h2>
              <p className="text-white/80 text-lg mb-8">Liên hệ ngay để được tư vấn gói dịch vụ phù hợp nhất</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-pink-brand px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105">
                  Nhận tư vấn
                </Link>
                <a href="tel:0523860068" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-2">
                  📞 Gọi ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
