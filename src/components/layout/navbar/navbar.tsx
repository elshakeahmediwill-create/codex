"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "../../../context/LanguageContext";

import {
  ShoppingCart,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Pill,
  Languages,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const { lang, toggleLanguage, t } = useLanguage();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    {
      name: t.home,
      path: "/",
    },

    {
      name: t.categories,
      path: "/categories",
    },

    {
      name: t.services,
      path: "/services",
    },

    {
      name: t.video,
      path: "/video",
    },

    {
      name: t.brands,
      path: "/brands",
    },

    {
      name: t.aboutUs,
      path: "/about",
    },

    {
      name: t.contactUs,
      path: "/contact",
    },
  ];

  return (
    <header className="w-full border-b bg-[#eef6ff]">
      <nav className="border-b bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2">
          {/* LOGO */}

          <Link href="/" className="flex shrink-0 items-center gap-2">
            <div className="rounded-full bg-[#14b8a6]/10 p-2">
              <Pill className="text-[#14b8a6]" size={20} />
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl font-bold">
                <span className="text-[#14b8a6]">Pharma</span>

                <span className="text-[#115e59]">Care</span>
              </h1>

              <p className="text-[11px] text-gray-500">{t.trustedPharmacy}</p>
            </div>
          </Link>

          {/* SEARCH */}

          <div className="hidden md:flex flex-1 max-w-[420px] items-center rounded-full border border-gray-200 px-3 py-1">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent px-3 py-1 text-sm text-gray-700 outline-none"
            />

            <button className="flex h-9 w-9 items-center justify-center rounded-full transition">
              <Search
                size={18}
                className="text-[#14b8a6] hover:text-[#0f9b8e]"
              />
            </button>
          </div>

          {/* DESKTOP LINKS */}

          <div className="hidden lg:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <div key={link.path} className="group relative">
                <Link
                  href={link.path}
                  className={`flex items-center gap-1 text-[13px] transition ${
                    pathname === link.path
                      ? "font-semibold text-[#14b8a6]"
                      : "text-gray-700 hover:text-[#14b8a6]"
                  }`}
                >
                  {link.name}

                  {link.name === t.services && <ChevronDown size={16} />}
                </Link>

                {/* SERVICES DROPDOWN ONLY */}

                {link.name === t.services && (
                  <div className="invisible absolute left-0 top-8 z-50 min-w-[190px] rounded-xl border bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <Link
                      href="/services/consultation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6]"
                    >
                      {t.option1}
                    </Link>

                    <Link
                      href="/services/delivery"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6]"
                    >
                      {t.option2}
                    </Link>

                    <Link
                      href="/services/support"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14b8a6]/10 hover:text-[#14b8a6]"
                    >
                      {t.option3}
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}

          <div className="flex shrink-0 items-center gap-3">
            {/* LANGUAGE */}

            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-1.5 rounded-full border border-gray-200 px-2.5 py-1.5 text-xs text-gray-700 transition hover:bg-gray-50"
            >
              <Languages size={15} className="text-[#14b8a6]" />

              {lang.toUpperCase()}
            </button>

            {/* DARK MODE */}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full border border-gray-200 p-1.5 transition hover:bg-gray-100"
            >
              {darkMode ? (
                <Sun size={16} className="text-[#14b8a6]" />
              ) : (
                <Moon size={16} className="text-[#14b8a6]" />
              )}
            </button>

            {/* CART */}

            <button className="relative">
              <ShoppingCart size={22} className="text-[#14b8a6]" />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#14b8a6] text-[10px] text-white">
                2
              </span>
            </button>

            {/* SIGN IN */}

            <Link
              href="/signup"
              className="hidden rounded-full bg-[#14b8a6] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0f9b8e] md:flex"
            >
              {t.signIn}
            </Link>

            {/* MOBILE MENU */}

            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={24} className="text-[#14b8a6]" />
              ) : (
                <Menu size={24} className="text-[#14b8a6]" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}

        {mobileOpen && (
          <div className="space-y-5 border-t bg-white px-4 py-5 lg:hidden">
            {/* MOBILE SEARCH */}

            <div className="flex items-center rounded-full border border-gray-200 px-3 py-1">
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full px-3 py-2 text-sm text-gray-700 outline-none"
              />

              <button className="flex h-9 w-9 items-center justify-center">
                <Search size={18} className="text-[#14b8a6]" />
              </button>
            </div>

            {/* MOBILE LINKS */}

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-[15px] ${
                    pathname === link.path
                      ? "font-semibold text-[#14b8a6]"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTONS */}

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700"
              >
                <Languages size={16} className="text-[#14b8a6]" />

                {lang.toUpperCase()}
              </button>

              <Link
                href="/signin"
                className="w-full rounded-full bg-[#14b8a6] py-2 text-center text-sm font-semibold text-white"
              >
                {t.signIn}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
