"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Play,
  Eye,
  ShoppingBag,
  Users,
  Phone,
  ChevronRight,
  Star,
  MessageCircle,
  Heart,
  Share2,
  BarChart3,
  Zap,
  Lightbulb,
  Check,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "1000+", label: "Video được tạo ra", color: "#C9A163" },
  { value: "50+", label: "Khách hàng tin dùng", color: "#C9A163" },
  { value: "10M+", label: "Views Tiktok", color: "#C9A163" },
];

const problems = [
  {
    icon: ShoppingBag,
    text: "Sản phẩm/dịch vụ tốt, nhưng video không kể được câu chuyện đó.",
    solution: {
      heading: "Chúng tôi mang chuẩn production phim vào từng video TikTok của bạn.",
      points: [
        "Ekip 3 người chuyên biệt: đạo diễn, quay phim, dựng phim",
        "Thiết bị Sony A73/A74/FX3, hình ảnh sắc nét, màu sắc chuẩn brand guideline",
        "Nói không với thiếu sáng, rung tay, tạp âm",
      ],
    },
  },
  {
    icon: Eye,
    text: 'Video không đủ "wao", dù bạn đã thuê người quay.',
    solution: {
      heading: "Script và visual identity được thiết kế riêng cho thương hiệu bạn.",
      points: [
        "Mỗi video có hook 3 giây giữ người xem lại",
        "Storytelling theo framework đã kiểm chứng",
        "A/B test format để tìm ra style phù hợp nhất",
      ],
    },
  },
  {
    icon: Users,
    text: "Không có gương mặt đại diện, không biết ai phù hợp với thương hiệu.",
    solution: {
      heading: "Chúng tôi casting và đào tạo KOC phù hợp với DNA thương hiệu.",
      points: [
        "Database 200+ KOC đã được kiểm định",
        "Đào tạo speaking và on-camera presence",
        "Thử nghiệm nhiều gương mặt để tìm ra người convert tốt nhất",
      ],
    },
  },
  {
    icon: BarChart3,
    text: "Đăng video nhưng không biết cái nào hiệu quả, cứ làm rồi để đó.",
    solution: {
      heading: "Dashboard analytics realtime, bạn biết số liệu, chúng tôi biết hành động.",
      points: [
        "Báo cáo hàng tuần với insight cụ thể",
        "Phân tích retention, CTR, conversion theo từng video",
        "Điều chỉnh chiến lược dựa trên data thực tế",
      ],
    },
  },
  {
    icon: Zap,
    text: "Muốn nhanh thì ẩu. Muốn chất thì chậm. Không thể có cả hai.",
    solution: {
      heading: "Quy trình sản xuất chuẩn hóa, nhanh va chat cùng lúc.",
      points: [
        "8-16 video/tháng với quy trình batch production",
        "Turnaround time 48h từ brief đến video hoàn chỉnh",
        "Không cần bạn có mặt, chúng tôi tự vận hành",
      ],
    },
  },
];

const comparison = [
  { feature: "Giá", freelancer: "Rẻ", agency: "Đắt", us: "Hợp lý" },
  { feature: "Thiết bị", freelancer: "Cơ bản", agency: "Chuyên nghiệp", us: "Chuyên nghiệp" },
  { feature: "Nhân sự", freelancer: "1 người", agency: "5+ người", us: "3 người" },
  { feature: "Studio", freelancer: "Không", agency: "Có", us: "Có" },
  { feature: "Diễn viên", freelancer: "Không", agency: "Có (phụ phí)", us: "Có" },
  { feature: "Chiến lược", freelancer: "Không", agency: "Có", us: "Có" },
];

const trustedProfiles = [
  { src: "/img/tik1.png", alt: "TikTok profile 1" },
  { src: "/img/tik2.png", alt: "TikTok profile 2" },
  { src: "/img/tik3.png", alt: "TikTok profile 3" },
  { src: "/img/tik4.png", alt: "TikTok profile 4" },
  { src: "/img/tik5.png", alt: "TikTok profile 5" },
  { src: "/img/tik6.png", alt: "TikTok profile 6" },
];

const heroVideos = {
  main:
    "https://res.cloudinary.com/djpujlimr/video/upload/v1775265200/cjk2zm54tiu8g1qekbo3.mp4",
  left:
    "https://res.cloudinary.com/djpujlimr/video/upload/v1775265173/wzdmbzpmvjsftgskingc.mp4",
  right:
    "https://res.cloudinary.com/djpujlimr/video/upload/v1775265109/dzegwkkj4g3ivyuzc9ch.mp4",
};

