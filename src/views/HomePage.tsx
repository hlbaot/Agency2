import Link from "next/link";
import { Play, TrendingUp, Eye, Film, Users, Camera, Monitor, ChevronRight, Star, X as XIcon, Quote } from "lucide-react";

const stats = [
  { icon: <Film size={28} />, value: "500+", label: "Video đã sản xuất" },
  { icon: <Eye size={28} />, value: "120M+", label: "Lượt xem tổng" },
  { icon: <TrendingUp size={28} />, value: "85%", label: "Tỷ lệ viral" },
];

const painPoints = [
  "Video không kể được câu chuyện",
  "Nội dung không đủ hấp dẫn",
  "Không có gương mặt đại diện",
  "Không đo lường hiệu quả",
  "Không cân bằng giữa nhanh và chất lượng",
];

const solutions = [
  { icon: <Film size={24} />, title: "Production như làm phim", desc: "Quy trình sản xuất chuyên nghiệp với kịch bản, storyboard và hậu kỳ hoàn chỉnh" },
  { icon: <Users size={24} />, title: "Ekip 3 người chuyên nghiệp", desc: "Đạo diễn, quay phim và dựng phim – mỗi người một chuyên môn riêng" },
  { icon: <Camera size={24} />, title: "Thiết bị cao cấp", desc: "Sony A7 series, FX3 cùng hệ thống ánh sáng và âm thanh studio" },
  { icon: <Monitor size={24} />, title: "Chất lượng đỉnh cao", desc: "Hình ảnh sắc nét, âm thanh chuyên nghiệp, hiệu ứng ấn tượng" },
];

const comparison = [
  { feature: "Giá", freelancer: "Rẻ", agency: "Đắt", us: "Hợp lý" },
  { feature: "Thiết bị", freelancer: "Cơ bản", agency: "Chuyên nghiệp", us: "Chuyên nghiệp" },
  { feature: "Nhân sự", freelancer: "1 người", agency: "5+ người", us: "3 người" },
  { feature: "Studio", freelancer: "Không", agency: "Có", us: "Có" },
  { feature: "Diễn viên", freelancer: "Không", agency: "Có (phụ phí)", us: "Có" },
  { feature: "Chiến lược", freelancer: "Không", agency: "Có", us: "Có" },
];

const caseStudies = [
  { name: "Nhà hàng Hải Sản Đại Dương", handle: "@haisandaiduong", category: "F&B", views: "2.5M" },
  { name: "Spa Bella Beauty", handle: "@bellaspa.vn", category: "Spa", views: "1.8M" },
  { name: "Nha Khoa Smile", handle: "@nhakhoasmile", category: "Nha khoa", views: "3.2M" },
  { name: "Thời trang Moly", handle: "@moly.fashion", category: "Thời trang", views: "4.1M" },
  { name: "BĐS Golden Land", handle: "@goldenland.vn", category: "BĐS", views: "1.5M" },
  { name: "Beauty Box Store", handle: "@beautybox.vn", category: "Beauty", views: "5.7M" },
];

const brands = [
  "VINAMILK", "HIGHLANDS", "THE COFFEE HOUSE", "GRAB", "SHOPEE", "LAZADA", "TIKI", "SENDO"
];

