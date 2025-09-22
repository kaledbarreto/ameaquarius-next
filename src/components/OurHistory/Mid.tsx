"use client";

import React, { useState } from "react";
import {
  Lightbulb,
  TrendingUp,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
} from "lucide-react";

import Mid01 from "../../assets/images/ourHistory/mid_01.jpg";
import Mid02 from "../../assets/images/ourHistory/mid_02.jpg";
import Mid03 from "../../assets/images/ourHistory/mid_03.jpg";
import Mid04 from "../../assets/images/ourHistory/mid_04.jpg";
import Mid05 from "../../assets/images/ourHistory/mid_05.jpg";
import Mid06 from "../../assets/images/ourHistory/mid_06.jpg";
import Mid07 from "../../assets/images/ourHistory/mid_07.jpg";
import Mid08 from "../../assets/images/ourHistory/mid_08.jpg";
import Mid09 from "../../assets/images/ourHistory/mid_09.jpg";
import Mid10 from "../../assets/images/ourHistory/mid_10.jpg";
import Mid11 from "../../assets/images/ourHistory/mid_11.jpg";
import Mid12 from "../../assets/images/ourHistory/mid_12.jpg";
import Mid13 from "../../assets/images/ourHistory/mid_13.jpg";
import Mid14 from "../../assets/images/ourHistory/mid_14.jpg";
import Mid15 from "../../assets/images/ourHistory/mid_15.jpg";
import Mid16 from "../../assets/images/ourHistory/mid_16.jpg";

export default function Mid() {
  const [activeSlide, setActiveSlide] = useState(0);

  const historyPeriods = [
    {
      id: 1,
      number: "1º",
      title: "Infraestrutura Básica",
      description:
        "A manutenção de lixo e a modernização da iluminação pública marcaram o início das transformações que iriam melhorar significativamente a qualidade de vida no bairro.",
      icon: Lightbulb,
      color: "from-amber-500 to-yellow-500",
      images: [
        { id: 1, src: Mid01, alt: "Infraestrutura" },
        { id: 2, src: Mid02, alt: "Iluminação" },
        { id: 3, src: Mid03, alt: "Limpeza" },
        { id: 4, src: Mid04, alt: "Melhorias" },
      ],
    },
    {
      id: 2,
      number: "2º",
      title: "Crescimento do Bairro",
      description:
        "A AMEAQUARIUS passou a ser conhecida e completou diversos um número crescente de novos moradores e empreendimentos locais, fortalecendo a comunidade e a economia do bairro.",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-500",
      images: [
        { id: 5, src: Mid05, alt: "Crescimento" },
        { id: 6, src: Mid06, alt: "Novos moradores" },
        { id: 7, src: Mid07, alt: "Desenvolvimento" },
        { id: 8, src: Mid08, alt: "Expansão" },
      ],
    },
    {
      id: 3,
      number: "3º",
      title: "Melhorias Viárias",
      description:
        "A urbanização do bairro avançou de forma expressiva, proporcionando maior segurança e organização, graças ao trabalho conjunto entre moradores e a associação.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      images: [
        { id: 9, src: Mid09, alt: "Vias" },
        { id: 10, src: Mid10, alt: "Segurança" },
        { id: 11, src: Mid11, alt: "Organização" },
        { id: 12, src: Mid12, alt: "Urbanização" },
      ],
    },
    {
      id: 4,
      number: "4º",
      title: "Consolidação de Parcerias Políticas",
      description:
        "O apoio de figuras políticas foi fundamental para viabilizar melhorias concretas no bairro, criando um elo importante entre a população e o poder público.",
      icon: Award,
      color: "from-purple-500 to-indigo-500",
      images: [
        { id: 13, src: Mid13, alt: "Parcerias" },
        { id: 14, src: Mid14, alt: "Políticos" },
        { id: 15, src: Mid15, alt: "Reuniões" },
        { id: 16, src: Mid16, alt: "Acordos" },
      ],
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % historyPeriods.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + historyPeriods.length) % historyPeriods.length
    );
  };

  const currentPeriod = historyPeriods[activeSlide];
  const IconComponent = currentPeriod.icon;

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Curva decorativa superior - continuação da seção anterior */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-slate-50 transform rotate-180"
        >
          <path d="M0,120 C200,40 400,0 600,60 C800,120 1000,80 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-16 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
            <Calendar className="w-4 h-4" />
            Continuando a História
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              2020 a 2022
            </span>
          </h2>

          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
            Apoio Político, Empresarial, Fortalecimento e Reconhecimento
          </h3>

          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            O período de consolidação e crescimento, quando a AMEAQUARIUS
            expandiu suas parcerias e conquistou importantes melhorias para a
            comunidade.
          </p>
        </div>

        {/* Layout principal - Carrossel + Galeria */}
        <div className="max-w-7xl mx-auto">
          {/* Navegação dos períodos */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
              {historyPeriods.map((period, index) => (
                <button
                  key={period.id}
                  onClick={() => setActiveSlide(index)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeSlide === index
                      ? "bg-white text-blue-700 shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-bold">{period.number}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Coluna de informações - 2/5 */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Header do período */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${currentPeriod.color} rounded-2xl flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      {currentPeriod.number}
                    </div>
                    <div className="text-white/80 text-sm">Marco Histórico</div>
                  </div>
                </div>

                {/* Título */}
                <h4 className="text-2xl font-bold text-white mb-6">
                  {currentPeriod.title}
                </h4>

                {/* Descrição */}
                <p className="text-white/90 leading-relaxed text-lg mb-8">
                  {currentPeriod.description}
                </p>

                {/* Controles de navegação */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20"
                  >
                    <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  <div className="text-white/60 text-sm">
                    {activeSlide + 1} de {historyPeriods.length}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 group border border-white/20"
                  >
                    <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
              {/* Indicador do período atual */}
              <div className="mt-8 text-center">
                <div
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentPeriod.color} bg-opacity-20 backdrop-blur-sm rounded-full border border-white/20`}
                >
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${currentPeriod.color} rounded-full`}
                  ></div>
                  <span className="text-white font-medium">
                    {currentPeriod.title} • 2020-2022
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna da galeria - 3/5 */}
            <div className="lg:col-span-3">
              {/* Grid de imagens 2x2 */}
              <div className="grid grid-cols-2 gap-6">
                {currentPeriod.images.map((image, index) => (
                  <div
                    key={image.id}
                    className="group aspect-square bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:scale-105 transition-all duration-500"
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${currentPeriod.color} flex items-center justify-center relative`}
                    >
                      <img
                        src={
                          typeof image.src === "string"
                            ? image.src
                            : image.src.src
                        }
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curva decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-white"
        >
          <path d="M0,0 C300,80 500,120 800,60 C1000,20 1100,40 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
