"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ExternalLink,
  Minus,
  Plus,
} from "lucide-react";

const serviceLinks = [
  { label: "Chiến lược & Quản lý chiến dịch", href: "/pricing" },
  { label: "Sản xuất video quảng cáo & viral", href: "/portfolio" },
  { label: "Tổ chức Livestream", href: "/livestream" },
  { label: "Booking KOL/KOC & Influencer Review", href: "/contact" },
];

const livestreamPosterVideo =
  "https://res.cloudinary.com/djpujlimr/video/upload/v1775569232/ny9whcrrmikrshd9uwjb.mp4";

const livestreamSteps = [
  {
    step: "BƯỚC 01",
    title: "Khách hàng gửi thông tin sản phẩm & thương hiệu",
    desc: "Khách hàng cung cấp thông tin về sản phẩm, thương hiệu, mục tiêu chiến dịch và ngân sách dự kiến. Team sẽ phân tích insight thương hiệu và đề xuất KOL/KOC phù hợp với tệp khách hàng mục tiêu.",
  },
  {
    step: "BƯỚC 02",
    title: "Team Short Pro gửi báo giá & tư vấn booking",
    desc: "Short Pro tư vấn chiến lược livestream, lựa chọn gương mặt phù hợp, định hướng nội dung và gửi báo giá chi tiết. Khách hàng được hỗ trợ lựa chọn giờ booking, khung giờ và nền tảng livestream tối ưu nhất.",
  },
  {
    step: "BƯỚC 03",
    title: "Khách hàng chốt booking & gửi danh sách sản phẩm",
    desc: "Khách hàng xác nhận KOL/KOC, gửi thông tin sản phẩm, ưu đãi, key message và các guideline cần bám sát trong buổi livestream.",
  },
  {
    step: "BƯỚC 04",
    title: "Ký hợp đồng & thanh toán",
    desc: "Hai bên ký hợp đồng chính thức. Khách hàng thanh toán theo tiến độ để team tiến hành khâu chuẩn bị, setup kịch bản và vận hành sản xuất.",
  },
  {
    step: "BƯỚC 05",
    title: "Tổ chức & giám sát phiên livestream độc quyền",
    desc: "Short Pro trực tiếp tổ chức, giám sát toàn bộ phiên live độc quyền của thương hiệu từ setup ánh sáng, âm thanh, kỹ thuật đến quản lý timeline và tương tác trực tiếp. Đồng thời kết nối với các phiên add-in để tối ưu lượt tiếp cận và doanh số.",
  },
];

const faqs = [
  {
    q: "Short Pro hỗ trợ những nền tảng livestream nào?",
    a: "Facebook, TikTok, Shopee Live, YouTube và các kênh thương mại điện tử khác.",
  },
  {
    q: "Tôi có thể chọn KOL/KOC cho buổi livestream không?",
    a: "Có. Chúng tôi đề xuất shortlist phù hợp để bạn duyệt trước khi chốt booking.",
  },
  {
    q: "Short Pro có hỗ trợ sản xuất trọn gói không?",
    a: "Có. Team hỗ trợ từ chiến lược, booking, setup kỹ thuật đến vận hành và báo cáo sau live.",
  },
  {
    q: "Livestream độc quyền nghĩa là gì?",
    a: "Là phiên live được thiết kế riêng theo thương hiệu, có ekip quản lý xuyên suốt và không bị trùng format đại trà.",
  },
  {
    q: "Phiên add-in là gì?",
    a: "Là các phiên live bổ sung trên nhiều kênh hoặc nhiều host để tăng độ phủ và hỗ trợ chuyển đổi.",
  },
  {
    q: "Chi phí dịch vụ được tính như thế nào?",
    a: "Chi phí phụ thuộc vào quy mô chiến dịch, thời lượng live, nhân sự, nền tảng và yêu cầu kỹ thuật đi kèm.",
  },
];

export default function LivestreamPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="light-page min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#edf4ff_0%,#d9e6f8_42%,#18345f_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl">Tổ chức Livestream</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/85">
            <Link href="/" className="hover:underline">Trang chủ</Link>
            <ChevronRight size={14} />
            <span>Service</span>
            <ChevronRight size={14} />
            <span>Tổ chức Livestream</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[336px_minmax(0,1fr)] lg:px-8">
          <aside className="space-y-6">
            <div className="rounded-[28px] bg-[#d7dde6] px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <div className="mb-5 flex items-center gap-3 text-[1.55rem] font-semibold text-[#111111]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff3b30]" />
                Dịch Vụ
              </div>
              <div className="space-y-3">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-[18px] bg-[#d8be8a] px-4 py-3 text-[0.98rem] font-medium text-[#0a1f44] transition-all hover:cursor-pointer hover:bg-[#ceb075]"
                  >
                    <span className="max-w-[232px] leading-7 text-[#0a1f44]">{item.label}</span>
                    <ExternalLink size={18} className="text-[#0a1f44]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-[#d7dde6] px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <a
                href="/contact"
                className="block transition-transform hover:cursor-pointer hover:scale-[1.01]"
              >
                <div className="relative mx-auto max-w-[306px] overflow-hidden rounded-[16px] bg-[#e8edf4]">
                  <video
                    src={livestreamPosterVideo}
                    muted
                    playsInline
                    preload="metadata"
                    className="h-auto w-full object-cover"
                    onLoadedMetadata={(event) => {
                      event.currentTarget.pause();
                      event.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.08))]" />
                </div>
              </a>
            </div>
          </aside>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
              <img
                src="https://jeeagency.vn/wp-content/uploads/2025/11/2-1-scaled.png"
                alt="Tổ chức livestream"
                className="h-[260px] w-full object-cover sm:h-[390px]"
              />
            </div>

            <div className="rounded-[28px] bg-[#0a1f44] p-5 shadow-[0_20px_44px_rgba(10,31,68,0.18)] sm:p-6">
              <div className="grid gap-5 md:grid-cols-2">
                {livestreamSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[24px] border border-[#c9a163]/28 bg-[#102a5c] p-6 text-white"
                  >
                    <span className="mb-5 inline-flex rounded-md bg-[#c9a163] px-3 py-1 text-xs font-bold text-[#0a1f44]">
                      {item.step}
                    </span>
                    <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#f0cf86]">{item.title}</h3>
                    <p className="text-sm leading-7 text-white/88">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h2 className="mb-8 text-4xl font-semibold tracking-tight text-[#111111]">Câu hỏi thường gặp</h2>
              <div className="space-y-1">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={faq.q} className="border-b border-[#d7dbe2]">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className={`flex w-full items-center justify-between py-4 text-left transition-colors hover:cursor-pointer ${
                          isOpen ? "text-[#0a1f44]" : "text-[#111111]"
                        }`}
                      >
                        <span className="pr-4 text-[1.05rem] font-semibold">{faq.q}</span>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </button>
                      {isOpen ? (
                        <div className="pb-4 text-[0.95rem] leading-7 text-[#6b7280]">
                          {faq.a}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