const caseStudies = [
  {
    name: "Nhà hàng Hải Sản Đại Dương",
    handle: "@haisandaiduong",
    category: "F&B",
    views: "2.5M",
    mediaSrc:
      "https://res.cloudinary.com/djpujlimr/video/upload/v1775630180/a4v72tnecdz9anyshbb4.mp4",
  },
  {
    name: "Spa Bella Beauty",
    handle: "@bellaspa.vn",
    category: "Spa",
    views: "1.8M",
    mediaSrc:
      "https://res.cloudinary.com/djpujlimr/video/upload/v1775630190/aifou9jjfxn0orczg1q2.mp4",
  },
  {
    name: "BĐS Golden Land",
    handle: "@goldenland.vn",
    category: "Bất động sản",
    views: "3.2M",
    mediaSrc:
      "https://res.cloudinary.com/djpujlimr/video/upload/v1775631677/fpfebij0tcvyop5mjk1t.mp4",
  },
  {
    name: "Thời trang Moly",
    handle: "@moly.fashion",
    category: "Thời trang",
    views: "4.1M",
    mediaSrc:
      "https://res.cloudinary.com/djpujlimr/video/upload/v1775629837/mynbbvk8nugbpofqdnfn.mp4",
  },
];

function HeroVisual() {
  return (
    <div className="hero-phone-scene relative mx-auto h-[560px] w-full max-w-[680px]">
      <PhoneMockup
        className="hero-phone hero-phone-main"
        size="lg"
        variant="video"
        mediaSrc={heroVideos.main}
        showPlay
      />
      <PhoneMockup
        className="hero-phone hero-phone-front-left"
        size="sm"
        variant="video"
        mediaSrc={heroVideos.left}
      />
      <PhoneMockup
        className="hero-phone hero-phone-right"
        size="sm"
        variant="video"
        mediaSrc={heroVideos.right}
      />

      <div className="hero-badge hero-badge-heart animate-float flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg shadow-[0_10px_26px_rgba(0,0,0,0.12)]">
        <Heart size={22} className="text-[#f1389b]" />
      </div>
      <div
        className="hero-badge hero-badge-chat animate-float flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg shadow-[0_10px_26px_rgba(0,0,0,0.12)]"
        style={{ animationDelay: "0.5s" }}
      >
        <MessageCircle size={22} className="text-[#0fa3c7]" />
      </div>
      <div
        className="hero-badge hero-badge-share animate-float flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg shadow-[0_10px_26px_rgba(0,0,0,0.12)]"
        style={{ animationDelay: "1s" }}
      >
        <Share2 size={22} className="text-[#1599b5]" />
      </div>

      <div
        className="absolute inset-0 z-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 36%, transparent 72%)",
        }}
      />
    </div>
  );
}

