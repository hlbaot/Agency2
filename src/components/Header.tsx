"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Dịch vụ", href: "/#services" },
  { label: "Báo giá", href: "/pricing" },
  { label: "Dự án", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-purple-deeper/90 backdrop-blur-xl shadow-lg shadow-pink-brand/5 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
              C
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">
              CNA <span className="text-pink-brand">Entertainment</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/#services" && pathname === "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-pink-brand bg-pink-brand/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="hidden sm:inline-flex gradient-bg text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all hover:scale-105 animate-pulse-glow"
            >
              Nhận tư vấn
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-purple-deeper/95 backdrop-blur-xl border-t border-white/5 animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block text-center gradient-bg text-white px-5 py-3 rounded-full font-semibold mt-3"
            >
              Nhận tư vấn
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
