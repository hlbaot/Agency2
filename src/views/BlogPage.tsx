"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, ChevronRight, ChevronDown, Phone, Zap } from "lucide-react";

const categories = [
  { name: "Tất cả", count: 24 },
  { name: "Insight", count: 8 },
  { name: "Hướng dẫn", count: 6 },
  { name: "Chiến lược", count: 5 },
  { name: "Branding", count: 5 },
];

const gradients = [
  "from-pink-500 to-rose-600",
  "from-purple-500 to-indigo-600",
  "from-blue-500 to-cyan-500",
  "from-orange-400 to-pink-500",
  "from-teal-400 to-emerald-500",
  "from-amber-400 to-orange-500",
];

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  gradient: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 xu hướng TikTok 2024 mà doanh nghiệp không thể bỏ qua",
    description: "Khám phá những xu hướng nội dung đang viral trên TikTok và cách áp dụng cho thương hiệu của bạn để tăng tương tác.",
    category: "Insight",
    readTime: "5 phút",
    gradient: gradients[0],
    featured: true,
  },
  {
    id: 2,
    title: "Cách xây dựng chiến lược nội dung TikTok từ con số 0",
    description: "Hướng dẫn chi tiết từng bước để lên kế hoạch nội dung TikTok hiệu quả, từ nghiên cứu đối thủ đến lên lịch đăng bài.",
    category: "Chiến lược",
    readTime: "8 phút",
    gradient: gradients[1],
    featured: true,
  },
  {
    id: 3,
    title: "Hướng dẫn quay video TikTok chuyên nghiệp bằng điện thoại",
    description: "Tips và tricks để quay video TikTok chất lượng cao chỉ với smartphone, bao gồm ánh sáng, góc quay và chỉnh sửa.",
    category: "Hướng dẫn",
    readTime: "6 phút",
    gradient: gradients[2],
  },
  {
    id: 4,
    title: "Branding trên TikTok: Xây dựng nhận diện thương hiệu mạnh mẽ",
    description: "Làm sao để thương hiệu của bạn nổi bật trên TikTok? Bí quyết xây dựng brand identity nhất quán trên nền tảng video ngắn.",
    category: "Branding",
    readTime: "7 phút",
    gradient: gradients[3],
  },
  {
    id: 5,
    title: "Thuật toán TikTok 2024: Mọi thứ bạn cần biết",
    description: "Giải mã cách thuật toán TikTok hoạt động và làm sao để tối ưu nội dung của bạn xuất hiện trên For You Page.",
    category: "Insight",
    readTime: "10 phút",
    gradient: gradients[4],
  },
  {
    id: 6,
    title: "Cách viết hook hấp dẫn cho video TikTok trong 3 giây đầu",
    description: "3 giây đầu tiên quyết định tất cả! Học cách viết hook khiến người xem không thể lướt qua video của bạn.",
    category: "Hướng dẫn",
    readTime: "4 phút",
    gradient: gradients[5],
  },
  {
    id: 7,
    title: "ROI của TikTok Marketing: Cách đo lường hiệu quả thực sự",
    description: "Hướng dẫn sử dụng TikTok Analytics và các công cụ để đo lường ROI của chiến dịch TikTok marketing.",
    category: "Chiến lược",
    readTime: "6 phút",
    gradient: gradients[0],
  },
  {
    id: 8,
    title: "Case study: Từ 0 đến 1 triệu followers trong 6 tháng",
    description: "Phân tích chi tiết chiến lược đã giúp khách hàng của chúng tôi đạt 1 triệu followers TikTok chỉ trong nửa năm.",
    category: "Insight",
    readTime: "8 phút",
    gradient: gradients[1],
  },
  {
    id: 9,
    title: "Storytelling trên TikTok: Kể chuyện thương hiệu hiệu quả",
    description: "Nghệ thuật kể chuyện trên TikTok giúp tạo kết nối cảm xúc với khách hàng và tăng tỷ lệ chuyển đổi.",
    category: "Branding",
    readTime: "5 phút",
    gradient: gradients[2],
  },
  {
    id: 10,
    title: "TikTok Shop: Cơ hội vàng cho doanh nghiệp Việt",
    description: "Tìm hiểu cách tận dụng TikTok Shop để tăng doanh số bán hàng và tiếp cận khách hàng mới.",
    category: "Chiến lược",
    readTime: "7 phút",
    gradient: gradients[3],
  },
  {
    id: 11,
    title: "Hướng dẫn dựng video TikTok bằng CapCut chuyên nghiệp",
    description: "Tutorial chi tiết về cách sử dụng CapCut để edit video TikTok với hiệu ứng, transition và text overlay.",
    category: "Hướng dẫn",
    readTime: "9 phút",
    gradient: gradients[4],
  },
  {
    id: 12,
    title: "Personal branding cho CEO trên TikTok",
    description: "Tại sao CEO cần có mặt trên TikTok? Chiến lược xây dựng thương hiệu cá nhân cho lãnh đạo doanh nghiệp.",
    category: "Branding",
    readTime: "6 phút",
    gradient: gradients[5],
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const catMatch = selectedCategory === "Tất cả" || post.category === selectedCategory;
      const searchMatch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const visiblePosts = filtered.slice(0, visibleCount);

  return (
    <div className="light-page min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="page-hero-bg absolute inset-0" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-brand/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Blog <span className="gradient-text">TikTok Marketing</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Chia sẻ chiến lược, insight và kinh nghiệm giúp doanh nghiệp phát triển kênh TikTok hiệu quả
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="pb-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Tìm kiếm bài viết…"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(9); }}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-900 placeholder-gray-500 focus:outline-none focus:border-pink-brand/50 focus:ring-2 focus:ring-pink-brand/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => { setSelectedCategory(cat.name); setVisibleCount(9); }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? "gradient-bg text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "Tất cả" && searchQuery === "" && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">
              📌 Bài viết <span className="gradient-text">phổ biến</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-pink-brand/20 hover:border-pink-brand/40 transition-all duration-300 cursor-pointer"
                >
                  <div className={`h-48 bg-gradient-to-br ${post.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        ⭐ Nổi bật
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-pink-brand/10 text-pink-brand text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-pink-brand transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-pink-brand text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Đọc thêm <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === "Tất cả" ? "Tất cả bài viết" : selectedCategory}
          </h2>

          {visiblePosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Không tìm thấy bài viết nào</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePosts.map((post) => (
                  <article
                    key={post.id}
                    className="group rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-pink-brand/30 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-brand/5"
                  >
                    <div className={`h-44 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-pink-brand transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                        <span className="text-pink-brand text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Đọc thêm <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {visibleCount < filtered.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((v) => v + 9)}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                  >
                    Xem thêm bài viết
                    <ChevronDown size={20} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-24">
        <div className="cta-container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="cta-card relative overflow-hidden rounded-[40px] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="cta-background absolute inset-0 bg-[radial-gradient(circle_at_18%_68%,rgba(212,174,104,0.12),transparent_24%),radial-gradient(circle_at_84%_34%,rgba(212,174,104,0.14),transparent_24%)]" />
            <div className="cta-content relative z-10">
              <div className="cta-badge-wrap mb-7 flex justify-center">
                <span className="cta-badge inline-flex items-center gap-2 rounded-full border border-[#C9A163]/35 bg-[#C9A163]/10 px-7 py-3 text-lg font-semibold text-[#C9A163]">
                  <Zap className="cta-badge-icon h-4 w-4" />
                  <span className="cta-badge-text">Bắt đầu ngay</span>
                </span>
              </div>
              <h2 className="cta-title mx-auto mb-8 max-w-4xl text-4xl font-black leading-[1.08] text-[#08152f] sm:text-5xl lg:text-6xl">
                Bạn muốn xây kênh TikTok chuyên nghiệp?
              </h2>
              <p className="cta-description mx-auto mb-12 max-w-[980px] text-xl leading-relaxed text-[#6b7280] sm:text-[1.9rem] sm:leading-[1.45]">
                Chúng tôi giúp bạn từ chiến lược đến sản xuất nội dung.
              </p>
              <div className="cta-actions mb-14 flex flex-wrap justify-center gap-5">
                <Link
                  href="/contact"
                  className="cta-primary-button inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-[#d4ae68] px-10 py-5 text-xl font-bold text-[#08152f] shadow-[0_12px_28px_rgba(212,174,104,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#c79f53]"
                >
                  <span className="cta-primary-button-text">Nhận tư vấn miễn phí</span>
                  <ChevronRight className="cta-primary-button-icon h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="cta-secondary-button inline-flex min-w-[200px] items-center justify-center rounded-2xl border border-[#d7dce5] bg-white px-10 py-5 text-xl font-bold text-[#08152f] transition-all hover:bg-[#f7f9fc]"
                >
                  <span className="cta-secondary-button-text">Xem bảng giá</span>
                </Link>
              </div>
              <div className="cta-contacts flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-[#6b7280]">
                <div className="cta-contact-item inline-flex items-center gap-3 text-[1.1rem]">
                  <Phone className="cta-contact-icon h-6 w-6" />
                  <span className="cta-contact-text">0523 860 068</span>
                </div>
                <div className="cta-contact-item inline-flex items-center gap-3 text-[1.1rem]">
                  <Phone className="cta-contact-icon h-6 w-6" />
                  <span className="cta-contact-text">0888 430 620</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
