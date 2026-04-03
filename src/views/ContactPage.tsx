// Contact Page
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, ChevronRight, Zap } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="light-page min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="page-hero-bg absolute inset-0" />
        <div className="absolute top-10 right-20 w-80 h-80 bg-pink-brand/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎬</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Liên Hệ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Kết nối ngay để bắt đầu xây dựng hệ thống nội dung chuyên nghiệp cho thương hiệu của bạn.
          </p>
        </div>
      </section>

      {/* Response Time */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
            <Clock size={18} />
            <span className="font-medium text-sm">Chúng tôi phản hồi trong vòng 24h làm việc</span>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-pink-brand/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-1">Số điện thoại</h3>
              <p className="text-gray-500 text-sm mb-6">Anh Nam</p>
              <div className="space-y-4">
                <a
                  href="tel:0523860068"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-pink-brand/30 hover:bg-pink-brand/5 transition-all group/link"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-pink-brand" />
                    <span className="text-white font-medium">0523 860 068</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover/link:text-pink-brand transition" />
                </a>
                <a
                  href="tel:0888430620"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-pink-brand/30 hover:bg-pink-brand/5 transition-all group/link"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-pink-brand" />
                    <span className="text-white font-medium">0888 430 620</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover/link:text-pink-brand transition" />
                </a>
              </div>
            </div>

            {/* Zalo */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-400/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-1">Zalo</h3>
              <p className="text-gray-500 text-sm mb-6">Anh Nam</p>
              <div className="space-y-4">
                <a
                  href="https://zalo.me/0523860068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-400/30 hover:bg-blue-500/5 transition-all group/link"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle size={18} className="text-blue-400" />
                    <span className="text-white font-medium">0523 860 068</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover/link:text-blue-400 transition" />
                </a>
                <a
                  href="https://zalo.me/0888430620"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-400/30 hover:bg-blue-500/5 transition-all group/link"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle size={18} className="text-blue-400" />
                    <span className="text-white font-medium">0888 430 620</span>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 group-hover/link:text-blue-400 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-pink-brand/10 border border-pink-brand/20 text-pink-brand text-sm font-medium mb-4">
              📍 Địa điểm
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">VĂN PHÒNG LÀM VIỆC</h2>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center text-white mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">SHORT PRO.</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  458/64 D. 3 Tháng 2, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                </p>
                <a
                  href="https://maps.google.com/?q=458/64+D.+3+Tháng+2,+Quận+10,+TP.HCM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-all hover:scale-105"
                >
                  Xem trên Google Maps
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.67!3d10.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzEyLjAiTiAxMDbCsDQwJzEyLjAiRQ!5e0!3m2!1svi!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SHORT PRO. Location"
                />
              </div>
            </div>
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
                Hãy liên hệ ngay để được tư vấn giải pháp TikTok phù hợp nhất.
              </p>
              <div className="cta-actions mb-14 flex flex-wrap justify-center gap-5">
                <a
                  href="https://zalo.me/0523860068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary-button inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-[#d4ae68] px-10 py-5 text-xl font-bold text-[#08152f] shadow-[0_12px_28px_rgba(212,174,104,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#c79f53]"
                >
                  <span className="cta-primary-button-text">Nhận tư vấn</span>
                  <ChevronRight className="cta-primary-button-icon h-5 w-5" />
                </a>
                <a
                  href="tel:0523860068"
                  className="cta-secondary-button inline-flex min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-[#d7dce5] bg-white px-10 py-5 text-xl font-bold text-[#08152f] transition-all hover:bg-[#f7f9fc]"
                >
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
