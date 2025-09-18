import React from "react";
import { ChevronDown, Users, Home, Award } from "lucide-react";
import HeroBackground from "../assets/images/bg.png";

export default function Hero() {
  return (
    <section className="hero relative h-[100vh] md:h-[90vh] min-h-[700px] overflow-hidden">
      {/* Background com overlay gradiente */}
      <div className="absolute inset-0 w-full h-full">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={HeroBackground.src}
            alt="Fundo AMEAQUARIUS"
            className="w-full h-full object-cover"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
        </div>
        {/* Simulando a imagem de fundo com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002753]/25 via-[#16406a]/25 to-[#22577a]/25"></div>
        {/* Overlay para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Elementos decorativos mobile first */}
        <div className="absolute top-8 left-4 w-20 h-20 bg-white/5 rounded-full blur-xl md:top-20 md:left-10 md:w-32 md:h-32"></div>
        <div className="absolute bottom-16 right-4 w-28 h-28 bg-blue-300/10 rounded-full blur-2xl md:bottom-32 md:right-16 md:w-48 md:h-48"></div>
      </div>

      {/* Conteúdo principal mobile first */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:p-12 h-full flex items-start">
        <div className="max-w-2xl md:max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-extra-tight mt-78 md:mt-40">
            Bem-vindo ao <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase">
              Bairro Aquarius
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-base md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-xl md:max-w-3xl mx-auto">
            Somos mais de <strong>20 condomínios associados</strong>.
            <br />
            Somos a casa do seu condomínio.
          </p>

          {/* Estatísticas rápidas */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
            <div className="flex w-full justify-center md:justify-start gap-4 md:gap-4">
              {/* Condomínios */}
              <div className="flex flex-col items-center text-white/80 flex-1">
                <Home className="w-5 h-5 text-cyan-300 mb-1" />
                <span className="text-2xl font-bold text-white">20+</span>
                <span className="text-sm">Condomínios</span>
              </div>
              {/* Famílias */}
              <div className="flex flex-col items-center text-white/80 flex-1">
                <Users className="w-5 h-5 text-cyan-300 mb-1" />
                <span className="text-2xl font-bold text-white">5000+</span>
                <span className="text-sm">Famílias</span>
              </div>
              {/* Anos */}
              <div className="flex flex-col items-center text-white/80 flex-1">
                <Award className="w-5 h-5 text-cyan-300 mb-1" />
                <span className="text-2xl font-bold text-white">15</span>
                <span className="text-sm">Anos</span>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
            <button className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                Associe-se Agora
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-16 md:bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
          <span className="text-sm font-medium">Role para baixo</span>
          <div className="animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Curva decorativa */}
      {/* Curva decorativa mobile */}
      <div className="flex md:hidden absolute bottom-0 left-0 w-full h-8 overflow-hidden">
        <svg
          viewBox="0 0 375 32"
          preserveAspectRatio="none"
          className="w-full h-full fill-white"
        >
          <path d="M0,32 Q94,0 188,16 Q282,32 375,8 L375,32 L0,32 Z" />
        </svg>
      </div>
      {/* Curva decorativa desktop */}
      <div className="hidden md:flex absolute bottom-0 left-0 w-full h-12 md:h-20 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-white"
        >
          <path d="M0,120 C150,60 350,0 600,40 C850,80 1050,120 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
