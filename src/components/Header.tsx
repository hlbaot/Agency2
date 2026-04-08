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
  { label: "About", href: "/blog" },
  { label: "Livestream", href: "/livestream" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#10264d]/96 backdrop-blur-xl transition-all duration-300"
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                      ? "text-[#F2E3BA] bg-white/10"
                      : "text-[#F2E3BA] hover:text-[#fff2c8] hover:bg-white/10"
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
              className="hidden sm:inline-flex rounded-full bg-[linear-gradient(135deg,#f6e2a9_0%,#d9a84c_38%,#b8862b_100%)] px-5 py-2.5 text-sm font-semibold text-[#10264d] shadow-[0_10px_24px_rgba(201,161,99,0.32)] transition-all hover:scale-105 hover:brightness-105"
            >
              Nhận tư vấn
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-[#F2E3BA] transition hover:bg-white/10 md:hidden"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="animate-fade-in-up border-t border-white/10 bg-[#10264d]/98 backdrop-blur-xl md:hidden">
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
