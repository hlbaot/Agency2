"use client";

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
  image: string;
  featured?: boolean;
}

const blogImages = [
  "https://images.pexels.com/photos/5215008/pexels-photo-5215008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  "https://images.pexels.com/photos/32613937/pexels-photo-32613937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200",
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 xu hướng TikTok 2024 mà doanh nghiệp không thể bỏ qua",
    description: "Khám phá những xu hướng nội dung đang viral trên TikTok và cách áp dụng cho thương hiệu của bạn để tăng tương tác.",
    category: "Insight",
    readTime: "5 phút",
    gradient: gradients[0],
    image: blogImages[0],
    featured: true,
  },
  {
    id: 2,
    title: "Cách xây dựng chiến lược nội dung TikTok từ con số 0",
    description: "Hướng dẫn chi tiết từng bước để lên kế hoạch nội dung TikTok hiệu quả, từ nghiên cứu đối thủ đến lên lịch đăng bài.",
    category: "Chiến lược",
    readTime: "8 phút",
    gradient: gradients[1],
    image: blogImages[1],
    featured: true,
  },
  {
    id: 3,
    title: "Hướng dẫn quay video TikTok chuyên nghiệp bằng điện thoại",
    description: "Tips và tricks để quay video TikTok chất lượng cao chỉ với smartphone, bao gồm ánh sáng, góc quay và chỉnh sửa.",
    category: "Hướng dẫn",
    readTime: "6 phút",
    gradient: gradients[2],
    image: blogImages[2],
  },
  {
    id: 4,
    title: "Branding trên TikTok: Xây dựng nhận diện thương hiệu mạnh mẽ",
    description: "Làm sao để thương hiệu của bạn nổi bật trên TikTok? Bí quyết xây dựng brand identity nhất quán trên nền tảng video ngắn.",
    category: "Branding",
    readTime: "7 phút",
    gradient: gradients[3],
    image: blogImages[3],
  },
  {
    id: 5,
    title: "Thuật toán TikTok 2024: Mọi thứ bạn cần biết",
    description: "Giải mã cách thuật toán TikTok hoạt động và làm sao để tối ưu nội dung của bạn xuất hiện trên For You Page.",
    category: "Insight",
    readTime: "10 phút",
    gradient: gradients[4],
    image: blogImages[4],
  },
  {
    id: 6,
    title: "Cách viết hook hấp dẫn cho video TikTok trong 3 giây đầu",
    description: "3 giây đầu tiên quyết định tất cả! Học cách viết hook khiến người xem không thể lướt qua video của bạn.",
    category: "Hướng dẫn",
    readTime: "4 phút",
    gradient: gradients[5],
    image: blogImages[5],
  },
  {
    id: 7,
    title: "ROI của TikTok Marketing: Cách đo lường hiệu quả thực sự",
    description: "Hướng dẫn sử dụng TikTok Analytics và các công cụ để đo lường ROI của chiến dịch TikTok marketing.",
    category: "Chiến lược",
    readTime: "6 phút",
    gradient: gradients[0],
    image: blogImages[0],
  },
  {
    id: 8,
    title: "Case study: Từ 0 đến 1 triệu followers trong 6 tháng",
    description: "Phân tích chi tiết chiến lược đã giúp khách hàng của chúng tôi đạt 1 triệu followers TikTok chỉ trong nửa năm.",
    category: "Insight",
    readTime: "8 phút",
    gradient: gradients[1],
    image: blogImages[1],
  },
  {
    id: 9,
    title: "Storytelling trên TikTok: Kể chuyện thương hiệu hiệu quả",
    description: "Nghệ thuật kể chuyện trên TikTok giúp tạo kết nối cảm xúc với khách hàng và tăng tỷ lệ chuyển đổi.",
    category: "Branding",
    readTime: "5 phút",
    gradient: gradients[2],
    image: blogImages[2],
  },
  {
    id: 10,
    title: "TikTok Shop: Cơ hội vàng cho doanh nghiệp Việt",
    description: "Tìm hiểu cách tận dụng TikTok Shop để tăng doanh số bán hàng và tiếp cận khách hàng mới.",
    category: "Chiến lược",
    readTime: "7 phút",
    gradient: gradients[3],
    image: blogImages[3],
  },
  {
    id: 11,
    title: "Hướng dẫn dựng video TikTok bằng CapCut chuyên nghiệp",
    description: "Tutorial chi tiết về cách sử dụng CapCut để edit video TikTok với hiệu ứng, transition và text overlay.",
    category: "Hướng dẫn",
    readTime: "9 phút",
    gradient: gradients[4],
    image: blogImages[4],
  },
  {
    id: 12,
    title: "Personal branding cho CEO trên TikTok",
    description: "Tại sao CEO cần có mặt trên TikTok? Chiến lược xây dựng thương hiệu cá nhân cho lãnh đạo doanh nghiệp.",
    category: "Branding",
    readTime: "6 phút",
    gradient: gradients[5],
    image: blogImages[5],
  },
];

