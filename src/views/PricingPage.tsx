"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Camera, Users, Sparkles, Phone, Zap, ChevronRight, Clock3, CalendarDays, Video, UserCheck, UserX, Lightbulb, FileText, MessageSquare, HelpCircle, Plus, X } from "lucide-react";

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
      { qty: "10", withActor: "8.000.000", withoutActor: "7.500.000", duration: "1 buổi (4h)", completion: "1 tuần" },
      { qty: "20", withActor: "12.000.000", withoutActor: "11.000.000", duration: "1 ngày (8h)", completion: "3 tuần" },
      { qty: "40", withActor: "23.000.000", withoutActor: "21.000.000", duration: "2 ngày", completion: "1,5 tháng" },
      { qty: "100", withActor: "50.000.000", withoutActor: "45.000.000", duration: "5 ngày", completion: "3 tháng" },
      { qty: "200", withActor: "95.000.000", withoutActor: "85.000.000", duration: "10 ngày", completion: "6 tháng" },
      { qty: "400", withActor: "180.000.000", withoutActor: "160.000.000", duration: "20 ngày", completion: "1 năm" },
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
      { qty: "10", withActor: "12.000.000", withoutActor: "11.000.000", duration: "4h", completion: "1 tuần" },
      { qty: "20", withActor: "18.000.000", withoutActor: "16.000.000", duration: "8h", completion: "3 tuần" },
      { qty: "40", withActor: "34.000.000", withoutActor: "30.000.000", duration: "2 ngày", completion: "1,5 tháng" },
      { qty: "100", withActor: "75.000.000", withoutActor: "65.000.000", duration: "5 ngày", completion: "3 tháng" },
      { qty: "200", withActor: "140.000.000", withoutActor: "85.000.000", duration: "10 ngày", completion: "6 tháng" },
      { qty: "400", withActor: "270.000.000", withoutActor: "160.000.000", duration: "20 ngày", completion: "1 năm" },
    ],
  },
} as const;

