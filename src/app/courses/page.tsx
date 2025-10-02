"use client";

import Footer from "@/components/Footer";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function ProjetoPrediosSemFogoPage() {
  const [activeSection, setActiveSection] = useState("sobre");

  const detalhesEvento = {
    titulo: "PROJETO PRÉDIO SEM FOGO",
    descricao:
      "O Corpo de Bombeiros Militar da Bahia, através do Projeto 'Prédio Sem Fogo', vistoria periodicamente edificações residenciais e condomínios verticais que mantenham vínculo estratégico, sustentável e competente, com o empreendimento.",
    objetivo:
      "O objetivo é qualificar ações preventivas para que saibam agir em eventualidades em casos pontuais — seja de prevenção, de vítimas ou ocorrências de incêndio, atendendo também solicitações às emergências básicas do cotidiano e primeiros socorros.",
    local: "Condomínio Mílton de Bahia",
    horarios: "Das 9h às 17h",
    contatos: [
      { tipo: "WhatsApp", valor: "(71) 99999-9999" },
      { tipo: "E-mail", valor: "contato@ameaquarius.org.br" },
    ],
  };

  const resumoEvento = {
    evento: "Projeto Prédio Sem Fogo",
    quando: "A definir (Vistoria no prédio do 28/08 às 11h05)",
    horarios: "Das 9h às 17h",
    publico:
      "Funcionários dos condomínios verticais, porteiros, zeladores etc.",
    inscricao: "Envie e-mail para os endereços acima",
  };

  // Mapeamento dos arquivos para download
  const materiais = [
    {
      id: 1,
      titulo: "Ficha de Cadastramento",
      descricao:
        "Ficha de cadastramento para participação no Projeto Prédio Sem Fogo.",
      tipo: "PDF",
      tamanho: "260 KB",
      arquivo: "/assets/files/courses/PROJETO_PREDIO_SEM_FOGO.pdf",
    },
  ];

  const sections = [
    { id: "sobre", name: "Sobre o Projeto", icon: Shield },
    { id: "detalhes", name: "Detalhes", icon: FileText },
    { id: "materiais", name: "Materiais", icon: Download },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-orange-600">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-red-300/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <Shield className="w-4 h-4" />
              Segurança Preventiva
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Projeto{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Prédio Sem Fogo
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Iniciativa do Corpo de Bombeiros da Bahia para prevenção de
              incêndios e capacitação em primeiros socorros nos condomínios do
              Aquarius.
            </p>

            {/* Navegação das seções */}
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSection === section.id
                        ? "bg-white text-red-700 shadow-lg"
                        : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-semibold">{section.name}</span>
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
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 mb-8">
          {/* Seção Sobre o Projeto */}
          {activeSection === "sobre" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Sobre o Projeto
                </h2>
                <p className="text-lg text-gray-600">
                  Prevenção e capacitação para segurança em condomínios
                </p>
              </div>

              {/* Card principal */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {detalhesEvento.titulo}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {detalhesEvento.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-500 mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Objetivo do Projeto
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {detalhesEvento.objetivo}
                    </p>
                  </div>

                  {/* Informações importantes */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Informações Gerais
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-red-500" />
                          <span className="text-gray-700">
                            {detalhesEvento.local}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-red-500" />
                          <span className="text-gray-700">
                            {detalhesEvento.horarios}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-gray-900">
                        Contatos
                      </h4>
                      <div className="space-y-3">
                        {detalhesEvento.contatos.map((contato, index) => (
                          <div key={index} className="flex items-center gap-3">
                            {contato.tipo === "WhatsApp" ? (
                              <Phone className="w-5 h-5 text-green-500" />
                            ) : (
                              <Mail className="w-5 h-5 text-blue-500" />
                            )}
                            <span className="text-gray-700">
                              {contato.valor}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Seção Detalhes */}
          {activeSection === "detalhes" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Resumo do Evento
                </h2>
                <p className="text-lg text-gray-600">
                  Informações detalhadas sobre o projeto e participação
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Informações do evento */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Detalhes do Evento
                      </h3>

                      {Object.entries(resumoEvento).map(([chave, valor]) => (
                        <div
                          key={chave}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                          <div>
                            <dt className="font-semibold text-gray-900 capitalize mb-1">
                              {chave.replace(/([A-Z])/g, " $1")}:
                            </dt>
                            <dd className="text-gray-700">{valor}</dd>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Público-alvo e instruções */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Público-Alvo
                      </h3>

                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Users className="w-6 h-6 text-blue-600" />
                          <h4 className="text-lg font-bold text-gray-900">
                            Quem Pode Participar
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {[
                            "Funcionários dos condomínios verticais",
                            "Porteiros e zeladores",
                            "Síndicos e administradores",
                            "Moradores interessados",
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                        <div className="flex items-center gap-3 mb-4">
                          <AlertTriangle className="w-6 h-6 text-orange-600" />
                          <h4 className="text-lg font-bold text-gray-900">
                            Como Participar
                          </h4>
                        </div>
                        <p className="text-gray-700">
                          Para participar do treinamento, é necessário envio de
                          e-mail para os endereços fornecidos. As vagas são
                          limitadas e por ordem de inscrição.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Seção Materiais */}
          {activeSection === "materiais" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Materiais Disponíveis
                </h2>
                <p className="text-lg text-gray-600">
                  Downloads e recursos educativos sobre prevenção de incêndios
                </p>
              </div>

              {/* Materiais para download */}
              <div
                className={
                  materiais.length === 1
                    ? "flex justify-center"
                    : "grid md:grid-cols-2 gap-8"
                }
              >
                {materiais.map((material) => (
                  <div
                    key={material.id}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 max-w-xl w-full"
                  >
                    {/* Header do material */}
                    <div className="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <FileText className="w-8 h-8" />
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                          {material.tipo}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{material.titulo}</h3>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {material.descricao}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {material.tamanho}
                        </span>

                        <div className="flex gap-2">
                          <a
                            href={material.arquivo}
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-100 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quer Participar do Projeto?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Entre em contato conosco para mais informações sobre as
                  próximas capacitações e como seu condomínio pode participar do
                  projeto.
                </p>

                <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                  <span className="flex items-center gap-2">
                    Entrar em Contato
                    <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </span>
                </button>
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
            <path d="M0,120 C200,40 400,0 600,60 C800,120 1000,80 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      <Footer />
    </div>
  );
}
