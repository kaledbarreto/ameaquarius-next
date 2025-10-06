"use client";

import React, { useState, useEffect } from "react";
import {
  Palette,
  Shield,
  Users,
  Trophy,
  Calendar,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";

import end01 from "../../assets/images/ourHistory/end_01.jpeg";
import end02 from "../../assets/images/ourHistory/end_02.jpeg";
import end03 from "../../assets/images/ourHistory/end_03.jpg";
import end04 from "../../assets/images/ourHistory/end_04.jpeg";
import end05 from "../../assets/images/ourHistory/end_05.jpeg";
import end06 from "../../assets/images/ourHistory/end_06.jpeg";
import end07 from "../../assets/images/ourHistory/end_07.jpeg";
import end08 from "../../assets/images/ourHistory/end_08.jpg";
import end09 from "../../assets/images/ourHistory/end_09.jpg";
import end10 from "../../assets/images/ourHistory/end_10.jpeg";
import end11 from "../../assets/images/ourHistory/end_11.jpeg";
import end12 from "../../assets/images/ourHistory/end_12.jpg";

export default function History2023Section() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const historyPeriods = [
    {
      id: 1,
      number: "1º",
      title: "Fortalecimento da AMEAQUARIUS e Projetos Culturais",
      description:
        "Ações Culturais e Comunitárias: O São João, Carnaval e Natal do Aquarius, em parceria com o vereador Palhinha, o DJ marco do rinho é outros artistas do bairro, promoveram integração comunitária.",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      images: [
        {
          id: 1,
          src: typeof end01 === "string" ? end01 : end01.src,
          alt: "São João no Aquarius",
        },
        {
          id: 2,
          src: typeof end02 === "string" ? end02 : end02.src,
          alt: "Carnaval Comunitário",
        },
        {
          id: 3,
          src: typeof end03 === "string" ? end03 : end03.src,
          alt: "Natal do Aquarius",
        },
        { id: 4, placeholder: "Atividades Culturais" },
      ],
    },
    {
      id: 2,
      number: "2º",
      title: "Início de Novos Projetos de Infraestrutura",
      description:
        "A AMEAQUARIUS apresentou diversos projetos de melhorias para obter mais novos projetos de segurança e urbanização, visando sempre a melhoria da qualidade de vida do bairro.",
      icon: Shield,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      images: [
        {
          id: 5,
          src: typeof end04 === "string" ? end04 : end04.src,
          alt: "Projetos de Segurança",
        },
        {
          id: 6,
          src: typeof end05 === "string" ? end05 : end05.src,
          alt: "Urbanização",
        },
        {
          id: 7,
          src: typeof end06 === "string" ? end06 : end06.src,
          alt: "Melhorias Estruturais",
        },
        { id: 8, placeholder: "Qualidade de Vida" },
      ],
    },
    {
      id: 3,
      number: "3º",
      title: "Parceria com o Vereador Palhinha e Reconhecimento Oficial",
      description:
        "A atuação direta do vereador Palhinha trouxe importantes conquistas para a comunidade, solidificando parcerias políticas estratégicas para o bairro, culminando no seu reconhecimento oficial.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      images: [
        {
          id: 9,
          src: typeof end07 === "string" ? end07 : end07.src,
          alt: "Reunião com Palhinha",
        },
        {
          id: 10,
          src: typeof end08 === "string" ? end08 : end08.src,
          alt: "Parcerias Políticas",
        },
        {
          id: 11,
          src: typeof end09 === "string" ? end09 : end09.src,
          alt: "Conquistas Oficiais",
        },
        { id: 12, placeholder: "Reconhecimento" },
      ],
    },
    {
      id: 4,
      number: "4º",
      title: "Reconhecimento Oficial do Bairro",
      description:
        "Graças ao trabalho contínuo e à parceria com Palhinha, o Aquarius foi oficialmente reconhecido como um bairro pela cidade, uma conquista significativa para a comunidade.",
      icon: Trophy,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      images: [
        {
          id: 13,
          src: typeof end10 === "string" ? end10 : end10.src,
          alt: "Cerimônia Oficial",
        },
        {
          id: 14,
          src: typeof end11 === "string" ? end11 : end11.src,
          alt: "Documentos Oficiais",
        },
        {
          id: 15,
          src: typeof end12 === "string" ? end12 : end12.src,
          alt: "Celebração",
        },
        { id: 16, placeholder: "Marco Histórico" },
      ],
    },
  ];

  // Auto-play dos steps
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % historyPeriods.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, historyPeriods.length]);

  const currentPeriod = historyPeriods[currentStep];
  const IconComponent = currentPeriod.icon;

  const goToStep = (index: number) => {
    setCurrentStep(index);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background dinâmico baseado no período atual */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${currentPeriod.bgColor}`}
      ></div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-16 w-80 h-80 bg-white/20 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-12">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-white/30">
            <Calendar className="w-4 h-4" />
            Período Mais Recente
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              2023 a 2024
            </span>
          </h2>

          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Fortalecimento, Projetos Culturais e Inovação
          </h3>
        </div>

        {/* Timeline horizontal interativa */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Linha de progresso */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2">
              <div
                className={`h-full bg-gradient-to-r ${currentPeriod.color} rounded-full transition-all duration-1000`}
                style={{
                  width: `${
                    ((currentStep + 1) / historyPeriods.length) * 100
                  }%`,
                }}
              ></div>
            </div>

            {/* Pontos da timeline */}
            <div className="flex justify-between relative">
              {historyPeriods.map((period, index) => {
                const StepIcon = period.icon;
                const isActive = index === currentStep;
                const isPassed = index < currentStep;

                return (
                  <button
                    key={period.id}
                    onClick={() => goToStep(index)}
                    className={`relative w-16 h-16 rounded-full border-4 transition-all duration-500 transform ${
                      isActive
                        ? `bg-gradient-to-r ${period.color} border-white shadow-lg scale-125`
                        : isPassed
                        ? `bg-gradient-to-r ${period.color} border-white shadow-md`
                        : "bg-white border-gray-300 hover:border-gray-400"
                    } ${isActive ? "z-20" : "z-10"}`}
                  >
                    <StepIcon
                      className={`w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        isActive || isPassed ? "text-white" : "text-gray-400"
                      }`}
                    />

                    {/* Número do período */}
                    <div
                      className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold transition-colors ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {period.number}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controle de play/pause */}
          <div className="flex justify-center mt-8">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-900/30 hover:bg-white/80 transition-colors text-gray-900"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">
                {isPlaying ? "Pausar" : "Reproduzir"}
              </span>
            </button>
          </div>
        </div>

        {/* Conteúdo principal do período atual */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Header do período */}
            <div
              className={`p-8 bg-gradient-to-r ${currentPeriod.color} text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>

              <div className="relative z-10 flex items-center gap-6">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">
                    {currentPeriod.number}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {currentPeriod.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Grid de conteúdo */}
            <div className="p-8 grid lg:grid-cols-3 gap-8">
              {/* Descrição */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Principais Realizações
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {currentPeriod.description}
                  </p>
                </div>

                <div
                  className={`p-4 bg-gradient-to-r ${currentPeriod.color} bg-opacity-10 rounded-2xl`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-3 h-3 bg-gradient-to-r ${currentPeriod.color} rounded-full`}
                    ></div>
                    <span className="text-sm font-bold text-gray-900">
                      Período: 2023-2024
                    </span>
                  </div>
                  <span className="text-sm text-gray-700">
                    Marco {currentStep + 1} de {historyPeriods.length}
                  </span>
                </div>
              </div>

              {/* Galeria de imagens */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  {currentPeriod.images.map((image, index) => (
                    <div
                      key={image.id}
                      className="aspect-square bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                    >
                      <div
                        className={`w-full h-full bg-gradient-to-br ${currentPeriod.color} flex items-center justify-center relative transition-opacity`}
                      >
                        {image.src ? (
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          <div className="absolute inset-4 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
                            <div className="text-center text-gray-600">
                              <IconComponent className="w-8 h-8 mx-auto mb-2 opacity-50" />
                              <div className="text-sm font-medium">
                                {image.placeholder}
                              </div>
                              <div className="text-xs opacity-75">
                                Foto {index + 1}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action final */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 max-w-3xl mx-auto border-2 border-blue-100">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Trophy className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                O Futuro Continua
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              De 2018 até 2024, nossa jornada foi marcada por conquistas
              extraordinárias. O reconhecimento oficial como bairro representa
              não um fim, mas o início de novos desafios e oportunidades para
              nossa comunidade.
            </p>

            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center max-w-[300px] mx-auto"
            >
              <span className="flex items-center gap-2">
                Faça Parte Desta História
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </span>
            </Link>
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
          <path d="M0,0 C300,80 500,120 800,60 C1000,20 1100,40 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
