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
        href="https://www.instagram.com/associacaoameaquarius?igsh=MXZ2OHdoNXZmNW16ZQ=="
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
        href="https://wa.me/5571991857238"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 rounded-full shadow-lg p-3 hover:bg-green-100 transition-colors duration-300"
        aria-label="WhatsApp"
      >
        {/* WhatsApp SVG custom fornecido pelo usuário */}
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#25D366"
          className="w-6 h-6"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-300.000000, -7599.000000)"
                fill="#25D366"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                    id="whatsapp-[#25D366]"
                  >
                    {" "}
                  </path>
                </g>
              </g>
            </g>
          </g>
        </svg>
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
                  href="/contact"
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