function TikTokCard({ index }: { index: number }) {
  const colors = ["from-pink-500 to-purple-600", "from-blue-500 to-cyan-400", "from-orange-400 to-pink-500", "from-purple-500 to-indigo-600"];
  return (
    <div
      className={`w-36 sm:w-44 h-56 sm:h-72 rounded-2xl bg-gradient-to-br ${colors[index % 4]} flex flex-col items-center justify-center relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
          <Play className="text-white ml-1" size={24} fill="white" />
        </div>
        <div className="text-white/80 text-xs font-medium">Video #{index + 1}</div>
        <div className="flex items-center gap-1 mt-2">
          <Eye size={12} className="text-white/60" />
          <span className="text-white/60 text-xs">{(Math.random() * 5 + 1).toFixed(1)}M</span>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white/60 rounded-full" style={{ width: `${60 + index * 10}%` }} />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-purple-deeper text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple-deeper to-purple-dark" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-brand/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-brand/10 border border-pink-brand/20 text-pink-brand text-sm font-medium mb-6">
              <Star size={14} fill="currentColor" />
              Studio TikTok #1 cho thương hiệu Việt
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Thương hiệu không thắng nhờ{" "}
              <span className="gradient-text">1 cú viral</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300">
                – Đó là kết quả của chiến lược
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
              Xây dựng hệ thống content TikTok bài bản, chuyển đổi người xem
              thành khách hàng thực sự cho thương hiệu của bạn.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-pink-brand/25 inline-flex items-center gap-2"
              >
                Nhận tư vấn miễn phí
                <ChevronRight size={20} />
              </Link>
              <Link
                href="/pricing"
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all inline-flex items-center gap-2"
              >
                Xem các gói
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-4 perspective-1000">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="animate-float"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <TikTokCard index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-pink-brand/30 hover:bg-pink-brand/5 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg/20 bg-pink-brand/10 text-pink-brand mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Bạn có đang <span className="gradient-text">gặp điều này?</span>
            </h2>
            <p className="text-gray-400 text-lg">Làm TikTok mãi không phát triển?</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="px-6 py-4 rounded-2xl bg-red-500/5 border border-red-500/20 text-red-300 font-medium hover:bg-red-500/10 hover:border-red-500/30 transition-all cursor-default flex items-center gap-3"
              >
                <XIcon size={18} className="text-red-400 flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-brand/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              <span className="gradient-text">Giải pháp</span> từ chúng tôi
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Áp dụng quy trình production chuyên nghiệp như làm phim cho mỗi video TikTok
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-pink-brand/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{sol.title}</h3>
                <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Quote */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-pink-brand/10 via-purple-brand/10 to-pink-brand/5 border border-pink-brand/20">
            <Quote size={48} className="text-pink-brand/30 absolute top-6 left-6" />
            <blockquote className="relative z-10 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed mb-6">
                "TikTok không ưu tiên sự hoàn hảo, mà ưu tiên{" "}
                <span className="gradient-text">sự đúng hướng</span> và{" "}
                <span className="gradient-text">đều đặn</span>"
              </p>
              <div className="text-gray-400 font-medium">— CNA Entertainment Team</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Tại sao chọn <span className="gradient-text">chúng tôi?</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-400 font-medium">Tiêu chí</th>
                  <th className="p-4 text-gray-400 font-medium">Freelancer</th>
                  <th className="p-4 text-gray-400 font-medium">Agency lớn</th>
                  <th className="p-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg text-white font-bold text-sm">
                      ⭐ CNA
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition">
                    <td className="p-4 font-medium text-white">{row.feature}</td>
                    <td className="p-4 text-center text-gray-400">{row.freelancer}</td>
                    <td className="p-4 text-center text-gray-400">{row.agency}</td>
                    <td className="p-4 text-center text-pink-brand font-semibold">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-brand/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Dự án <span className="gradient-text">tiêu biểu</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/[0.03] border border-white/5 hover:border-pink-brand/30 overflow-hidden transition-all duration-300"
              >
                <div className="aspect-[9/12] bg-gradient-to-br from-pink-brand/20 to-purple-brand/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                      {cs.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-white">
                        {cs.name[0]}
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold truncate">{cs.name}</p>
                        <p className="text-white/60 text-xs">{cs.handle}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{cs.views} views</span>
                  <Eye size={16} className="text-gray-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
            >
              Xem tất cả dự án
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 sm:p-16 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 gradient-bg opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] " />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                Sẵn sàng bùng nổ trên TikTok?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Hãy để chúng tôi giúp bạn xây dựng chiến lược nội dung chuyên nghiệp
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-pink-brand px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
                >
                  Đặt lịch tư vấn
                </Link>
                <Link
                  href="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Xem bảng giá
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-10">
            Được tin tưởng bởi
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={i}
                  className="mx-8 flex-shrink-0 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-500 font-bold text-lg tracking-wider hover:text-pink-brand hover:border-pink-brand/30 transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
