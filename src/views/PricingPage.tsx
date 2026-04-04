"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Camera, Users, Sparkles, Phone, Zap, ChevronRight, Clock3, CalendarDays, Video, UserCheck, UserX } from "lucide-react";

type PricingTab = "chuyen-nghiep" | "cao-cap";

const pricingTabs: { id: PricingTab; label: string }[] = [
  { id: "chuyen-nghiep", label: "Gói Chuyên Nghiệp" },
  { id: "cao-cap", label: "Gói Cao Cấp" },
];

const pricingPlans = {
  "chuyen-nghiep": {
    title: "GÓI CHUYÊN NGHIỆP",
    accent: "text-[#1f4f95]",
    badge: "●",
    subtitle:
      "Video có hình ảnh sắc nét, bố cục chỉn chu, âm thanh rõ ràng. Phù hợp cho các kênh xây dựng hình ảnh chuyên nghiệp, uy tín.",
    includesTitle: "Trọn gói bao gồm",
    includes: [
      "Lên kịch bản đa dạng chủ đề (podcast, chuyên gia, review, ITVC...)",
      "Diễn viên có ngoại hình, thoại tốt",
      "Miễn phí studio sẵn có",
      "Ekip và thiết bị quay dựng chuyên nghiệp",
    ],
    detailTitle: "Chi tiết",
    details: [
      "2 Sony Alpha A73 + Lens cine",
      "Mic Saramonic",
      "2 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
    rows: [
      { qty: "10", withActor: "5.000.000", withoutActor: "4.500.000", duration: "1 buổi (4h)", completion: "1 tuần" },
      { qty: "20", withActor: "7.000.000", withoutActor: "6.000.000", duration: "1 ngày (8h)", completion: "3 tuần" },
      { qty: "40", withActor: "13.000.000", withoutActor: "12.000.000", duration: "2 ngày", completion: "1,5 tháng" },
      { qty: "100", withActor: "30.000.000", withoutActor: "25.000.000", duration: "5 ngày", completion: "3 tháng" },
      { qty: "200", withActor: "58.000.000", withoutActor: "48.000.000", duration: "10 ngày", completion: "6 tháng" },
      { qty: "400", withActor: "110.000.000", withoutActor: "90.000.000", duration: "20 ngày", completion: "1 năm" },
    ],
  },
  "cao-cap": {
    title: "GÓI CAO CẤP",
    accent: "text-[#2b67c8]",
    badge: "💎",
    subtitle:
      "Video hình ảnh chất lượng cao, màu sắc đẹp, bố cục chuyên nghiệp, âm thanh rõ ràng. Phù hợp cho các kênh cần xây dựng hình ảnh cao cấp.",
    includesTitle: "Trọn gói bao gồm",
    includes: [
      "Lên kịch bản đa dạng chủ đề (podcast, chuyên gia, review, ITVC...)",
      "Diễn viên ngoại hình đẹp, chuyên nghiệp, thoại tốt, đa dạng lựa chọn",
      "Miễn phí studio sẵn có",
      "Ekip và thiết bị quay dựng cao cấp",
    ],
    detailTitle: "Chi tiết",
    details: [
      "2 Sony Alpha A74 / FX3 + Lens cine",
      "Mic Saramonic",
      "4 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
    rows: [
      { qty: "10", withActor: "9.000.000", withoutActor: "8.000.000", duration: "4h", completion: "1 tuần" },
      { qty: "20", withActor: "13.000.000", withoutActor: "11.000.000", duration: "8h", completion: "3 tuần" },
      { qty: "40", withActor: "24.000.000", withoutActor: "20.000.000", duration: "2 ngày", completion: "1,5 tháng" },
      { qty: "100", withActor: "58.000.000", withoutActor: "48.000.000", duration: "5 ngày", completion: "3 tháng" },
      { qty: "200", withActor: "110.000.000", withoutActor: "90.000.000", duration: "10 ngày", completion: "6 tháng" },
      { qty: "400", withActor: "210.000.000", withoutActor: "160.000.000", duration: "20 ngày", completion: "1 năm" },
    ],
  },
} as const;

const bundles = [
  {
    name: "Gói Tăng Nhận Diện, Phủ Thương Hiệu",
    price: "30.000.000 ĐỒNG",
    videos: "100 Videos",
    popular: true,
    headline:
      "100 video chủ đề đa dạng, phục vụ cho việc tăng lượt tiếp cận khách hàng, phủ sóng thương hiệu.",
    topics:
      "Chủ đề: Feedback khách hàng thật, Dự án đã triển khai / case thực tế, Hậu trường làm việc, quy trình, Đội ngũ, con người doanh nghiệp, ...",
    content: [
      "Lên kịch bản cụ thể theo yêu cầu",
      "Video có hình ảnh sắc nét, chuyên nghiệp, bố cục chỉn chu, âm thanh rõ ràng",
      "Diễn viên có ngoại hình, thoại tốt",
      "Ekip quay chuyên nghiệp & Miễn phí studio",
    ],
    contentBreakdown: [],
    details: [
      "Sony Alpha A73 + Lens cine",
      "Mic Saramonic",
      "2 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
  },
  {
    name: "Gói Xây Kênh Bán Hàng",
    price: "30.000.000 ĐỒNG",
    videos: "100 Videos",
    headline:
      "100 video chủ đề đa dạng, phục vụ cho việc lựa chọn sản phẩm, thúc đẩy mua hàng",
    topics:
      "Chủ đề: Chương trình khuyến mãi, Báo giá sản phẩm, Review sản phẩm/dịch vụ",
    content: [
      "Lên kịch bản cụ thể theo yêu cầu",
      "Video có hình ảnh sắc nét, chuyên nghiệp, bố cục chỉn chu, âm thanh rõ ràng",
      "Diễn viên có ngoại hình, thoại tốt",
      "Ekip quay chuyên nghiệp & Miễn phí studio",
    ],
    contentBreakdown: [],
    details: [
      "Sony Alpha A73 + Lens cine",
      "Mic Saramonic",
      "2 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
  },
  {
    name: "Gói Xây Dựng Uy Tín, Định Vị Thương Hiệu",
    price: "30.000.000 ĐỒNG",
    videos: "50 Videos",
    headline:
      "50 video chủ đề đa dạng, phục vụ cho việc tăng độ uy tín, tạo niềm tin với khách hàng",
    topics:
      "Chủ đề: Feedback khách hàng thật, Dự án đã triển khai / case thực tế, Hậu trường làm việc, quy trình, Đội ngũ, con người doanh nghiệp,...",
    content: [
      "Lên kịch bản cụ thể theo yêu cầu",
      "Video có hình ảnh sắc nét, chuyên nghiệp, bố cục chỉn chu, âm thanh rõ ràng",
      "Diễn viên có ngoại hình, thoại tốt",
      "Ekip quay chuyên nghiệp & Miễn phí studio",
    ],
    contentBreakdown: [],
    details: [
      "Sony Alpha A73 + Lens cine",
      "Mic Saramonic",
      "2 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
  },
  {
    name: "Gói Kết Nối Khách Hàng",
    price: "30.000.000 ĐỒNG",
    videos: "100 Videos",
    headline:
      "100 video chủ đề đa dạng, phục vụ cho việc tăng tần suất kết nối với khách hàng",
    topics:
      "Chủ đề: Trả lời comment, câu hỏi khách, Vlog công việc hằng ngày, Chia sẻ đời sống, hậu trường, Quan điểm cá nhân về ngành",
    content: [
      "Lên kịch bản cụ thể theo yêu cầu",
      "Video có hình ảnh sắc nét, chuyên nghiệp, bố cục chỉn chu, âm thanh rõ ràng",
      "Diễn viên có ngoại hình, thoại tốt",
      "Ekip quay chuyên nghiệp & Miễn phí studio",
    ],
    details: [
      "Sony Alpha A73 + Lens cine",
      "Mic Saramonic",
      "2 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
  },
  {
    name: "Gói Hướng Dẫn Sử Dụng, Educate Khách Hàng",
    price: "30.000.000 ĐỒNG",
    videos: "100 Videos",
    headline:
      "100 video chủ đề đa dạng, phục vụ cho việc tìm hiểu thông tin của khách hàng",
    topics:
      "Chủ đề: Review sản phẩm, Hướng dẫn sử dụng, So sánh các loại sản phẩm, Giải thích thông số, câu hỏi thường gặp,...",
    content: [
      "Video có hình ảnh sắc nét, bố cục chỉn chu, âm thanh rõ ràng",
      "Lên kịch bản cụ thể theo yêu cầu",
      "Diễn viên có ngoại hình, thoại tốt",
      "Ekip quay chuyên nghiệp & Miễn phí studio",
    ],
    contentBreakdown: [],
    details: [
      "Sony Alpha A73 + Lens cine",
      "Mic Saramonic",
      "2 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
  },
  {
    name: "Gói Xây Kênh Custom Theo Nhu Cầu",
    price: "30.000.000 ĐỒNG",
    videos: "100 Videos",
    headline:
      "100 video chủ đề đa dạng, phục vụ cho việc tìm hiểu thông tin của khách hàng",
    topics:
      "Chủ đề: Review sản phẩm, Hướng dẫn sử dụng, So sánh các loại sản phẩm, Giải thích thông số, câu hỏi thường gặp,...",
    content: [
      "Video có hình ảnh sắc nét, bố cục chỉn chu, âm thanh rõ ràng",
      "Lên kịch bản bạn cụ thể theo yêu cầu",
      "Diễn viên có ngoại hình, thoại tốt",
      "Ekip quay chuyên nghiệp & Miễn phí studio",
    ],
    contentBreakdown: [],
    details: [
      "Sony Alpha A73 + Lens cine",
      "Mic Saramonic",
      "2 đèn quay chuyên dụng",
      "3 nhân sự (Producer, 2 Camop)",
      "Hậu kỳ đến khi hoàn thiện",
    ],
  },
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
  const [activePlan, setActivePlan] = useState<PricingTab>("chuyen-nghiep");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openBundles, setOpenBundles] = useState<number[]>([0]);
  const [showAllBundles, setShowAllBundles] = useState(false);
  const currentPlan = pricingPlans[activePlan];
  const visibleBundles = showAllBundles ? bundles : bundles.slice(0, 4);

  return (
    <div className="light-page min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-32 md:pb-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(212,174,104,0.08),transparent_24%),radial-gradient(circle_at_82%_28%,rgba(42,74,130,0.08),transparent_28%),linear-gradient(180deg,#fcfdff_0%,#f8fbff_58%,#ffffff_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A163]/35 bg-[#C9A163]/10 px-4 py-2 text-sm font-semibold text-[#C9A163] backdrop-blur-sm">
              <Sparkles size={15} />
              Năng lực sản xuất
            </span>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-[#08152f] md:text-6xl">
              <span>Báo Giá </span>
              <span className="bg-[linear-gradient(90deg,#f0c57a_0%,#dcae5d_45%,#f4cf8c_100%)] bg-clip-text text-transparent">
                Dịch Vụ
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6b7280]">
              Chúng tôi đầu tư vào thiết bị chuẩn production được dùng trong quảng cáo thương mại. Để mỗi frame hình nâng tầm thương hiệu của bạn.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 flex justify-center">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#d9dfeb] bg-white p-1.5 shadow-[0_12px_30px_rgba(8,21,47,0.06)]">
              {pricingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePlan(tab.id)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition-all sm:px-6 ${
                    activePlan === tab.id
                      ? "bg-[#d4ae68] text-[#08152f] shadow-[0_10px_24px_rgba(212,174,104,0.24)]"
                      : "text-[#6b7280] hover:bg-[#f5f7fb] hover:text-[#08152f]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#6b7280] pb-1 text-lg text-[#6b7280] transition-all hover:text-[#08152f] hover:border-[#08152f]">
              Xem báo giá trọn gói
              <ChevronRight size={18} />
            </Link>
          </div>

          <div className="mb-6 rounded-[28px] border border-[#d7e3f6] bg-[linear-gradient(180deg,#f4f8ff_0%,#edf4ff_100%)] p-6 shadow-[0_16px_36px_rgba(31,79,149,0.08)] md:p-9">
            <div className="mb-6 inline-flex rounded-full border border-[#c8d8f0] bg-white px-6 py-2 text-sm font-bold text-[#1f4f95] shadow-sm">
              {activePlan === "cao-cap" ? "Gói Cao Cấp" : "Gói Chuyên Nghiệp"}
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-3 text-[#d4ae68] shadow-sm">
                    <Camera size={20} />
                  </div>
                  <h2 className={`text-2xl font-black ${currentPlan.accent}`}>{currentPlan.title}</h2>
                </div>

                <p className="mb-3 text-[1.05rem] font-semibold leading-relaxed text-[#1f2937]">
                  {currentPlan.subtitle}
                </p>
                <p className="mb-8 text-lg text-[#6b7280]">
                  {activePlan === "cao-cap"
                    ? "Phù hợp cho các kênh cần xây dựng hình ảnh cao cấp"
                    : "Phù hợp cho các kênh xây dựng hình ảnh chuyên nghiệp, uy tín"}
                </p>

                <p className="mb-4 text-[1.7rem] font-black text-[#111827]">{currentPlan.includesTitle}:</p>
                <ul className="space-y-3">
                  {currentPlan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4b5563]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1f4f95]" />
                      <span className="text-[1.05rem] leading-8">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-4 text-[1.7rem] font-black text-[#111827]">{currentPlan.detailTitle} thiết bị:</p>
                <ul className="space-y-3">
                  {currentPlan.details.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4b5563]">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1f4f95]" />
                      <span className="text-[1.05rem] leading-8">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#d7e3f6] bg-white shadow-[0_18px_42px_rgba(8,21,47,0.08)]">
            <div className="grid grid-cols-5 bg-[linear-gradient(180deg,#eff5ff_0%,#e5eefc_100%)] px-4 py-3 text-[11px] font-bold text-[#1f2937] md:text-sm">
              <span className="inline-flex items-center gap-2"><Video size={18} className="text-[#1f4f95]" />Số lượng Video</span>
              <span className="inline-flex items-center gap-2"><UserCheck size={18} className="text-[#1f4f95]" />Có diễn viên</span>
              <span className="inline-flex items-center gap-2"><UserX size={18} className="text-[#1f4f95]" />Không diễn viên</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={18} className="text-[#1f4f95]" />Thời gian quay</span>
              <span className="inline-flex items-center gap-2"><CalendarDays size={18} className="text-[#1f4f95]" />Dự kiến hoàn thành</span>
            </div>

            {currentPlan.rows.map((row) => (
              <div key={row.qty} className="grid grid-cols-5 border-t border-[#e1eaf8] px-4 py-4 text-[11px] md:text-sm">
                <span className="font-semibold text-[#6b7280]">
                  <span className="mr-1.5 text-[1.35rem] font-black text-[#1f4f95] md:text-[1.55rem]">{row.qty}</span>
                  videos
                </span>
                <span className="font-bold text-[#111827]">{row.withActor}đ</span>
                <span className="font-bold text-[#111827]">{row.withoutActor}đ</span>
                <span className="text-[#4b5563]">{row.duration}</span>
                <span className="text-[#4b5563]">{row.completion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="relative overflow-hidden bg-[#08152f] py-24 text-white">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#18366a]/38 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0f2b57]/40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-black text-[#F8FAFC]">Báo Giá Trọn Gói</h2>
            <p className="text-sm text-white/55">
              Chọn gói dịch vụ phù hợp với mục tiêu và ngân sách của thương hiệu bạn
            </p>
          </div>

          <div className="grid items-start gap-5 md:grid-cols-2">
            {visibleBundles.map((bundle) => {
              const realIndex = bundles.findIndex((item) => item.name === bundle.name);
              const isOpen = openBundles.includes(realIndex);
              return (
                <div
                  key={bundle.name}
                  className={`rounded-2xl border p-4 md:p-5 transition-all ${
                    isOpen
                      ? "border-[#9b7de2] bg-[#1a0d14] shadow-[0_0_0_1px_rgba(0,214,255,0.45)]"
                      : "border-white/8 bg-[#1c1c1c]"
                  }`}
                >
                  <div className="mb-3 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                    <div className="min-w-0">
                      <h3 className="min-h-[4.5rem] text-xl font-semibold leading-tight text-[#F8FAFC] md:min-h-[5rem] md:text-[1.35rem]">
                        {bundle.name}
                      </h3>
                      <p className="mt-3 text-3xl font-black leading-none text-[#F2E3BA] md:text-[2.2rem]">{bundle.price}</p>
                    </div>
                    <div className="flex flex-row items-start gap-2 md:flex-col md:items-end">
                      {bundle.popular ? (
                        <span className="rounded-full bg-[#d4ae68] px-3 py-1 text-[11px] font-semibold text-[#08152f]">
                          ✦ Phổ biến nhất
                        </span>
                      ) : null}
                      <span className="rounded bg-white/8 px-3 py-1.5 text-xs font-medium text-white/75">{bundle.videos}</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setOpenBundles((prev) =>
                        isOpen ? prev.filter((item) => item !== realIndex) : [...prev, realIndex]
                      )
                    }
                    className="mb-4 inline-flex items-center gap-2 text-sm text-[#d4ae68]"
                  >
                    <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    {isOpen ? "Thu gọn" : "Xem chi tiết"}
                  </button>

                  {isOpen ? (
                    <div className="space-y-4 text-[13px] leading-6 text-white/70 md:text-sm">
                      <div>
                        <p className="mb-2 text-[15px] font-black italic leading-relaxed text-[#F2E3BA]">{bundle.headline}</p>
                        <p className="text-[15px] italic leading-relaxed text-white/78">{bundle.topics}</p>
                      </div>

                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d4ae68]">Nội dung</p>
                        <ul className="space-y-1.5">
                          {bundle.content?.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check size={14} className="mt-0.5 flex-shrink-0 text-[#d4ae68]" />
                              <span className="text-white/82">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-2 space-y-1.5 pl-5 text-white/62">
                          {bundle.contentBreakdown?.map((item) => (
                            <li key={item} className="list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d4ae68]">Chi tiết</p>
                        <ul className="space-y-1.5 pl-5 text-white/72">
                          {bundle.details?.map((item) => (
                            <li key={item} className="list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}

                  <Link
                    href="/contact"
                    className={`mt-4 block rounded-md px-4 py-3 text-center text-sm font-semibold transition-all ${
                      isOpen
                        ? "bg-[#d4ae68] text-[#08152f] hover:bg-[#c79f53]"
                        : "bg-white/10 text-white/85 hover:bg-white/15"
                    }`}
                  >
                    Nhận tư vấn
                  </Link>
                </div>
              );
            })}
          </div>

          {bundles.length > 4 ? (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAllBundles((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-[#d4ae68]/45 bg-[#d4ae68]/12 px-6 py-3 text-sm font-semibold text-[#F2E3BA] transition-all hover:bg-[#d4ae68]/18"
              >
                {showAllBundles ? "Thu gọn" : "Xem thêm"}
                <ChevronDown size={16} className={`transition-transform ${showAllBundles ? "rotate-180" : ""}`} />
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {/* Production Capability */}
      <section className="py-24 relative">
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
                Sẵn sàng bắt đầu?
              </h2>
              <p className="cta-description mx-auto mb-12 max-w-[980px] text-xl leading-relaxed text-[#6b7280] sm:text-[1.9rem] sm:leading-[1.45]">
                Liên hệ ngay để được tư vấn gói dịch vụ phù hợp nhất.
              </p>
              <div className="cta-actions mb-14 flex flex-wrap justify-center gap-5">
                <Link href="/contact" className="cta-primary-button inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-[#d4ae68] px-10 py-5 text-xl font-bold text-[#08152f] shadow-[0_12px_28px_rgba(212,174,104,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#c79f53]">
                  <span className="cta-primary-button-text">Nhận tư vấn</span>
                  <ChevronRight className="cta-primary-button-icon h-5 w-5" />
                </Link>
                <a href="tel:0523860068" className="cta-secondary-button inline-flex min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-[#d7dce5] bg-white px-10 py-5 text-xl font-bold text-[#08152f] transition-all hover:bg-[#f7f9fc]">
                  <Phone className="cta-secondary-button-icon h-5 w-5" />
                  <span className="cta-secondary-button-text">Gọi ngay</span>
                </a>
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
