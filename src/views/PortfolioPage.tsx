"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Play, ChevronDown, Eye } from "lucide-react";

const packageFilters = ["Tất cả", "Gói Chuyên Nghiệp", "Gói Cao Cấp"];
const categoryFilters = [
  "Tất cả", "F&B", "Spa - Thẩm Mỹ", "Bất động sản", "Thời trang",
  "Thiết bị", "Nha khoa", "Beauty", "Vlog - Review", "Hướng dẫn", "Bán hàng", "Chuyên gia",
];

const colors = [
  "from-pink-500 to-rose-600",
  "from-purple-500 to-indigo-600",
  "from-blue-500 to-cyan-500",
  "from-orange-400 to-pink-500",
  "from-teal-400 to-emerald-500",
  "from-amber-400 to-orange-500",
  "from-violet-500 to-purple-600",
  "from-red-400 to-pink-600",
];

interface Project {
  id: number;
  title: string;
  category: string;
  packageType: string;
  views: string;
  handle: string;
  colorIdx: number;
}

const allProjects: Project[] = [
  { id: 1, title: "Review nhà hàng Hải Sản", category: "F&B", packageType: "Gói Cao Cấp", views: "2.5M", handle: "@haisandaiduong", colorIdx: 0 },
  { id: 2, title: "Spa trải nghiệm chăm sóc da", category: "Spa - Thẩm Mỹ", packageType: "Gói Cao Cấp", views: "1.8M", handle: "@bellaspa.vn", colorIdx: 1 },
  { id: 3, title: "Tour thực tế căn hộ", category: "Bất động sản", packageType: "Gói Chuyên Nghiệp", views: "3.2M", handle: "@goldenland", colorIdx: 2 },
  { id: 4, title: "Lookbook thời trang hè", category: "Thời trang", packageType: "Gói Cao Cấp", views: "4.1M", handle: "@moly.fashion", colorIdx: 3 },
  { id: 5, title: "Unbox máy ảnh Sony A7", category: "Thiết bị", packageType: "Gói Chuyên Nghiệp", views: "1.5M", handle: "@techzone.vn", colorIdx: 4 },
  { id: 6, title: "Tẩy trắng răng tại nha khoa", category: "Nha khoa", packageType: "Gói Chuyên Nghiệp", views: "2.1M", handle: "@nhakhoasmile", colorIdx: 5 },
  { id: 7, title: "Routine skincare buổi sáng", category: "Beauty", packageType: "Gói Cao Cấp", views: "5.7M", handle: "@beautybox.vn", colorIdx: 6 },
  { id: 8, title: "Review quán cafe mới mở", category: "Vlog - Review", packageType: "Gói Chuyên Nghiệp", views: "3.4M", handle: "@foodhunter", colorIdx: 7 },
  { id: 9, title: "Hướng dẫn chụp ảnh đẹp", category: "Hướng dẫn", packageType: "Gói Chuyên Nghiệp", views: "1.9M", handle: "@phototips", colorIdx: 0 },
  { id: 10, title: "Livestream bán hàng mỹ phẩm", category: "Bán hàng", packageType: "Gói Cao Cấp", views: "6.2M", handle: "@shopbeauty", colorIdx: 1 },
  { id: 11, title: "Bác sĩ tư vấn sức khỏe", category: "Chuyên gia", packageType: "Gói Cao Cấp", views: "4.8M", handle: "@drnguyen", colorIdx: 2 },
  { id: 12, title: "Trà sữa viral trend", category: "F&B", packageType: "Gói Chuyên Nghiệp", views: "7.1M", handle: "@bobatime", colorIdx: 3 },
  { id: 13, title: "Massage body thư giãn", category: "Spa - Thẩm Mỹ", packageType: "Gói Chuyên Nghiệp", views: "2.3M", handle: "@spavip", colorIdx: 4 },
  { id: 14, title: "Penthouse view triệu đô", category: "Bất động sản", packageType: "Gói Cao Cấp", views: "5.5M", handle: "@luxuryhome", colorIdx: 5 },
  { id: 15, title: "OOTD công sở", category: "Thời trang", packageType: "Gói Chuyên Nghiệp", views: "2.8M", handle: "@officestyle", colorIdx: 6 },
  { id: 16, title: "Review son môi top seller", category: "Beauty", packageType: "Gói Chuyên Nghiệp", views: "4.3M", handle: "@lipqueen", colorIdx: 7 },
  { id: 17, title: "Đồ ăn đường phố Sài Gòn", category: "Vlog - Review", packageType: "Gói Cao Cấp", views: "8.9M", handle: "@saigonfood", colorIdx: 0 },
  { id: 18, title: "Tutorial makeup tự nhiên", category: "Hướng dẫn", packageType: "Gói Cao Cấp", views: "3.7M", handle: "@makeuptips", colorIdx: 1 },
];