const aboutSlides = [
  "https://res.cloudinary.com/djpujlimr/image/upload/v1775650689/hhr12zuqnhwlsvtkmo2r.png",
  "https://res.cloudinary.com/djpujlimr/image/upload/v1775650696/epjoqgqsd0p0agvnrszn.png",
  "https://res.cloudinary.com/djpujlimr/image/upload/v1775650692/wss1nxkjcqiscj5x2vlw.png",
  "https://res.cloudinary.com/djpujlimr/image/upload/v1775650689/na4lbnjb07rb7hrhrduu.png",
  "https://res.cloudinary.com/djpujlimr/image/upload/v1775650689/svlt0wnyybw0vuplps50.png",
  "https://res.cloudinary.com/djpujlimr/image/upload/v1775650689/aolvvg9lap6hczxc4lyi.png",
];

export default function BlogPage() {
  const hiddenBlogArchive = {
    categories,
    blogPosts,
  };

  return (
    <div className="light-page min-h-screen bg-white text-slate-900">
      {/*
        Trang About hiện hiển thị các slide ảnh trong một khung cuộn dọc cố định.
        Ảnh được giữ đúng thứ tự từ trên xuống như tài liệu gốc.
        Responsive height tính chính xác:
          Header mobile  = 64px (h-16),  md+ = 80px (h-20)
          Section padding-top: 1.75rem (28px) trên mọi breakpoint
          Section padding-bottom: 2rem (32px), lg = 2.5rem (40px)
          → khung scroll = 100dvh − header − padding-top − padding-bottom − border/gap
      */}
      <section className="px-3 pb-0 pt-16 sm:px-4 md:px-6 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div
            className="h-[calc(100dvh-4rem)] overflow-y-auto rounded-b-2xl border border-[#dbe6f5] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:rounded-b-[24px] md:h-[calc(100dvh-5rem)] md:rounded-b-[28px]"
            style={{
              minHeight: "500px",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="bg-[#f8fbff] p-2 sm:p-3 md:p-4">
              {aboutSlides.map((slide, index) => (
                <div
                  key={slide}
                  className="flex min-h-[calc(100dvh-5rem)] items-center justify-center md:min-h-[calc(100dvh-6rem)]"
                >
                  <img
                    src={slide}
                    alt={`About slide ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="block h-full max-h-[calc(100dvh-5rem)] w-full object-contain md:max-h-[calc(100dvh-6rem)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nội dung blog cũ đang được giữ lại trong code nhưng tạm ẩn theo yêu cầu */}
      <div
        className="hidden"
        data-hidden-blog-posts={hiddenBlogArchive.blogPosts.length}
        data-hidden-blog-categories={hiddenBlogArchive.categories.length}
      />
    </div>
  );
}
