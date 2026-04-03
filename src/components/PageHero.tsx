import { ReactNode } from "react";

interface PageHeroProps {
  title?: string;
  highlightText: string;
  description: string;
  badge?: string;
  emoji?: string;
  children?: ReactNode;
}

export default function PageHero({
  title,
  highlightText,
  description,
  badge,
  emoji,
  children,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="page-hero-bg absolute inset-0" />
      <div className="absolute top-10 left-20 w-72 h-72 bg-pink-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-brand/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-4 py-2 rounded-full bg-pink-brand/10 border border-pink-brand/20 text-pink-brand text-sm font-medium mb-6">
            {badge}
          </span>
        )}
        {emoji && <div className="text-6xl mb-6">{emoji}</div>}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
          {title && <>{title} </>}
          <span className="gradient-text">{highlightText}</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
