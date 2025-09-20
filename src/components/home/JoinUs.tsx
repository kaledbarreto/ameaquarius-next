"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Heart,
  Handshake,
  ArrowRight,
} from "lucide-react";
import Logo from "../../assets/images/logo.png";
import CarouselImage01 from "../../assets/images/home/carousel_01.png";
import CarouselImage02 from "../../assets/images/home/carousel_02.png";
import CarouselImage03 from "../../assets/images/home/carousel_03.png";
import CarouselImage04 from "../../assets/images/home/carousel_04.png";
import CarouselImage05 from "../../assets/images/home/carousel_05.png";
import CarouselImage06 from "../../assets/images/home/carousel_06.png";

export default function JoinUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados das imagens do carrossel (usando imagens importadas)
  const carouselImages = [
    {
      id: 1,
      src: CarouselImage01,
      title: "Eventos Comunitários",
      description: "Participando de ações sociais no bairro",
    },
    {
      id: 2,
      src: CarouselImage02,
      title: "Reuniões da Diretoria",
      description: "Planejando melhorias para a comunidade",
    },
    {
      id: 3,
      src: CarouselImage03,
      title: "Obras de Infraestrutura",
      description: "Acompanhando projetos de melhoria",
    },
    {
      id: 4,
      src: CarouselImage04,
      title: "Parcerias Estratégicas",
      description: "Firmando acordos para o desenvolvimento",
    },
    {
      id: 5,
      src: CarouselImage05,
      title: "Ações Sociais",
      description: "Promovendo bem-estar da comunidade",
    },
    {
      id: 6,
      src: CarouselImage06,
      title: "Mais Participação",
      description: "Engajamento dos moradores",
    },
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Curva decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-white transform rotate-180"
        >
          <path d="M0,0 C300,80 500,120 800,60 C1000,20 1100,40 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 left-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-16 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-8">
        {/* Layout principal - Grid 2 colunas */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda - Conteúdo */}
          <div className="text-center lg:text-left space-y-8">
            {/* Título principal */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Associe-se
              </h2>

              {/* Logo estilizada */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img
                  src={Logo.src}
                  alt="Logo AMEAQUARIUS"
                  className="h-14 lg:h-20 w-auto pl-4"
                />
              </div>

              {/* Subtítulo */}
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed -mt-4">
                e vamos fortalecer esse trabalho.
              </p>
            </div>

            {/* Benefícios de se associar */}
            <div className="space-y-4">
              {[
                { icon: Users, text: "Faça parte de uma comunidade ativa" },
                { icon: Heart, text: "Contribua para melhorias no bairro" },
                { icon: Handshake, text: "Participe das decisões importantes" },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 justify-center lg:justify-start"
                  >
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="text-white/80 text-lg">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="group px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25 cursor-pointer">
                <span className="flex items-center gap-3 text-lg">
                  Quero me Associar
                  <div className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </span>
              </button>
            </div>
          </div>

          {/* Coluna direita - Carrossel */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
              {/* Container das imagens */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center relative">
                      <img
                        src={
                          typeof image.src === "string"
                            ? image.src
                            : image.src.src
                        }
                        alt={image.title}
                        className="object-cover w-full h-full rounded-3xl"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                      {/* Título e descrição sobre a imagem */}
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-center pb-12">
                        <h3 className="text-lg font-bold mb-1">
                          {image.title}
                        </h3>
                        <p className="text-xs opacity-90">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Controles do carrossel */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Efeito de brilho decorativo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Curva decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-gray-900"
        >
          <path d="M0,120 C200,40 400,0 600,60 C800,120 1000,80 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
