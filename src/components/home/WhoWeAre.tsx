import React from "react";
import { Users, Heart, ArrowRight, Crown } from "lucide-react";
import Director01 from "../../assets/images/home/director_01.jpg";
import Director02 from "../../assets/images/home/director_02.jpg";
import Director03 from "../../assets/images/home/director_03.jpg";
import Director04 from "../../assets/images/home/director_04.jpg";

export default function WhoWeAre() {
  type BoardMember = {
    name: string;
    position: string;
    description: string;
    email?: string;
    at?: string;
    image?: string | { src: string };
    isPresident?: boolean;
    isPlaceholder?: boolean;
    imageTop?: boolean;
  };

  const boardMembers: BoardMember[] = [
    {
      name: "Theodomiro Neto",
      position: "Presidente",
      description:
        "Bacharel em Direito e Empresário. Morador do Aquarius há 10 anos",
      email: "tb_neto@hotmail.com",
      at: "@tb_neto",
      image: Director01,
      isPresident: true,
      imageTop: true,
    },
    {
      name: "Eldete Almeida",
      position: "Diretora Financeira",
      description:
        "Empresária com expertise na área de construção civil. Moradora do Aquarius desde 1992.",
      email: "eldetealmeida@gmail.com",
      at: "@eldetealmeida",
      image: Director02,
      imageTop: false,
    },
    {
      name: "Mauricio Xavier",
      position: "Diretor Jurídico",
      description:
        "Breve descrição sobre o membro e sua experiência na associação.",
      email: "contato@ameaquarius.com.br",
      at: "@mauricioxavier",
      image: Director04,
      imageTop: true,
    },
    {
      name: "Membro da Diretoria",
      position: "Cargo",
      description:
        "Breve descrição sobre o membro e sua experiência na associação.",
      email: "contato@ameaquarius.com.br",
      at: "@diretoria",
      image: undefined,
      isPlaceholder: true,
      imageTop: false,
    },
    {
      name: "Karine Rocha",
      position: "Consultora Jurídica",
      description:
        "Presidente Comissão Direito do 3° Setor OAB/BA. Diretora ABMCJ/BA. Assessora jurídica para OSCS. Palestrante e treinadora",
      email: "karinerocha@hotmail.com",
      at: "@karinerocha",
      image: Director03,
      imageTop: true,
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Curva decorativa superior - continuação da seção anterior */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-slate-50 transform rotate-180"
        >
          <path d="M0,0 C300,80 500,120 800,60 C1000,20 1100,40 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 left-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-16 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-8">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 border border-white/20">
            <Crown className="w-4 h-4" />
            Nossa Liderança
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Conheça nossa{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Diretoria
            </span>
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-2">
            <strong>Todos trabalham de forma voluntária!</strong>
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Trabalhamos com foco em resultado e na promoção da melhor qualidade
            de vida para todos.
          </p>
        </div>

        {/* Slogan central */}
        <div className="text-center mb-12">
          <div className="inline-block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-cyan-300" />
              <Users className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide">
              Juntos, vamos cuidando de nosso bairro
            </h3>
            <p className="text-cyan-300 font-bold text-lg mt-2">AQUARIUS!</p>
          </div>
        </div>

        {/* Grid dos membros da diretoria - Layout em fileiras */}
        <div className="space-y-8 mb-12">
          {/* Primeira fileira - Presidente em destaque */}
          <div className="flex justify-center">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-300/50 hover:bg-white/15 transition-all duration-300 hover:scale-105 max-w-md">
              <div className="flex items-center gap-6">
                {/* Placeholder para foto */}
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-cyan-400/20 to-blue-400/20 flex-shrink-0">
                  {boardMembers[0].image ? (
                    <img
                      src={
                        typeof boardMembers[0].image === "string"
                          ? boardMembers[0].image
                          : boardMembers[0].image.src
                      }
                      alt={boardMembers[0].name}
                      className={`w-full h-full object-cover rounded-2xl ${
                        boardMembers[0].imageTop
                          ? "object-top"
                          : "object-center"
                      }`}
                    />
                  ) : (
                    boardMembers[0].name.charAt(0)
                  )}
                </div>

                {/* Info do membro */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Crown className="w-5 h-5 text-cyan-300" />
                    <span className="text-cyan-300 text-sm font-medium uppercase tracking-wide">
                      Presidente
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {boardMembers[0].name}
                  </h4>

                  <p className="text-white/70 text-sm leading-relaxed">
                    {boardMembers[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demais membros em fileiras de 3 */}
          {boardMembers.length > 1 &&
            Array.from({
              length: Math.ceil((boardMembers.length - 1) / 3),
            }).map((_, rowIdx, arr) => {
              const members = boardMembers.slice(
                1 + rowIdx * 3,
                1 + (rowIdx + 1) * 3
              );
              // Se for a última fileira e não tiver 3 membros, preenche com placeholders
              const isLastRow = rowIdx === arr.length - 1;
              const filledMembers =
                isLastRow && members.length < 3
                  ? [
                      ...members,
                      ...Array.from({ length: 3 - members.length }).map(
                        (_, i) => ({
                          name: "Membro da Diretoria",
                          position: "Cargo",
                          description:
                            "Breve descrição sobre o membro e sua experiência na associação.",
                          isPlaceholder: true,
                        })
                      ),
                    ]
                  : members;
              return (
                <div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  key={rowIdx}
                >
                  {filledMembers.map((member, index) => (
                    <div
                      key={member.name + index}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        {/* Placeholder para foto */}
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center text-white/60 font-bold text-sm flex-shrink-0 ${
                            member.isPlaceholder ||
                            !("image" in member) ||
                            !member.image
                              ? "bg-white/20"
                              : "bg-gradient-to-br from-cyan-400/20 to-blue-400/20"
                          }`}
                        >
                          {"image" in member &&
                          member.image &&
                          !member.isPlaceholder ? (
                            <img
                              src={
                                typeof member.image === "string"
                                  ? member.image
                                  : member.image.src
                              }
                              alt={member.name}
                              className={`w-full h-full object-cover rounded-xl ${
                                member.imageTop ? "object-top" : "object-center"
                              }`}
                            />
                          ) : (
                            "FOTO"
                          )}
                        </div>

                        {/* Info do membro */}
                        <div className="space-y-1 min-w-0">
                          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {member.name || ""}
                          </h4>

                          <p className="text-cyan-300 text-sm font-medium">
                            {member.position || ""}
                          </p>

                          <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                            {member.description || ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
        </div>

        {/* CTA para página completa */}
        <div className="text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            <span className="flex items-center gap-2">
              Ver Diretoria Completa
              <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                <ArrowRight className="w-4 h-4" />
              </div>
            </span>
          </button>
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
