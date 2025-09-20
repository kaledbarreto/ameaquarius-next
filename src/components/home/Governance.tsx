import React from "react";
import {
  Shield,
  Eye,
  Scale,
  Users,
  FileCheck,
  ArrowDown,
  Check,
} from "lucide-react";

export default function Governance() {
  const governanceStructure = [
    {
      title: "Colegiado Gestor",
      description: "Órgão superior de decisão",
      icon: Shield,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Presidente",
      description: "Representação e liderança",
      icon: Users,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Diretoria Executiva",
      description: "Gestão operacional",
      icon: FileCheck,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Conselho Fiscal",
      description: "Controle e fiscalização",
      icon: Eye,
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Curva decorativa superior - continuação da seção anterior */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-blue-600 transform rotate-180"
        >
          <path d="M0,120 C200,40 400,0 600,60 C800,120 1000,80 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Background com gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 right-10 w-48 h-48 bg-red-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-16 w-64 h-64 bg-gray-100/30 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-8">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            Transparência e Ética
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Governança e{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Transparência
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Associação AMEAQUARIUS tem uma estrutura de governança, eleita
            democraticamente, responsável por estabelecer as nossas diretrizes,
            atuação e políticas institucionais, sempre em conformidade com o
            ordenamento jurídico.
          </p>
        </div>

        {/* Organograma Visual */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Colegiado Gestor - Topo */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-xl font-bold">COLEGIADO</h3>
                <h3 className="text-xl font-bold">GESTOR</h3>
              </div>
            </div>
          </div>

          {/* Linha conectora */}
          <div className="flex justify-center mb-8">
            <div className="w-1 h-12 bg-red-400 rounded-full relative">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Linha horizontal conectora */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-2xl h-1 bg-red-400 rounded-full relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Três órgãos principais */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 md:grid-cols-3">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4 md:px-6 md:py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-center min-w-[80px] md:min-w-[140px]">
                <Users className="w-5 h-5 mx-auto mb-1 md:w-6 md:h-6 md:mb-2" />
                <h3 className="text-xs md:text-lg font-bold">PRESIDENTE</h3>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4 md:px-6 md:py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-center min-w-[80px] md:min-w-[140px]">
                <FileCheck className="w-5 h-5 mx-auto mb-1 md:w-6 md:h-6 md:mb-2" />
                <h3 className="text-xs md:text-lg font-bold">DIRETORIA</h3>
                <h3 className="text-xs md:text-lg font-bold">EXECUTIVA</h3>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4 md:px-6 md:py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 text-center min-w-[80px] md:min-w-[140px]">
                <Eye className="w-5 h-5 mx-auto mb-1 md:w-6 md:h-6 md:mb-2" />
                <h3 className="text-xs md:text-lg font-bold">CONSELHO</h3>
                <h3 className="text-xs md:text-lg font-bold">FISCAL</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Texto sobre transparência */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-10 md:p-14 shadow-2xl mb-8 ring-2 ring-red-100">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Check className="w-6 h-6 text-green-500" />
              <h3 className="text-2xl font-bold text-gray-900">
                Política de Transparência
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Como parte de nossa Política de Governança e Transparência, também
              fazemos questão de, anualmente, reportar de forma pública a todos
              os nossos associados o uso dos recursos financeiros de nossa
              Associação em ações realizadas para o bairro Aquarius.
            </p>
          </div>

          {/* CTA para relatórios */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto flex justify-center">
              <span className="flex items-center gap-2 cursor-pointer justify-center w-full">
                Ver Relatórios Anuais
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <FileCheck className="w-4 h-4" />
                </div>
              </span>
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-red-300 hover:border-red-500 hover:bg-red-50 text-red-600 font-semibold rounded-full transition-all duration-300 cursor-pointer ">
              Documentos Públicos
            </button>
          </div>
        </div>
      </div>

      {/* Curva decorativa inferior */}
      {/* <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-blue-600"
        >
          <path d="M0,0 C300,80 500,120 800,60 C1000,20 1100,40 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div> */}
    </section>
  );
}
