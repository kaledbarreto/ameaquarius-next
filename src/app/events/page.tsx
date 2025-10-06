"use client";

import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Heart,
  Gift,
  Music,
  Play,
  Image,
  Video,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";
import natal01 from "../../assets/images/events/natal_01.jpeg";
import natal02 from "../../assets/images/events/natal_02.jpeg";
import natal03 from "../../assets/images/events/natal_03.jpeg";
import natal04 from "../../assets/images/events/natal_04.jpeg";
import natal05 from "../../assets/images/events/natal_05.jpeg";
import natal06 from "../../assets/images/events/natal_06.jpeg";

export default function AquariusEventosPage() {
  const [activeImageSlide, setActiveImageSlide] = useState(0);
  const [activeVideoSlide, setActiveVideoSlide] = useState(0);

  // Dados do evento principal
  const eventoDestaque = {
    titulo: "Natal Aquarius 2024: Festa, Diversão e Comunidade",
    descricao:
      "O Natal do Aquarius 2024 foi uma celebração inesquecível, reunindo toda comunidade Em parceria com a instituição ACM e com o apoio fundamental do vereador Osiriano Palhinha, a AmeAquarius realizou uma celebração inesquecível, repleta de música, cultura e alegria para todas as idades.",
    detalhes: [
      "A programação contou com diversas atrações, incluindo a surpresa Elsa da SA, que trouxe arte, gastronomia e economia criativa para o bairro.",
      "Além disso, as crianças tiveram oportunidade de conhecer o Papai Noel, presenteadas com brinquedos, aguardados chegaram do Papai Noel, encantaram todas as gerações.",
      "O evento também ofereceu o ponto do Patrício de Barrao, bem conceituado ao vereador Osiriano Palhinha, em reconhecimento a sua dedicação em favor da comunidade.",
      "A cobertura completa do Natal Aquarius 2024 pode ser conferida em vídeo no site www.ameaquarius.org, no Instagram @associacaoameaquarius, além do acesso direto para a AmeAquarius Tv Real no destaque no botões em detalhe.",
      "É a sintonia cada vez maior do povo como no maior esforço, com caridade, roda farias é ainda mais comunidades para celebrar e fortalecer nossa Comunidade!",
    ],
    data: "23 de Novembro de 2024",
    local: "Praça Aquarius",
    participantes: "500+ famílias",
  };

  const imagensEvento = [
    { id: 1, imagem: natal01 },
    { id: 2, imagem: natal02 },
    { id: 3, imagem: natal03 },
    { id: 4, imagem: natal04 },
    { id: 5, imagem: natal05 },
    { id: 6, imagem: natal06 },
  ];

  const videosEvento = [
    {
      id: 1,
      titulo: "Natal Aquarius 2024 - Destaque Principal",
      duracao: "0:39",
      link: "https://www.youtube.com/shorts/oOnVZL-v_Zw",
    },
    {
      id: 2,
      titulo: "Apresentações Especiais",
      duracao: "0:39",
      link: "https://www.youtube.com/shorts/1RyVb3lj6SU",
    },
    {
      id: 3,
      titulo: "Momentos Inesquecíveis",
      duracao: "0:27",
      link: "https://www.youtube.com/shorts/Y2OXRN8v2Ak",
    },
    {
      id: 4,
      titulo: "Natal Aquarius 2024 - Oficial",
      duracao: "1:27",
      link: "https://www.youtube.com/watch?v=dsVX_3RqOvA",
    },
    {
      id: 5,
      titulo: "Celebração Comunitária",
      duracao: "1:12",
      link: "https://www.youtube.com/watch?v=todC8WnrfeA",
    },
  ];

  const proximosEventos = [
    {
      id: 1,
      titulo: "Carnaval do Aquarius 2025",
      data: "15 de Fevereiro de 2025",
      descricao:
        "Tradicional festa de carnaval com trios elétricos, food trucks e muita animação para toda a família.",
      status: "Em breve",
    },
    {
      id: 2,
      titulo: "São João do Aquarius 2025",
      data: "24 de Junho de 2025",
      descricao:
        "Festa junina com quadrilha, fogueira, comidas típicas e apresentações culturais da comunidade.",
      status: "Planejando",
    },
    {
      id: 3,
      titulo: "Dia das Crianças Aquarius",
      data: "12 de Outubro de 2025",
      descricao:
        "Evento especial para as crianças com brinquedos, recreação, piscina de bolinha e muito mais.",
      status: "Planejando",
    },
  ];

  const nextImageSlide = () => {
    setActiveImageSlide(
      (prev) => (prev + 1) % Math.ceil(imagensEvento.length / 3)
    );
  };

  const prevImageSlide = () => {
    setActiveImageSlide(
      (prev) =>
        (prev - 1 + Math.ceil(imagensEvento.length / 3)) %
        Math.ceil(imagensEvento.length / 3)
    );
  };

  const nextVideoSlide = () => {
    setActiveVideoSlide(
      (prev) => (prev + 1) % Math.ceil(videosEvento.length / 2)
    );
  };

  const prevVideoSlide = () => {
    setActiveVideoSlide(
      (prev) =>
        (prev - 1 + Math.ceil(videosEvento.length / 2)) %
        Math.ceil(videosEvento.length / 2)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <Heart className="w-4 h-4" />
              Eventos Comunitários
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Aquarius{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Eventos
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              Celebrações que unem nossa comunidade e fortalecem os laços entre
              vizinhos, criando memórias inesquecíveis para todas as idades.
            </p>
          </div>
        </div>

        {/* Curva inferior */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full fill-white"
          >
            <path d="M0,120 C200,40 400,0 600,60 C800,120 1000,80 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Evento em Destaque */}
      <section className="relative pt-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header do evento */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">
                Natal Aquarius 2024
              </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-500" />
                <span>{eventoDestaque.data}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>{eventoDestaque.local}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-red-500" />
                <span>{eventoDestaque.participantes}</span>
              </div>
            </div>
          </div>

          {/* Descrição do evento */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-3xl p-8 border-2 border-red-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {eventoDestaque.descricao}
              </p>

              <div className="space-y-4">
                {eventoDestaque.detalhes.map((detalhe, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{detalhe}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
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

        <div className="container mx-auto px-6 lg:px-12 my-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Galeria de Imagens
              </h3>
              <p className="text-lg text-white/90">
                Momentos especiais capturados durante o evento
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevImageSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/15 transition-colors group cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextImageSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/15 transition-colors group cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {imagensEvento
              .slice(activeImageSlide * 3, (activeImageSlide + 1) * 3)
              .map((imagem) => (
                <div
                  key={imagem.id}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-red-200 to-green-200 relative overflow-hidden">
                    {imagem.imagem ? (
                      <img
                        src={
                          typeof imagem.imagem === "string"
                            ? imagem.imagem
                            : imagem.imagem.src
                        }
                        alt={`Imagem do evento ${imagem.id}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <Image className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(imagensEvento.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      activeImageSlide === index ? "bg-white/80" : "bg-white/50"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Curva decorativa inferior */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full fill-white transform"
          >
            <path d="M0,0 C300,80 500,120 800,60 C1000,20 1100,40 1200,80 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Vídeos do Evento */}
      <section className="relative py-16 lg:py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Vídeos do Evento
              </h3>
              <p className="text-lg text-gray-600">
                Reviva os melhores momentos em vídeo
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={prevVideoSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 cursor-pointer" />
              </button>
              <button
                onClick={nextVideoSlide}
                className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videosEvento
              .slice(activeVideoSlide * 2, (activeVideoSlide + 1) * 2)
              .map((video) => {
                // Função para extrair o ID do vídeo do link do YouTube
                function getYouTubeId(url: string) {
                  const match = url.match(
                    /(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/
                  );
                  return match ? match[1] : null;
                }
                const youtubeId = getYouTubeId(video.link);
                return (
                  <div
                    key={video.id}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-red-500 to-red-600 relative overflow-hidden">
                      {youtubeId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title={video.titulo}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border-0"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Video className="w-16 h-16 mx-auto mb-4" />
                            <div className="text-sm opacity-75">Vídeo</div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                        {video.titulo}
                      </h4>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {video.duracao}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(videosEvento.length / 2) }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVideoSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                      activeVideoSlide === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
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

        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Próximos Eventos
            </h3>
            <p className="text-xl text-white/90">
              Fique por dentro das próximas celebrações da nossa comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {proximosEventos.map((evento) => (
              <div
                key={evento.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-cyan-300" />
                  <span className="text-white/80 text-sm">{evento.data}</span>
                  <span
                    className={`ml-auto px-2 py-1 rounded-full text-xs font-medium ${
                      evento.status === "Em breve"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {evento.status}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {evento.titulo}
                </h4>

                <p className="text-white/80 leading-relaxed mb-6">
                  {evento.descricao}
                </p>

                <button className="group flex items-center gap-2 text-cyan-300 hover:text-white font-semibold cursor-pointer">
                  Saber mais
                  <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            ))}
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

      <Footer />
    </div>
  );
}
