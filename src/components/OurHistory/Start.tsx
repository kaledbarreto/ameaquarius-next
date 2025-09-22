import {
  ArrowRight,
  Building2,
  Calendar,
  Clock,
  Handshake,
  Star,
  Users,
} from "lucide-react";

import Start01 from "../../assets/images/ourHistory/start_01.jpg";
import Start02 from "../../assets/images/ourHistory/start_02.jpg";
import Start03 from "../../assets/images/ourHistory/start_03.jpg";
import Start04 from "../../assets/images/ourHistory/start_04.jpg";

export default function Start() {
  const historyEvents = [
    {
      id: 1,
      title: "Início do Loteamento Aquarius",
      description:
        "O bairro Aquarius começa a ser sonhado, com a chegada dos primeiros moradores e a criação de uma visão de comunidade.",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      image: Start01,
    },
    {
      id: 2,
      title: "Fundação da AMEAQUARIUS",
      description:
        "A Associação de Moradores AMEAQUARIUS é formalizada para organizar as demandas do bairro e lutar pelos interesses da comunidade.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      image: Start02,
    },
    {
      id: 3,
      title: "Primeiros Passos da AMEAQUARIUS",
      description:
        "Início das reuniões da associação: primeiros encontros para definição de metas e ações prioritárias para o desenvolvimento do bairro.",
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
      image: Start03,
    },
    {
      id: 4,
      title: "Parcerias Políticas Iniciais",
      description:
        "Apoio de representantes do legislativo, como Paulo Câmara e André Fraga, que colaboraram com questões de infraestrutura e segurança pública.",
      icon: Handshake,
      color: "from-orange-500 to-red-500",
      image: Start04,
    },
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <Clock className="w-4 h-4" />
              Nossa História
            </div>

            {/* Título principal */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                2018 a 2019
              </span>
            </h1>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              O Início de Tudo
            </h2>

            {/* Subtítulo */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              O período fundador do Aquarius, quando nossa comunidade deu os
              primeiros passos rumo à organização e ao desenvolvimento.
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

      {/* História Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Grid dos eventos */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {historyEvents.map((event, index) => {
              const IconComponent = event.icon;
              const stepNumber = index + 1;

              return (
                <div key={event.id} className="group">
                  {/* Card principal */}
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    {/* Header com ícone e número */}
                    <div
                      className={`p-6 bg-gradient-to-r ${event.color} text-white relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold mb-1">
                            {stepNumber}°
                          </div>
                          <div className="text-white/90 text-sm font-medium">
                            Marco Histórico
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Área da imagem */}
                    <div className="relative">
                      <div
                        className={`w-full h-64 bg-gradient-to-br ${event.color} flex items-center justify-center transition-opacity relative overflow-hidden`}
                      >
                        {event.image ? (
                          <img
                            src={
                              typeof event.image === "string"
                                ? event.image
                                : event.image.src
                            }
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                          />
                        ) : (
                          <div className="absolute inset-4 border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center">
                            <div className="text-center text-gray-600">
                              <IconComponent className="w-16 h-16 mx-auto mb-3 opacity-50" />
                              <div className="text-lg font-medium">
                                Foto Histórica
                              </div>
                              <div className="text-sm opacity-75">
                                {stepNumber}° Marco - 2018/2019
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {event.description}
                      </p>

                      {/* Badge do número */}
                      <div className="mt-6">
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${event.color} bg-opacity-10 rounded-full`}
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${event.color} rounded-full`}
                          ></div>
                          <span className="text-sm font-medium text-gray-700">
                            {stepNumber}° Marco de 2018-2019
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
