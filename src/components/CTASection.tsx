import Link from "next/link";
import { Phone, Zap, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface CTAButton {
  text: string;
  href: string;
  isExternal?: boolean;
  icon?: ReactNode;
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton?: CTAButton;
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_68%,rgba(212,174,104,0.12),transparent_24%),radial-gradient(circle_at_84%_34%,rgba(212,174,104,0.14),transparent_24%)]" />
          <div className="relative z-10">
            <div className="mb-7 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A163]/35 bg-[#C9A163]/10 px-7 py-3 text-lg font-semibold text-[#C9A163]">
                <Zap className="h-4 w-4" />
                Bắt đầu ngay
              </span>
            </div>
            <h2 className="mx-auto mb-8 max-w-4xl text-4xl font-black leading-[1.08] text-[#08152f] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mb-12 max-w-[980px] text-xl leading-relaxed text-[#6b7280] sm:text-[1.9rem] sm:leading-[1.45]">
              {description}
            </p>
            <div className="mb-14 flex flex-wrap justify-center gap-5">
              {primaryButton.isExternal ? (
                <a
                  href={primaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-[#d4ae68] px-10 py-5 text-xl font-bold text-[#08152f] shadow-[0_12px_28px_rgba(212,174,104,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#c79f53]"
                >
                  {primaryButton.text}
                  {primaryButton.icon ?? <ChevronRight className="h-5 w-5" />}
                </a>
              ) : (
                <Link
                  href={primaryButton.href}
                  className="inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-[#d4ae68] px-10 py-5 text-xl font-bold text-[#08152f] shadow-[0_12px_28px_rgba(212,174,104,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#c79f53]"
                >
                  {primaryButton.text}
                  {primaryButton.icon ?? <ChevronRight className="h-5 w-5" />}
                </Link>
              )}
              {secondaryButton &&
                (secondaryButton.isExternal ? (
                  <a
                    href={secondaryButton.href}
                    className="inline-flex min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-[#d7dce5] bg-white px-10 py-5 text-xl font-bold text-[#08152f] transition-all hover:bg-[#f7f9fc]"
                  >
                    {secondaryButton.icon}
                    {secondaryButton.text}
                  </a>
                ) : (
                  <Link
                    href={secondaryButton.href}
                    className="inline-flex min-w-[200px] items-center justify-center gap-3 rounded-2xl border border-[#d7dce5] bg-white px-10 py-5 text-xl font-bold text-[#08152f] transition-all hover:bg-[#f7f9fc]"
                  >
                    {secondaryButton.icon}
                    {secondaryButton.text}
                  </Link>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5 text-[#6b7280]">
              <div className="inline-flex items-center gap-3 text-[1.1rem]">
                <Phone className="h-6 w-6" />
                <span>0523 860 068</span>
              </div>
              <div className="inline-flex items-center gap-3 text-[1.1rem]">
                <Phone className="h-6 w-6" />
                <span>0888 430 620</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
