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
        <div className="relative overflow-hidden rounded-[40px] px-5 py-12 text-center sm:px-8 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_68%,rgba(212,174,104,0.12),transparent_24%),radial-gradient(circle_at_84%_34%,rgba(212,174,104,0.14),transparent_24%)]" />
          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A163]/35 bg-[#C9A163]/10 px-5 py-2.5 text-base font-semibold text-[#C9A163]">
                <Zap className="h-4 w-4" />
                Bắt đầu ngay
              </span>
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-black leading-[1.08] text-purple-dark sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#6b7280] sm:text-xl sm:leading-normal">
              {description}
            </p>
            <div className="mb-10 flex flex-wrap justify-center gap-4">
              {primaryButton.isExternal ? (
                <a
                  href={primaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_42%,#b8862b_100%)] px-8 py-4 text-lg font-bold text-purple-dark shadow-[0_12px_28px_rgba(201,161,99,0.26)] transition-all hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(201,161,99,0.32)] hover:brightness-[1.03]"
                >
                  {primaryButton.text}
                  {primaryButton.icon ?? <ChevronRight className="h-5 w-5" />}
                </a>
              ) : (
                <Link
                  href={primaryButton.href}
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_42%,#b8862b_100%)] px-8 py-4 text-lg font-bold text-purple-dark shadow-[0_12px_28px_rgba(201,161,99,0.26)] transition-all hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(201,161,99,0.32)] hover:brightness-[1.03]"
                >
                  {primaryButton.text}
                  {primaryButton.icon ?? <ChevronRight className="h-5 w-5" />}
                </Link>
              )}
              {secondaryButton &&
                (secondaryButton.isExternal ? (
                  <a
                    href={secondaryButton.href}
                    className="inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-[#d7dce5] bg-white px-8 py-4 text-lg font-bold text-[#08152f] transition-all hover:cursor-pointer hover:bg-[#f7f9fc]"
                  >
                    {secondaryButton.icon}
                    {secondaryButton.text}
                  </a>
                ) : (
                  <Link
                    href={secondaryButton.href}
                    className="inline-flex min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-[#d7dce5] bg-white px-8 py-4 text-lg font-bold text-[#08152f] transition-all hover:cursor-pointer hover:bg-[#f7f9fc]"
                  >
                    {secondaryButton.icon}
                    {secondaryButton.text}
                  </Link>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[#6b7280]">
              <div className="inline-flex items-center gap-3 text-base sm:text-lg">
                <Phone className="h-5 w-5" />
                <span>0906 914 696</span>
              </div>
              <div className="inline-flex items-center gap-3 text-base sm:text-lg">
                <Phone className="h-5 w-5" />
                <span>0935 357 656</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