function PhoneMockup({
  size = "md",
  showPlay = false,
  variant = "conversation",
  className = "",
  mediaSrc,
}: {
  size?: "xs" | "sm" | "md" | "lg";
  showPlay?: boolean;
  variant?: "conversation" | "showroom" | "fashion" | "product" | "image" | "video";
  className?: string;
  mediaSrc?: string;
}) {
  const dimensions = {
    xs: { width: 108, height: 192 },
    sm: { width: 120, height: 213 },
    md: { width: 150, height: 267 },
    lg: { width: 180, height: 320 },
  };

  const { width, height } = dimensions[size];
  const borderColor = "5px solid #111111";

  const frameBackgrounds: Record<string, string> = {
    conversation:
      "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.08)), linear-gradient(135deg, #e7eef8 0%, #f9fcff 38%, #dde9f8 100%)",
    showroom:
      "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.08)), linear-gradient(150deg, #59799a 0%, #1d2f43 30%, #1a1e2a 62%, #354b66 100%)",
    fashion:
      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.08)), linear-gradient(140deg, #fff1cb 0%, #f4d285 26%, #fff5db 52%, #8d3a32 100%)",
    product:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.1)), linear-gradient(145deg, #e8d7b6 0%, #f7ebd7 38%, #d29f6b 100%)",
  };

  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: 28,
        border: borderColor,
        boxShadow: "0 22px 46px rgba(0,0,0,0.18)",
        overflow: "hidden",
        background: frameBackgrounds[variant],
      }}
    >
      <div className="absolute inset-0">
        {variant === "image" && mediaSrc && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${mediaSrc}')` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.06)_38%,rgba(0,0,0,0.16)_100%)]" />
          </>
        )}

        {variant === "video" && mediaSrc && (
          <>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={mediaSrc}
              muted
              playsInline
              preload="metadata"
              ref={(node) => {
                if (!node) return;
                node.pause();
                if (node.readyState >= 2) {
                  try {
                    node.currentTime = 0.01;
                  } catch {}
                }
              }}
              onLoadedData={(event) => {
                const video = event.currentTarget;
                video.pause();
                try {
                  video.currentTime = 0.01;
                } catch {}
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.06)_38%,rgba(0,0,0,0.16)_100%)]" />
          </>
        )}

        {variant === "conversation" && (
          <>
            <div className="absolute left-0 top-0 h-16 w-full bg-white/35" />
            <div className="absolute left-4 top-14 h-28 w-[74%] rounded-2xl bg-[linear-gradient(135deg,#f7fbff_0%,#e9f1fb_100%)] shadow-sm" />
            <div className="absolute left-5 top-[4.7rem] h-2.5 w-20 rounded-full bg-[#bfcde2]" />
            <div className="absolute left-5 top-[5.6rem] h-2.5 w-16 rounded-full bg-[#d1ddef]" />
            <div className="absolute left-5 top-[6.5rem] h-12 w-24 rounded-xl bg-[#9cc0eb]/50" />
            <div className="absolute right-5 top-[8.7rem] h-10 w-14 rounded-xl bg-[#dfe9f6]" />
            <div className="absolute bottom-0 h-20 w-full bg-white/18" />
            <div className="absolute bottom-3 left-4 flex gap-2">
              <div className="h-7 w-7 rounded-full bg-[#ff8c42]" />
              <div className="h-8 w-8 rounded-full bg-[#e53935]" />
              <div className="h-7 w-7 rounded-full bg-[#ffca28]" />
            </div>
            <div className="absolute bottom-2 right-3 h-20 w-16 rounded-t-[2rem] bg-[#1e2a3d]" />
            <div className="absolute bottom-6 right-10 h-14 w-10 rounded-t-[1.5rem] bg-[#6c4c3d]" />
            <div className="absolute bottom-0 right-0 h-10 w-full bg-white/32" />
          </>
        )}

        {variant === "showroom" && (
          <>
            <div className="absolute left-0 top-0 h-[42%] w-full bg-[repeating-linear-gradient(160deg,rgba(255,255,255,0.92)_0_5px,transparent_5px_34px)] opacity-80" />
            <div className="absolute left-0 top-[43%] h-[57%] w-full bg-[linear-gradient(180deg,#1c2030_0%,#24263b_40%,#0e1220_100%)]" />
            <div className="absolute left-[8%] top-[34%] h-[49%] w-[58%] rounded-[2rem_2rem_1rem_1rem] bg-[linear-gradient(135deg,#111725_0%,#262d40_45%,#0b1020_100%)] shadow-[0_16px_34px_rgba(0,0,0,0.28)]" />
            <div className="absolute left-[12%] top-[64%] h-[8%] w-[46%] rounded-full bg-[#10141d]" />
            <div className="absolute right-[14%] top-[40%] h-[46%] w-[22%] rounded-[1.2rem] bg-[linear-gradient(180deg,#f4f0ea_0%,#d8b487_100%)]" />
            <div className="absolute bottom-0 left-0 h-[22%] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(235,120,170,0.18)_100%)]" />
            <div className="absolute bottom-[22%] left-[48%] h-[54%] w-[30%] rounded-[3rem_3rem_1rem_1rem] bg-[linear-gradient(180deg,#f8e7d6_0%,#f4d8c3_35%,#ecd2bf_36%,#12151d_37%,#12151d_100%)]" />
          </>
        )}

        {variant === "fashion" && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0)_35%)]" />
            <div className="absolute bottom-0 right-[18%] h-[74%] w-[42%] rounded-t-[3rem] bg-[linear-gradient(180deg,#7a3a23_0%,#c95d44_25%,#e2574f_26%,#d63f4c_100%)]" />
            <div className="absolute bottom-[20%] right-[26%] h-[56%] w-[28%] rounded-t-[3rem] bg-[linear-gradient(180deg,#8e4b2d_0%,#5d3021_100%)]" />
            <div className="absolute bottom-[70%] right-[27%] h-[18%] w-[25%] rounded-full bg-[#8a5a43]" />
            <div className="absolute left-[52%] top-[36%] -translate-x-1/2 text-[2.7rem] font-light tracking-[0.28em] text-white/95 [writing-mode:vertical-rl]">
              GAO
            </div>
          </>
        )}

        {variant === "product" && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#fff8ea_0%,#f6d29d_45%,#8d5a36_100%)]" />
            <div className="absolute left-[22%] top-[20%] h-[46%] w-[56%] rounded-[1.6rem] bg-[linear-gradient(180deg,#b67646_0%,#8b4f29_100%)] shadow-[0_10px_24px_rgba(0,0,0,0.14)]" />
            <div className="absolute left-[30%] top-[16%] h-[10%] w-[40%] rounded-full bg-[#c98a56]" />
            <div className="absolute bottom-[12%] left-[18%] h-[10%] w-[64%] rounded-full bg-white/45" />
          </>
        )}

        {showPlay && (
          <div className="absolute bottom-6 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/92 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 2.5L13 8L4 13.5V2.5Z" fill="#f1389b" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroStat({ stat }: { stat: (typeof stats)[number] }) {
  return (
    <div className="flex min-w-[120px] flex-col">
      <span
        className="text-[1.875rem] font-black leading-none tracking-tight"
        style={{ color: stat.color }}
      >
        {stat.value}
      </span>
      <span className="mt-1 text-[0.8rem] font-medium text-[#4d5f7e]">
        {stat.label}
      </span>
    </div>
  );
}

export default function HomePage() {
  const [activeProblemIndex, setActiveProblemIndex] = useState(0);
  const [isProblemPaused, setIsProblemPaused] = useState(false);

  useEffect(() => {
    if (isProblemPaused) return;
    const id = window.setInterval(() => {
      setActiveProblemIndex((prev) => (prev + 1) % problems.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, [isProblemPaused]);

  const activeSolution = problems[activeProblemIndex].solution;

  return (
    <div className="light-page min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#fbfcff] text-[#08152f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_45%,rgba(15,42,86,0.24)_0%,rgba(15,42,86,0.16)_16%,rgba(15,42,86,0.1)_30%,rgba(15,42,86,0.05)_46%,rgba(255,255,255,0)_68%),linear-gradient(180deg,#ffffff_0%,#f8fbff_40%,#ffffff_100%)]" />
        <div className="absolute inset-0 opacity-22 [background-image:linear-gradient(rgba(39,77,132,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(39,77,132,0.03)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute left-14 top-10 h-72 w-72 rounded-full bg-[#4f73ad]/8 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#173460]/7 blur-3xl" />
        <div className="absolute right-8 top-16 h-96 w-96 rounded-full bg-[#173460]/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#173460]/7 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col items-start">
              <div className="mb-6 animate-fade-in-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A163]/50 bg-white/70 px-[18px] py-2 text-[13px] font-bold tracking-[0.01em] text-[#b88f4f] backdrop-blur-sm">
              <Star size={14} fill="currentColor" />
              Studio TikTok #1 cho thương hiệu Việt
                </span>
              </div>

              <h1 className="animate-fade-in-up mb-5 text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.15] tracking-tight" style={{ animationDelay: "0.12s" }}>
                <span className="block text-[#08152f]">Thương hiệu không</span>
                <span className="block">
                  <span className="text-[#08152f]">thắng nhờ 1 cú viral - </span>
                  <span className="bg-[linear-gradient(135deg,#d8b167_0%,#b8862b_100%)] bg-clip-text text-transparent">
                    Đó
                  </span>
                </span>
                <span className="block bg-[linear-gradient(135deg,#d8b167_0%,#b8862b_100%)] bg-clip-text text-transparent">
                  là kết quả của chiến lược
                </span>
              </h1>

              <p
                className="animate-fade-in-up mb-8 max-w-[500px] text-base leading-7 text-[#4d5f7e]"
                style={{ animationDelay: "0.22s" }}
              >
                Chúng tôi không chỉ quay dựng video. Chúng tôi xây dựng cỗ máy
                nội dung giúp thương hiệu của bạn xuất hiện đúng người, đúng lúc
                - và biến người xem thành khách hàng thật sự.
              </p>

              <div
                className="animate-fade-in-up mb-10 flex flex-wrap gap-3"
                style={{ animationDelay: "0.32s" }}
              >
                <Link
                  href="/contact"
                  className="cursor-pointer rounded-full bg-[#C9A163] px-7 py-[13px] text-[0.95rem] font-bold text-[#0a1f44] shadow-[0_4px_20px_rgba(201,161,99,0.4)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#b88f4f] hover:shadow-[0_8px_28px_rgba(201,161,99,0.5)]"
                >
                  Nhận báo giá &amp; tư vấn
                </Link>
                <Link
                  href="/#services"
                  className="cursor-pointer rounded-full border-2 border-[#0a1f44]/20 bg-white/65 px-7 py-[13px] text-[0.95rem] font-bold text-[#0a1f44] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#0a1f44]/40 hover:bg-white"
                >
                  Xem dịch vụ
                </Link>
              </div>

              <div
                className="animate-fade-in-up flex flex-wrap gap-8"
                style={{ animationDelay: "0.42s" }}
              >
                {stats.map((stat) => (
                  <HeroStat key={stat.label} stat={stat} />
                ))}
              </div>
            </div>

            <div
              className="animate-fade-in-up relative hidden h-[420px] items-center justify-center lg:flex"
              style={{ animationDelay: "0.2s" }}
            >
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section
        id="problems"
        className="bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_60%,#ffffff_100%)] py-20 md:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="mb-5 flex justify-center">
            <span className="rounded-full border border-[#C9A163]/40 bg-[#C9A163]/10 px-4 py-1.5 text-sm font-semibold text-[#8e6a33]">
              Bạn có đang gặp điều này?
            </span>
          </div>

          <h2 className="mb-4 text-center text-4xl font-black leading-tight text-[#C9A163] sm:text-5xl">
            Làm TikTok mãi mà không phát triển?
            <br className="hidden sm:block" /> Đây là lý do tại sao.
          </h2>

          <p className="mx-auto mb-14 max-w-xl text-center text-base text-[#8e6a33]/80">
            90% thương hiệu thất bại trên TikTok không phải vì thiếu ngân sách, mà vì thiếu hệ thống.
          </p>

          <div className="mb-6 flex flex-col gap-6 lg:flex-row">
            <div
              className="flex flex-col gap-3 lg:w-5/12"
              onMouseEnter={() => setIsProblemPaused(true)}
              onMouseLeave={() => setIsProblemPaused(false)}
            >
              {problems.map((problem, i) => {
                const Icon = problem.icon;
                const isActive = activeProblemIndex === i;

                return (
                  <button
                    key={problem.text}
                    type="button"
                    onClick={() => setActiveProblemIndex(i)}
                    className={[
                      "flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300",
                      isActive
                        ? "border border-[#C9A163]/45 bg-[linear-gradient(180deg,#d6aa67_0%,#bf8d45_100%)] shadow-[0_14px_30px_rgba(150,108,43,0.22)]"
                        : "border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(245,249,255,0.9)_100%)] hover:border-[#C9A163]/35 hover:bg-[linear-gradient(180deg,rgba(255,251,242,0.96)_0%,rgba(248,241,226,0.82)_100%)]",
                    ].join(" ")}
                    style={isActive ? { borderLeftColor: "#C9A163", borderLeftWidth: 4 } : undefined}
                  >
                    <span
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isActive ? "bg-white/18 text-white" : "bg-white/80 text-[#8e6a33]",
                      ].join(" ")}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={[
                        "text-sm leading-snug transition-all duration-300",
                        isActive ? "font-semibold text-white" : "text-[#8e6a33]",
                      ].join(" ")}
                    >
                      {problem.text}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="lg:w-7/12">
              <div className="flex min-h-64 h-full flex-col justify-center rounded-3xl bg-[linear-gradient(180deg,#102247_0%,#0c1b39_100%)] p-8 shadow-[0_18px_48px_rgba(12,27,57,0.12)]">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#C9A163]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C9A163]">
                    Giải pháp
                  </span>
                </div>

                <h3 className="mb-6 text-xl font-black leading-snug text-[#ffffff] sm:text-2xl">
                  {activeSolution.heading}
                </h3>

                <ul className="flex flex-col gap-4">
                  {activeSolution.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A163]/20">
                        <Check className="h-3 w-3 text-[#C9A163]" />
                      </span>
                      <span className="text-sm leading-relaxed text-[#ffffff]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-[#C9A163]/8 px-6 py-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A163]/15">
              <Lightbulb className="h-5 w-5 text-[#C9A163]" />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#8e6a33]">
                Insight
              </p>
              <p className="text-base font-semibold leading-snug text-[#08152f]">
                TikTok không ưu tiên sự hoàn hảo, TikTok ưu tiên sự đúng hướng và đều đặn.
              </p>
            </div>
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
                      ⭐ SHORT PRO.
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
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#08152f_0%,#06112a_100%)] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,99,0.08)_0%,rgba(201,161,99,0.03)_28%,transparent_62%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F2E3BA] mb-4">
              Dự án <span className="text-[#C9A163]">tiêu biểu</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/[0.03] border border-white/5 hover:border-pink-brand/30 overflow-hidden transition-all duration-300"
              >
                <div className="relative aspect-[9/12] overflow-hidden bg-[#dfe7f5]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={cs.mediaSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.02)_45%,rgba(0,0,0,0.32)_100%)]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-[#08152f]/88 px-3 py-1 text-xs font-medium text-[#F2E3BA] backdrop-blur-sm">
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
              className="inline-flex items-center gap-2 rounded-full border border-[#C9A163]/35 px-8 py-4 font-semibold text-[#F2E3BA] transition-all hover:cursor-pointer hover:bg-[#C9A163]/10"
            >
              Xem tất cả dự án
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-24">
        <div className="cta-container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="cta-card relative overflow-hidden rounded-[40px] px-5 py-12 text-center sm:px-8 sm:py-14">
            <div className="cta-background absolute inset-0 bg-[radial-gradient(circle_at_18%_68%,rgba(212,174,104,0.12),transparent_24%),radial-gradient(circle_at_84%_34%,rgba(212,174,104,0.14),transparent_24%)]" />
            <div className="cta-content relative z-10">
              <div className="cta-badge-wrap mb-6 flex justify-center">
                <span className="cta-badge inline-flex items-center gap-2 rounded-full border border-[#C9A163]/35 bg-[#C9A163]/10 px-5 py-2.5 text-base font-semibold text-[#C9A163]">
                  <Zap className="cta-badge-icon h-4 w-4" />
                  <span className="cta-badge-text">Bắt đầu ngay</span>
                </span>
              </div>

              <h2 className="cta-title mx-auto mb-6 max-w-3xl text-3xl font-black leading-[1.08] text-[#08152f] sm:text-4xl lg:text-5xl">
                Sẵn sàng bùng nổ trên TikTok?
              </h2>
              <p className="cta-description mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#6b7280] sm:text-xl sm:leading-[1.5]">
                Xem bảng giá chi tiết hoặc liên hệ để bắt đầu hành trình xây dựng thương hiệu của bạn.
              </p>
              <div className="cta-actions mb-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="cta-primary-button inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-[#d4ae68] px-8 py-4 text-lg font-bold text-[#08152f] shadow-[0_12px_28px_rgba(212,174,104,0.22)] transition-all hover:cursor-pointer hover:-translate-y-0.5 hover:bg-[#c79f53]"
                >
                  <span className="cta-primary-button-text">Đặt lịch tư vấn ngay</span>
                  <ChevronRight className="cta-primary-button-icon h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="cta-secondary-button inline-flex min-w-[180px] items-center justify-center rounded-2xl border border-[#d7dce5] bg-white px-8 py-4 text-lg font-bold text-[#08152f] transition-all hover:cursor-pointer hover:bg-[#f7f9fc]"
                >
                  <span className="cta-secondary-button-text">Xem bảng giá</span>
                </Link>
              </div>

              <div className="cta-contacts flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[#6b7280]">
                <div className="cta-contact-item inline-flex items-center gap-3 text-base sm:text-lg">
                  <Phone className="cta-contact-icon h-5 w-5" />
                  <span className="cta-contact-text">0906 914 696</span>
                </div>
                <div className="cta-contact-item inline-flex items-center gap-3 text-base sm:text-lg">
                  <Phone className="cta-contact-icon h-5 w-5" />
                  <span className="cta-contact-text">0935 357 656</span>
                </div>
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
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="marquee-track animate-marquee">
              {[0, 1, 2].map((groupIndex) => (
                <div key={groupIndex} className="marquee-group">
                  {trustedProfiles.map((profile) => (
                    <div key={`${groupIndex}-${profile.alt}`} className="flex-shrink-0">
                      <img
                        src={profile.src}
                        alt={profile.alt}
                        className="h-[158px] w-auto rounded-[28px] border border-black/10 bg-black object-cover shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
