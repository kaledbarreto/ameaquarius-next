"use client";

import Logo from "../assets/images/logo.png";
import { cn } from "@/lib/utils";
import {
  Instagram,
  MessageCircle as LucideWhatsapp,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/OurHistory" },
  { name: "Notícias", href: "/news" },
  { name: "Eventos", href: "/events" },
  { name: "Cursos", href: "/courses" },
  { name: "Documentos", href: "/documents" },
  { name: "Contato", href: "/contact" },
];

function FloatingSocial() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-50">
      <a
        href="https://instagram.com/ameaquarius"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 rounded-full shadow-lg p-3 hover:bg-[#ffe5f1] transition-colors duration-300"
      >
        {/* Instagram gradient: #F58529, #DD2A7B, #8134AF, #515BD4 */}
        <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
          <defs>
            <linearGradient id="instagram-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F58529" />
              <stop offset="50%" stopColor="#DD2A7B" />
              <stop offset="75%" stopColor="#8134AF" />
              <stop offset="100%" stopColor="#515BD4" />
            </linearGradient>
          </defs>
          <Instagram
            className="w-6 h-6"
            style={{ fill: "url(#instagram-gradient)" }}
          />
        </svg>
      </a>
      <a
        href="https://wa.me/5581999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 rounded-full shadow-lg p-3 hover:bg-green-100 transition-colors duration-300"
      >
        <LucideWhatsapp className="text-green-500 w-6 h-6" />
      </a>
    </div>
  );
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "shadow-none fixed top-0 left-0 w-full z-50 h-20 p-4 md:py-4 backdrop-blur-lg drop-shadow-2xl transition-all duration-500",
          scrolled ? "bg-gray-100/100 opacity-100" : "bg-gray-100/40"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex-1 md:flex-none relative">
              <Link
                href={"/"}
                className="w-full flex flex-col items-center justify-center"
              >
                <img
                  src={typeof Logo === "string" ? Logo : Logo.src}
                  alt="Logo Ameaquarius"
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              {/* Menu hamburguer sempre visível no mobile */}
              <button
                className="flex items-center justify-center rounded focus:outline-none absolute right-0 top-1/2 -translate-y-1/2 md:hidden"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="w-8 h-8 text-gray-800" />
              </button>

              {/* Navegação desktop, oculta no mobile */}
              <div className="hidden md:flex items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 rounded-md text-lg font-bold transition-colors flex flex-col items-center",
                      pathname === item.href ? "text-gray-800" : "text-gray-800"
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "block h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300",
                        pathname === item.href
                          ? "w-full opacity-100"
                          : "w-0 opacity-0"
                      )}
                    />
                  </Link>
                ))}
                <Link
                  href="/associe-se"
                  className="ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-gray-100 font-bold shadow-lg transition-all duration-300 relative z-10"
                  style={{
                    background: "linear-gradient(to right, #06b6d4, #2563eb)",
                    opacity: 1,
                  }}
                >
                  Associe-se
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-100 z-[999] flex flex-col items-center justify-center transition-all duration-500">
          <button
            className="absolute top-4 right-4 p-2 rounded text-gray-800 text-3xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="w-8 h-8 text-gray-800" />
          </button>
          <div className="w-full flex flex-col items-center justify-center p-4 shadow-lg bg-white">
            <img
              src={typeof Logo === "string" ? Logo : Logo.src}
              alt="Logo Ameaquarius"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex-1 p-8 w-full flex flex-col items-center justify-center bg-neutral-200">
            <nav className="flex flex-col h-full items-center justify-between w-full text-2xl font-bold">
              <div className="flex flex-col items-center gap-4 w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "rounded transition-colors w-full text-center",
                      pathname === item.href
                        ? "text-blue-700"
                        : "text-gray-800 hover:text-blue-700"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/associe-se"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg text-2xl mt-8 w-full text-center"
                style={{
                  background: "linear-gradient(to right, #06b6d4, #2563eb)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Associe-se
              </Link>
            </nav>
          </div>
        </div>
      )}
      <FloatingSocial />
    </>
  );
}