const bundles = [
  {
    name: "Gói Tăng Nhận Diện, Phủ Thương Hiệu",
    price: "30.000.000 ĐỒNG",
    videos: "50 Videos",
    popular: true,
    headline:
      "50 video chủ đề đa dạng, phục vụ cho việc tăng lượt tiếp cận khách hàng, phủ sóng thương hiệu.",
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
    videos: "50 Videos",
    headline:
      "50 video chủ đề đa dạng, phục vụ cho việc lựa chọn sản phẩm, thúc đẩy mua hàng",
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
    videos: "50 Videos",
    headline:
      "50 video chủ đề đa dạng, phục vụ cho việc tăng tần suất kết nối với khách hàng",
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
    videos: "50 Videos",
    headline:
      "50 video chủ đề đa dạng, phục vụ cho việc tìm hiểu thông tin của khách hàng",
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
    videos: "50 Videos",
    headline:
      "50 video chủ đề đa dạng, phục vụ cho việc tìm hiểu thông tin của khách hàng",
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
  {
    step: 1,
    title: "Onboarding",
    desc: "Nghiên cứu thương hiệu, ngành hàng, đối thủ. Xác định tone, phong cách, khách hàng mục tiêu.",
    icon: Lightbulb,
  },
  {
    step: 2,
    title: "Kịch bản & Storyboard",
    desc: "Viết kịch bản theo content framework. Duyệt storyboard trước khi quay.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Sản xuất",
    desc: "Quay tại studio hoặc location. Ekip 3 người cố định. Thiết bị Sony full setup.",
    icon: Camera,
  },
  {
    step: 4,
    title: "Feedback, Bàn giao & Tối ưu",
    desc: "Edit, thêm motion/âm thanh, phụ đề. Bàn giao file chuẩn TikTok / Facebook. Nhận feedback chỉnh sửa và báo cáo hiệu suất sau đăng.",
    icon: MessageSquare,
  },
];

const productionCapability = {
  equipmentTags: ["Sony A73", "Sony A74", "FX3", "Lens Cine", "Gimbal DJI"],
  equipmentImage:
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  studioImages: [
    "https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
    "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=900",
    "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=900",
  ],
  actorImages: [
    {
      label: "Lifestyle",
      src: "https://images.pexels.com/photos/5215008/pexels-photo-5215008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    },
    {
      label: "Doanh nhân",
      src: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    },
    {
      label: "Review",
      src: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    },
    {
      label: "Gen Z",
      src: "https://images.pexels.com/photos/5384427/pexels-photo-5384427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700",
    },
  ],
};

const faqs = [
  {
    q: "Thời gian hoàn thành một gói dịch vụ là bao lâu?",
    a: "Tùy theo số lượng video, thời gian dao động từ 1 tuần đến 12 tháng. Bạn có thể chọn gói phù hợp với tiến độ mong muốn.",
  },
  {
    q: "Tôi có được duyệt nội dung trước khi đăng không?",
    a: "Có. Chúng tôi gửi kịch bản, storyboard và bản dựng để bạn duyệt từng bước trước khi xuất bản.",
  },
  {
    q: "Diễn viên do ai cung cấp?",
    a: "Chúng tôi có sẵn pool diễn viên đa phong cách. Bạn cũng có thể dùng người đại diện thương hiệu nếu muốn.",
  },
  {
    q: "Có hỗ trợ thanh toán trả góp không?",
    a: "Chúng tôi hỗ trợ chia tiến độ thanh toán theo từng giai đoạn triển khai để doanh nghiệp chủ động ngân sách hơn.",
  },
];

export default function PricingPage() {
  const [activePlan, setActivePlan] = useState<PricingTab>("chuyen-nghiep");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openBundles, setOpenBundles] = useState<number[]>([0]);
  const [showAllBundles, setShowAllBundles] = useState(false);
  const currentPlan = pricingPlans[activePlan];
  const visibleBundles = showAllBundles ? bundles : bundles.slice(0, 4);
  const isPremiumPlan = activePlan === "cao-cap";

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
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-purple-dark md:text-6xl">
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
                      ? "bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_42%,#b8862b_100%)] text-purple-dark shadow-[0_10px_24px_rgba(201,161,99,0.26)]"
                      : "text-[#6b7280] hover:bg-[#f5f7fb] hover:text-purple-dark"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 border-b border-[#6b7280] pb-1 text-lg text-[#6b7280] transition-all hover:text-purple-dark hover:border-purple-dark">
              Xem báo giá trọn gói
              <ChevronRight size={18} />
            </Link>
          </div>

          <div
            className={`relative mb-6 rounded-[28px] px-5 pb-6 pt-9 shadow-[0_12px_28px_rgba(31,79,149,0.06)] md:px-8 md:pb-7 md:pt-10 ${
              isPremiumPlan
                ? "border border-[#d9bd79] bg-[#fff4dc]"
                : "border border-[#bfe2ef] bg-[#eaf8fd]"
            }`}
          >
            <div
              className={`absolute left-6 top-0 -translate-y-1/2 inline-flex rounded-full bg-white px-6 py-2 text-sm font-bold shadow-sm ${
                isPremiumPlan
                  ? "border border-pink-brand text-[#b8862b]"
                  : "border border-[#9bd7ea] text-[#1497b8]"
              }`}
            >
              {activePlan === "cao-cap" ? "Gói Cao Cấp" : "Gói Chuyên Nghiệp"}
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`rounded-2xl bg-white p-2 shadow-sm ${
                      isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"
                    }`}
                  >
                    <Camera size={18} />
                  </div>
                  <h2 className="text-[1.65rem] font-black text-[#111827]">
                    {activePlan === "cao-cap"
                      ? "Video cao cấp, hình ảnh đẹp, âm thanh rõ ràng"
                      : "Video sắc nét, bố cục chỉn chu, âm thanh rõ ràng"}
                  </h2>
                </div>

                <p className="mb-5 text-[0.95rem] leading-relaxed text-[#5b6778]">
                  {activePlan === "cao-cap"
                    ? "Phù hợp cho các kênh cần xây dựng hình ảnh cao cấp"
                    : "Phù hợp cho các kênh xây dựng hình ảnh chuyên nghiệp, uy tín"}
                </p>

                <p className="mb-2.5 text-[1rem] font-black text-[#111827]">{currentPlan.includesTitle}:</p>
                <ul className="space-y-2">
                  {currentPlan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4b5563]">
                      <span
                        className={`mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                          isPremiumPlan ? "bg-[#c3922e]" : "bg-[#1497b8]"
                        }`}
                      />
                      <span className="text-[0.92rem] leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2.5 text-[1rem] font-black text-[#111827]">{currentPlan.detailTitle} thiết bị:</p>
                <ul className="space-y-2">
                  {currentPlan.details.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4b5563]">
                      <span
                        className={`mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                          isPremiumPlan ? "bg-[#c3922e]" : "bg-[#1497b8]"
                        }`}
                      />
                      <span className="text-[0.92rem] leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:hidden">
            {currentPlan.rows.map((row) => (
              <div
                key={row.qty}
                className={`overflow-hidden rounded-[28px] bg-white shadow-[0_18px_42px_rgba(8,21,47,0.08)] ${
                  isPremiumPlan ? "border border-[#e7cf96]" : "border border-[#d7eaf1]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 px-5 pb-4 pt-5 sm:px-6">
                  <div className="min-w-0">
                    <p className="text-[2.1rem] font-black leading-none text-[#111827]">
                      {row.qty}
                      <span className="ml-2 text-[1rem] font-medium text-[#6b7280]">videos</span>
                    </p>
                  </div>
                  <span
                    className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
                      isPremiumPlan
                        ? "border-[#e7cf96] bg-[#fff8e8] text-[#c3922e]"
                        : "border-[#bfe2ef] bg-[#f0fbff] text-[#1497b8]"
                    }`}
                  >
                    {row.completion}
                  </span>
                </div>

                <div className={`border-t ${isPremiumPlan ? "border-[#f0dfb4]" : "border-[#d7eaf1]"}`}>
                  <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-6">
                    <div className="flex items-center gap-3 text-[#5a6270]">
                      <UserCheck size={22} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />
                      <span className="text-[1.05rem]">Có diễn viên</span>
                    </div>
                    <span className="text-right text-[1.05rem] font-black text-[#111827]">{row.withActor}đ</span>
                  </div>

                  <div className={`flex items-center justify-between gap-4 border-t px-5 py-5 sm:px-6 ${isPremiumPlan ? "border-[#f0dfb4]" : "border-[#d7eaf1]"}`}>
                    <div className="flex items-center gap-3 text-[#5a6270]">
                      <UserX size={22} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />
                      <span className="text-[1.05rem]">Không diễn viên</span>
                    </div>
                    <span className="text-right text-[1.05rem] font-black text-[#111827]">{row.withoutActor}đ</span>
                  </div>

                  <div className={`flex items-center justify-between gap-4 border-t px-5 py-5 sm:px-6 ${isPremiumPlan ? "border-[#f0dfb4]" : "border-[#d7eaf1]"}`}>
                    <div className="flex items-center gap-3 text-[#5a6270]">
                      <Clock3 size={22} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />
                      <span className="text-[1.05rem]">Thời gian quay</span>
                    </div>
                    <span className="text-right text-[1rem] text-[#111827]">{row.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`hidden overflow-hidden rounded-[28px] bg-white shadow-[0_18px_42px_rgba(8,21,47,0.08)] lg:block ${
              isPremiumPlan ? "border border-[#d9bd79]" : "border border-[#bfe2ef]"
            }`}
          >
            <div
              className={`grid grid-cols-5 px-5 py-4 text-sm font-bold text-[#1f2937] ${
                isPremiumPlan ? "bg-[#fff4dc]" : "bg-[#eaf8fd]"
              }`}
            >
              <span className="inline-flex items-center gap-2"><Video size={18} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />Số lượng Video</span>
              <span className="inline-flex items-center gap-2"><UserCheck size={18} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />Có diễn viên</span>
              <span className="inline-flex items-center gap-2"><UserX size={18} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />Không diễn viên</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={18} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />Thời gian quay</span>
              <span className="inline-flex items-center gap-2"><CalendarDays size={18} className={isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"} />Dự kiến hoàn thành</span>
            </div>

            {currentPlan.rows.map((row) => (
              <div
                key={row.qty}
                className={`grid grid-cols-5 px-5 py-5 text-sm ${
                  isPremiumPlan ? "border-t border-[#ead8aa]" : "border-t border-[#bfe2ef]"
                }`}
              >
                <span className="font-medium text-[#6b7280]">
                  <span className={`mr-1.5 text-[0.98rem] font-black ${isPremiumPlan ? "text-[#c3922e]" : "text-[#1497b8]"}`}>{row.qty}</span>
                  videos
                </span>
                <span className="text-[0.98rem] font-bold text-[#111827]">{row.withActor}đ</span>
                <span className="text-[0.98rem] font-bold text-[#111827]">{row.withoutActor}đ</span>
                <span className="text-[0.96rem] text-[#4b5563]">{row.duration}</span>
                <span className="text-[0.96rem] text-[#4b5563]">{row.completion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Packages */}
      <section className="relative overflow-hidden bg-purple-dark py-24 text-white">
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
                      <h3 className="min-h-18 text-xl font-semibold leading-tight text-[#F8FAFC] md:min-h-20 md:text-[1.35rem]">
                        {bundle.name}
                      </h3>
                      <p className="mt-3 text-3xl font-black leading-none text-[#F2E3BA] md:text-[2.2rem]">{bundle.price}</p>
                    </div>
                    <div className="flex flex-row items-start gap-2 md:flex-col md:items-end">
                      {bundle.popular ? (
                        <span className="rounded-full bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_42%,#b8862b_100%)] px-3 py-1 text-[11px] font-semibold text-purple-dark shadow-[0_6px_16px_rgba(201,161,99,0.2)]">
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
                    className="mb-4 inline-flex items-center gap-2 text-sm text-pink-brand hover:cursor-pointer"
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
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-pink-brand">Nội dung</p>
                        <ul className="space-y-1.5">
                          {bundle.content?.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check size={14} className="mt-0.5 shrink-0 text-pink-brand" />
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
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-pink-brand">Chi tiết</p>
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
                    className={`mt-4 block rounded-md px-4 py-3 text-center text-sm font-semibold transition-all hover:cursor-pointer ${
                      isOpen
                        ? "bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_42%,#b8862b_100%)] text-purple-dark hover:brightness-[1.03] hover:shadow-[0_12px_28px_rgba(201,161,99,0.28)]"
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
                className="inline-flex items-center gap-2 rounded-full border border-pink-brand/45 bg-pink-brand/12 px-6 py-3 text-sm font-semibold text-[#F2E3BA] transition-all hover:cursor-pointer hover:bg-pink-brand/18"
              >
                {showAllBundles ? "Thu gọn" : "Xem thêm"}
                <ChevronDown size={16} className={`transition-transform ${showAllBundles ? "rotate-180" : ""}`} />
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {/* Production Capability */}
      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_22%_82%,rgba(191,219,254,0.08),transparent_26%),linear-gradient(180deg,#ffffff_0%,#ffffff_48%,#ffffff_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-[#eff6ff] px-4 py-2 text-xs font-semibold text-[#335c99] shadow-[0_10px_25px_rgba(59,130,246,0.08)]">
              <Sparkles size={14} className="text-[#3b82f6]" />
              Năng lực sản xuất
            </span>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#111111] sm:text-[2.4rem] md:text-[3rem]">
              Nếu chưa chắc chắn, hãy xem chúng tôi{" "}
              <span className="gradient-text underline decoration-[3px] underline-offset-4">làm được gì.</span>
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
              Chất lượng không chỉ nằm ở con số. Nó nằm ở hệ thống sản xuất phía sau.
            </p>
          </div>

          <div className="mx-auto max-w-6xl space-y-10 md:space-y-14">
            <div className="grid items-center gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,540px)_minmax(0,520px)] lg:justify-center">
              <div className="w-full max-w-[540px]">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-medium text-[#2563eb]">
                  <Camera size={14} />
                  Thiết bị
                </span>
                <h3 className="mb-3 max-w-[520px] text-[1.9rem] font-black leading-tight text-[#111111]">
                  Một video tốt không chỉ bắt đầu từ kịch bản.
                </h3>
                <p className="mb-5 max-w-[540px] text-[0.98rem] leading-relaxed text-[#6b7280]">
                  Chúng tôi đầu tư vào thiết bị chuẩn production được dùng trong quảng cáo thương mại. Để mỗi frame nâng tầm thương hiệu của bạn.
                </p>
                <div className="flex max-w-[540px] flex-wrap gap-2">
                  {productionCapability.equipmentTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#dbeafe] px-3 py-1.5 text-xs font-medium text-[#2563eb]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative w-full max-w-[520px]">
                <div className="w-full overflow-hidden rounded-[26px] shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                  <img
                    src={productionCapability.equipmentImage}
                    alt="Thiết bị quay dựng chuyên nghiệp"
                    className="h-[220px] w-full object-cover sm:h-[290px]"
                  />
                </div>
                <div className="absolute -bottom-3 right-0 h-10 w-10 rounded-2xl bg-[#bfdbfe]" />
              </div>
            </div>

            <div className="grid items-center gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,540px)_minmax(0,520px)] lg:justify-center">
              <div className="w-full max-w-[540px]">
                <div className="grid w-full max-w-[520px] gap-4">
                  <div className="overflow-hidden rounded-[26px] shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
                    <img
                      src={productionCapability.studioImages[0]}
                      alt="Không gian studio chuyên nghiệp"
                      className="h-[240px] w-full object-cover sm:h-[310px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {productionCapability.studioImages.slice(1).map((src, index) => (
                      <div
                        key={src}
                        className="overflow-hidden rounded-[24px] shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                      >
                        <img
                          src={src}
                          alt={`Bối cảnh studio ${index + 1}`}
                          className="h-[120px] w-full object-cover sm:h-[150px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[540px]">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-medium text-[#335c99]">
                  <Sparkles size={14} />
                  Studio & Bối cảnh
                </span>
                <h3 className="mb-3 max-w-[520px] text-[1.9rem] font-black leading-tight text-[#111111]">
                  Không gian quay chuyên nghiệp, đồng bộ thương hiệu.
                </h3>
                <p className="max-w-[520px] text-[0.98rem] leading-relaxed text-[#6b7280]">
                  Studio được setup riêng theo từng concept. Clean, chuyên nghiệp, đồng bộ thương hiệu. Từ bối cảnh sản phẩm đến lifestyle, mọi thứ đều được kiểm soát chất lượng.
                </p>
              </div>
            </div>

            <div className="grid items-center gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,540px)_minmax(0,520px)] lg:justify-center">
              <div className="w-full max-w-[540px] self-center">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-3.5 py-1.5 text-xs font-medium text-[#2563eb]">
                  <Users size={14} />
                  Diễn viên
                </span>
                <h3 className="mb-3 max-w-[520px] text-[1.9rem] font-black leading-tight text-[#111111]">
                  Pool diễn viên đa phong cách, đa ngành hàng.
                </h3>
                <p className="max-w-[520px] text-[0.98rem] leading-relaxed text-[#6b7280]">
                  Không cần tự tìm, không phát sinh thêm chi phí. Chúng tôi có sẵn đội ngũ diễn viên chuyên nghiệp phù hợp với từng ngành hàng và phong cách nội dung của bạn.
                </p>
              </div>

              <div className="w-full max-w-[520px]">
                <div className="grid w-full max-w-[520px] grid-cols-2 gap-4">
                  {productionCapability.actorImages.map((actor) => (
                    <div key={actor.label} className="space-y-2">
                      <div className="overflow-hidden rounded-[24px] shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
                        <img
                          src={actor.src}
                          alt={actor.label}
                          className="h-[200px] w-full object-cover sm:h-[260px]"
                        />
                      </div>
                      <div className="flex justify-center">
                        <span className="rounded-full bg-[#f2f4f7] px-3 py-1 text-xs text-[#7a7f87]">
                          {actor.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_88%,rgba(191,219,254,0.55),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fbfdff_54%,#ffffff_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#cfdcf2] bg-[linear-gradient(90deg,#f4f8ff_0%,#eef5ff_100%)] px-4 py-1.5 text-xs font-semibold text-[#22304a] shadow-[0_10px_25px_rgba(148,163,184,0.12)]">
              <Zap size={12} className="text-[#0a1f44]" />
              Quy trình làm việc
            </span>
            <h2 className="mx-auto mb-3 max-w-3xl text-3xl font-black leading-[1.15] tracking-tight text-[#111111] sm:text-[2.6rem]">
              Bạn chỉ cần duyệt, còn lại
              <br />
              <span className="text-[#c9a163] underline decoration-[3px] underline-offset-4">
                là việc của chúng tôi
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#6b7280]">
              Hệ thống sản xuất rõ ràng - Không phát sinh - Không rối quy trình
            </p>
          </div>

          <div className="mx-auto hidden max-w-4xl md:block">
            <div className="relative grid grid-cols-4 gap-5 items-center">
              <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-[2px] -translate-y-1/2 bg-[linear-gradient(90deg,#20467c_0%,#16345f_62%,#c9a163_100%)]" />
              {workflow.map((item) => (
                <div key={item.step} className="relative z-10 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#254c84_0%,#0a1f44_82%,#c9a163_100%)] text-xl font-bold text-[#c9a163] shadow-[0_10px_24px_rgba(10,31,68,0.18)]">
                    {item.step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-7 grid max-w-4xl grid-cols-1 gap-5 md:mt-8 md:grid-cols-4">
            {workflow.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-[24px] border border-[#e8eef7] bg-white px-5 py-6 text-center shadow-[0_14px_30px_rgba(148,163,184,0.12)]"
                >
                  <div className="mb-4 flex justify-center md:hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#254c84_0%,#0a1f44_82%,#c9a163_100%)] text-base font-bold text-[#c9a163] shadow-[0_10px_24px_rgba(10,31,68,0.16)]">
                      {item.step}
                    </div>
                  </div>
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,#eef4ff_0%,#f7faff_100%)] text-[#0a1f44]">
                    <Icon size={16} />
                  </div>
                  <h3 className="mb-3 text-lg font-black leading-tight text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b7280]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_14%,rgba(59,130,246,0.1),transparent_18%),radial-gradient(circle_at_12%_88%,rgba(191,219,254,0.5),transparent_26%),linear-gradient(180deg,#ffffff_0%,#fafcff_52%,#ffffff_100%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-[#eff6ff] px-4 py-1.5 text-xs font-semibold text-[#2563eb] shadow-[0_10px_24px_rgba(59,130,246,0.1)]">
              <HelpCircle size={14} />
              FAQ
            </span>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[#111111] sm:text-[2.4rem]">
              Câu hỏi thường gặp
            </h2>
            <div className="mx-auto h-[3px] w-16 rounded-full bg-[linear-gradient(90deg,#2563eb_0%,#38bdf8_100%)]" />
          </div>

          <div className="mx-auto max-w-5xl space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-[24px] border bg-white transition-all ${
                    isOpen
                      ? "border-[#bfdbfe] shadow-[0_14px_28px_rgba(59,130,246,0.12),0_24px_48px_rgba(59,130,246,0.08)]"
                      : "border-white shadow-[0_12px_30px_rgba(148,163,184,0.08)]"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-6 text-left hover:cursor-pointer sm:px-7"
                  >
                    <div className="pr-4">
                      <span className="block text-base font-semibold leading-relaxed text-[#111111]">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <span className="mt-3 block text-sm leading-relaxed text-[#6b7280]">
                          {faq.a}
                        </span>
                      ) : null}
                    </div>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? "bg-[#dbeafe] text-[#2563eb]" : "bg-[#eff6ff] text-[#2563eb]"
                      }`}
                    >
                      {isOpen ? <X size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </div>
              );
            })}
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
              <h2 className="cta-title mx-auto mb-6 max-w-3xl text-3xl font-black leading-[1.08] text-purple-dark sm:text-4xl lg:text-5xl">
                Sẵn sàng bắt đầu?
              </h2>
              <p className="cta-description mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#6b7280] sm:text-xl sm:leading-normal">
                Liên hệ ngay để được tư vấn gói dịch vụ phù hợp nhất.
              </p>
              <div className="cta-actions mb-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="cta-primary-button inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_42%,#b8862b_100%)] px-8 py-4 text-lg font-bold text-purple-dark shadow-[0_12px_28px_rgba(201,161,99,0.26)] transition-all hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(201,161,99,0.32)] hover:brightness-[1.03]">
                  <span className="cta-primary-button-text">Nhận tư vấn</span>
                  <ChevronRight className="cta-primary-button-icon h-5 w-5" />
                </Link>
                <a href="tel:0906914696" className="cta-secondary-button inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-[#d7dce5] bg-white px-8 py-4 text-lg font-bold text-purple-dark transition-all hover:cursor-pointer hover:bg-[#f7f9fc]">
                  <Phone className="cta-secondary-button-icon h-5 w-5" />
                  <span className="cta-secondary-button-text">Gọi ngay</span>
                </a>
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
    </div>
  );
}