export default function PortfolioPage() {
  const [selectedPackage, setSelectedPackage] = useState("Tất cả");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [showMoreCats, setShowMoreCats] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const pkgMatch = selectedPackage === "Tất cả" || p.packageType === selectedPackage;
      const catMatch = selectedCategory === "Tất cả" || p.category === selectedCategory;
      return pkgMatch && catMatch;
    });
  }, [selectedPackage, selectedCategory]);

  const visibleProjects = filtered.slice(0, visibleCount);
  const displayedCats = showMoreCats ? categoryFilters : categoryFilters.slice(0, 7);

  return (
    <div className="min-h-screen bg-purple-deeper text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple-deeper to-purple-dark" />
        <div className="absolute top-10 left-20 w-64 h-64 bg-pink-brand/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-brand/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-pink-brand/10 border border-pink-brand/20 text-pink-brand text-sm font-medium mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Dự Án <span className="gradient-text">Tiêu Biểu</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Các dự án video đã triển khai theo từng gói dịch vụ
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 sticky top-16 md:top-20 z-40 bg-purple-deeper/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Package Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {packageFilters.map((f) => (
              <button
                key={f}
                onClick={() => { setSelectedPackage(f); setVisibleCount(12); }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedPackage === f
                    ? "gradient-bg text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 items-center">
            {displayedCats.map((f) => (
              <button
                key={f}
                onClick={() => { setSelectedCategory(f); setVisibleCount(12); }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === f
                    ? "bg-pink-brand/20 text-pink-brand border border-pink-brand/30"
                    : "bg-white/[0.03] text-gray-500 hover:text-gray-300 border border-white/5"
                }`}
              >
                {f}
              </button>
            ))}
            {!showMoreCats && (
              <button
                onClick={() => setShowMoreCats(true)}
                className="px-4 py-2 rounded-full text-xs font-medium text-pink-brand hover:bg-pink-brand/10 transition-all flex items-center gap-1"
              >
                Xem thêm <ChevronDown size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {visibleProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Chưa có dự án nào trong danh mục này</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-pink-brand/30 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  >
                    <div className={`aspect-[9/16] bg-gradient-to-br ${colors[project.colorIdx]} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10" />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform">
                          <Play size={28} className="text-white ml-1" fill="white" />
                        </div>
                      </div>

                      {/* Category tag */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold text-white">
                            {project.title[0]}
                          </div>
                          <div className="min-w-0">
                            <p className="text-white text-xs font-semibold truncate">{project.title}</p>
                            <p className="text-white/60 text-xs">{project.handle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Eye size={14} className="text-gray-500" />
                        <span className="text-gray-400 text-xs">{project.views}</span>
                      </div>
                      <span className="text-gray-600 text-xs">{project.packageType.replace("Gói ", "")}</span>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < filtered.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount((v) => v + 12)}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all"
                  >
                    Xem thêm dự án
                    <ChevronDown size={20} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-12 sm:p-16 rounded-3xl overflow-hidden text-center">
            <div className="absolute inset-0 gradient-bg opacity-90" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Bạn muốn video như thế này?
              </h2>
              <p className="text-white/80 text-lg mb-8">Hãy để chúng tôi tạo nên những video ấn tượng cho thương hiệu của bạn</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-pink-brand px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105">
                  Nhận tư vấn
                </Link>
                <Link href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  Xem báo giá
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
