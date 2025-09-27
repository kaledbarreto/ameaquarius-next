"use client";

import React, { useState } from "react";
import {
  Mic,
  BookOpen,
  Newspaper,
  Play,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";

import news01 from "../../assets/images/news/news_01.png";
import news02 from "../../assets/images/news/news_02.png";
import magazine01 from "../../assets/images/news/magazine_01.png";
import Footer from "@/components/Footer";

export default function AquariusNoticiasPage() {
  const [activeSection, setActiveSection] = useState("noticias");

  const noticias = [
    {
      id: 1,
      title:
        "Embrião do Aquarius remonta ao século XIX e à bucólica Fazenda Pituba",
      description:
        "Loteamento foi totalmente urbanizado para favorecer a qualidade de vida dos moradores",
      date: "23 Out 2024",
      category: "História",
      author: "Letícia Belém",
      thumbnail: news01.src,
      link: "https://atarde.com.br/atarde-bairros/embriao-do-aquarius-remonta-ao-seculo-xix-e-a-bucolica-fazenda-pituba-1292523",
    },
    {
      id: 2,
      title: "Novo projeto de A TARDE foca no Aquarius, desmembrado da Pituba",
      description: "Local se tornou o 171° bairro de Salvador",
      date: "23 Out 2024",
      category: "Bairro",
      author: "Letícia Belém",
      thumbnail: news02.src,
      link: "https://atarde.com.br/atarde-bairros/novo-projeto-de-a-tarde-foca-no-aquarius-desmembrado-da-pituba-1292522",
    },
  ];

  const revistas = [
    {
      id: 1,
      title: "Revista Ame Aquarius - Edição 06",
      description:
        "Que possamos ser mais tolerantes e consigamos exercitar em nossas casas os avanços que desejamos ver refletidos aqui no Aquarius.",
      pages: 44,
      date: "Dezembro 2021",
      category: "Especial",
      thumbnail: magazine01.src,
      link: "https://issuu.com/revistaamo/docs/revista_aquarius_6_issuu",
    },
  ];

  const podcasts = [
    {
      id: 1,
      title:
        "Theodomiro Baptista fala da colaboração de moradores em ouvidoria do Aquarius",
      description:
        "Conversa sobre a importância da participação dos moradores nas decisões da comunidade e como a ouvidoria fortalece a democracia local.",
      duration: "25:30",
      date: "15 Nov 2024",
      host: "BN Imóveis Cast",
      thumbnail: "",
    },
  ];

  const sections = [
    {
      id: "noticias",
      name: "Notícias",
      icon: Newspaper,
      count: noticias.length,
    },
    {
      id: "revistas",
      name: "Revistas",
      icon: BookOpen,
      count: revistas.length,
    },
    { id: "podcasts", name: "Podcasts", icon: Mic, count: podcasts.length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Aquarius{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Notícias
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Central de conteúdo da AMEAQUARIUS com podcasts, revistas digitais
              e as últimas notícias da nossa comunidade.
            </p>

            {/* Navegação das seções */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSection === section.id
                        ? "bg-white text-blue-700 shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-semibold">{section.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        activeSection === section.id
                          ? "bg-blue-100 text-blue-700"
                          : "bg-white/20"
                      }`}
                    >
                      {section.count}
                    </span>
                  </button>
                );
              })}
            </div>
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

      {/* Conteúdo principal */}
      <section className="relative py-16 lg:py-24 cursor-pointer">
        <div className="container mx-auto px-6 lg:px-12 mb-16">
          {/* Seção de Notícias */}
          {activeSection === "noticias" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Últimas Notícias
                </h2>
                <p className="text-lg text-gray-600">
                  Fique por dentro de tudo que acontece no Aquarius
                </p>
              </div>

              <div className="space-y-8">
                {noticias.map((noticia) => {
                  const ArticleWrapper = noticia.link
                    ? (props: { children: React.ReactNode }) => (
                        <a
                          href={noticia.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                          {props.children}
                        </a>
                      )
                    : React.Fragment;
                  return (
                    <ArticleWrapper key={noticia.id}>
                      <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 lg:grid lg:grid-cols-5 lg:gap-0">
                        {/* Imagem */}
                        <div className="lg:col-span-2 aspect-video bg-gradient-to-br from-red-500 to-orange-500 opacity-90 relative overflow-hidden">
                          {noticia.thumbnail &&
                          typeof noticia.thumbnail === "string" &&
                          (noticia.thumbnail.endsWith(".png") ||
                            noticia.thumbnail.endsWith(".jpg") ||
                            noticia.thumbnail.endsWith(".jpeg") ||
                            noticia.thumbnail.endsWith(".webp")) ? (
                            <img
                              src={noticia.thumbnail}
                              alt={noticia.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center text-white">
                                <Newspaper className="w-12 h-12 mx-auto mb-3" />
                                <div className="text-sm opacity-75">
                                  {noticia.thumbnail}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Conteúdo */}
                        <div className="lg:col-span-3 p-6 lg:p-8">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                noticia.category === "Oficial"
                                  ? "bg-blue-100 text-blue-700"
                                  : noticia.category === "Eventos"
                                  ? "bg-green-100 text-green-700"
                                  : noticia.category === "Infraestrutura"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-purple-100 text-purple-700"
                              }`}
                            >
                              {noticia.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {noticia.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {noticia.author}
                            </div>
                          </div>

                          <h3 className="font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors text-2xl lg:text-3xl">
                            {noticia.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            {noticia.description}
                          </p>

                          {noticia.link ? (
                            <a
                              href={noticia.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                            >
                              Ler mais
                              <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </a>
                          ) : (
                            <button className="group flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                              Ler mais
                              <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </button>
                          )}
                        </div>
                      </article>
                    </ArticleWrapper>
                  );
                })}
              </div>
            </div>
          )}

          {/* Seção de Revistas */}
          {activeSection === "revistas" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Revistas Digitais
                </h2>
                <p className="text-lg text-gray-600">
                  Publicações oficiais da AMEAQUARIUS com conteúdo exclusivo
                </p>
              </div>

              <div
                className={
                  revistas.length >= 3
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "flex flex-wrap justify-center gap-8"
                }
              >
                {revistas.map((revista) => (
                  <div
                    key={revista.id}
                    className={
                      revistas.length >= 3
                        ? "bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105"
                        : "bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full max-w-xs md:max-w-sm"
                    }
                  >
                    {/* Capa da revista */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-green-500 to-emerald-500 opacity-90 relative overflow-hidden">
                      {revista.thumbnail &&
                      typeof revista.thumbnail === "string" &&
                      (revista.thumbnail.endsWith(".png") ||
                        revista.thumbnail.endsWith(".jpg") ||
                        revista.thumbnail.endsWith(".jpeg") ||
                        revista.thumbnail.endsWith(".webp")) ? (
                        <img
                          src={revista.thumbnail}
                          alt={revista.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white p-6">
                            <BookOpen className="w-12 h-12 mx-auto mb-3" />
                            <div className="text-lg font-bold mb-2">
                              AMEAQUARIUS
                            </div>
                            <div className="text-sm opacity-75">
                              {revista.category}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                          {revista.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {revista.pages} páginas
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {revista.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {revista.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {revista.date}
                        </span>

                        <div className="flex gap-2">
                          {revista.link ? (
                            <a
                              href={revista.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                              title="Abrir revista"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <button
                              className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                              disabled
                            >
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Seção de Podcasts */}
          {activeSection === "podcasts" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Podcasts e Entrevistas
                </h2>
                <p className="text-lg text-gray-600">
                  Ouça conversas exclusivas com lideranças e membros da
                  comunidade
                </p>
              </div>

              <div
                className={
                  podcasts.length === 1
                    ? "flex justify-center gap-8"
                    : "grid lg:grid-cols-2 gap-8"
                }
              >
                {podcasts.map((podcast) => (
                  <div
                    key={podcast.id}
                    className={
                      podcasts.length === 1
                        ? "bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 max-w-lg w-full"
                        : "bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                    }
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 opacity-90 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Mic className="w-16 h-16 mx-auto mb-4" />
                          <div className="text-sm opacity-75">
                            {podcast.thumbnail}
                          </div>
                        </div>
                      </div>

                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-blue-600 ml-1" />
                        </button>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {podcast.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {podcast.date}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {podcast.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {podcast.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-blue-600 font-medium">
                          {podcast.host}
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                          <Play className="w-4 h-4" />
                          Ouvir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

      <Footer />
    </div>
  );
}
