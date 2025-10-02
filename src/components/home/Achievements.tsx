import React from "react";
import {
  Trophy,
  Users,
  Handshake,
  ArrowRight,
  Star,
  Target,
} from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      number: "19",
      label: "Parceiros",
      icon: Handshake,
      description: "Parcerias estratégicas estabelecidas",
    },
    {
      number: "2400",
      label: "Ações",
      icon: Target,
      description: "Ações realizadas para a comunidade",
    },
    {
      number: "12",
      label: "Projetos",
      icon: Trophy,
      description: "Projetos estruturais concluídos",
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Curva decorativa superior - continuação da seção anterior */}
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
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            <Star className="w-4 h-4" />
            Nossos Resultados
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ações e{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Conquistas
            </span>
          </h2>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Em <strong>6 anos de atuação</strong>, já conquistamos diversas
            melhorias para o antigo loteamento Aquarius.
          </p>
        </div>

        {/* Grid de conquistas - Layout principal */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="group text-center">
                  {/* Círculo com ícone */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/15 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-cyan-300" />
                  </div>

                  {/* Número grande */}
                  <div className="mb-4">
                    <span className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                      {achievement.number}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {achievement.label}
                  </h3>

                  {/* Descrição */}
                  <p className="text-white/70 text-lg leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Linha decorativa */}
                  <div className="mt-6 mx-auto w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Seção de destaque adicional */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Trophy className="w-8 h-8 text-cyan-300" />
              <h3 className="text-3xl font-bold text-white">
                Transformação Contínua
              </h3>
            </div>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Cada ação realizada representa o compromisso da AMEAQUARIUS em
              promover melhorias estruturais e sociais para toda a comunidade do
              Aquarius.
            </p>

            {/* Lista de benefícios alcançados */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              {[
                "Infraestrutura urbana melhorada",
                "Segurança pública fortalecida",
                "Parcerias público-privadas",
                "Projetos sociais implementados",
                "Mobilidade urbana aprimorada",
                "Sustentabilidade ambiental",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full flex-shrink-0"></div>
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
              <span className="flex items-center gap-2">
                Conheça Todas as Ações
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </span>
            </button>
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
          <path d="M0,120 C200,40 400,0 600,60 C800,120 1000,80 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
