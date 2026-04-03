"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

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
          ? "bg-purple-deeper/70 backdrop-blur-xl shadow-lg shadow-pink-brand/5 border-b border-white/5"
          : "bg-transparent border-b border-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div onClick={closeMobileMenu}>
            <BrandLogo />
          </div>

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
                      ? scrolled
                        ? "text-pink-brand bg-pink-brand/10"
                        : "text-purple-dark bg-black/5"
                      : scrolled
                        ? "text-gray-300 hover:text-white hover:bg-white/5"
                        : "text-purple-dark hover:text-black hover:bg-black/5"
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
              className={`hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
                scrolled
                  ? "gradient-bg text-white hover:opacity-90 animate-pulse-glow"
                  : "border border-black text-purple-dark hover:bg-black/5"
              }`}
            >
              Nhận tư vấn
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-purple-dark hover:bg-black/5"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-purple-deeper/70 backdrop-blur-xl border-t border-white/5 animate-fade-in-up">
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
