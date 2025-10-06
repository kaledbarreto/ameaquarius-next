import {
  Award,
  Building,
  Building2,
  Calendar,
  CheckCircle,
  MapPin,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import AboutImage01 from "../../assets/images/home/about_01.jpeg";
import AboutImage02 from "../../assets/images/home/about_02.jpeg";
import AboutImage03 from "../../assets/images/home/about_03.jpeg";
import AboutImage04 from "../../assets/images/home/about_04.jpg";

export default function AboutTransformation() {
  const highlights = [
    {
      icon: Calendar,
      title: "2023",
      description: "Vídeo especial produzido",
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Identidade própria consolidada",
    },
    {
      icon: Building,
      title: "Infraestrutura",
      description: "Completa e moderna",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Unida e organizada",
    },
  ];

  // Array de imagens
  const images = [
    {
      src: AboutImage01,
      alt: "Imagem 1",
    },
    {
      src: AboutImage02,
      alt: "Imagem 2",
    },
    {
      src: AboutImage03,
      alt: "Imagem 3",
    },
    {
      src: AboutImage04,
      alt: "Imagem 4",
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background e elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-cyan-100/30 rounded-full blur-2xl"></div>
      <div className="absolute top-32 left-10 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-16 w-80 h-80 bg-cyan-100/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-0">
        {/* Header principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Nossa História
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Quem{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Somos?
            </span>
          </h2>
        </div>

        {/* Grid principal - AboutUs + Transformation */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-32">
          {/* Coluna de texto - AboutUs */}
          <div className="lg:col-span-1.5 space-y-6">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A <strong className="text-blue-600">AMEAQUARIUS</strong> é uma
                associação civil, pessoa jurídica de direito privado, sem fins
                lucrativos, como está regida em seu estatuto conforme legislação
                específica.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Tem como órgãos a diretoria executiva, conselho fiscal e
                consultivo, eleitos em assembleia, sem qualquer tipo de
                remuneração pelo exercício de seus cargos.
              </p>
              <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <p
                  className="text-gray-800 font-medium"
                  style={{ fontSize: "18px" }}
                >
                  <strong className="text-blue-600">
                    A AMEAQUARIUS É RECONHECIDA COMO CASE DE SUCESSO
                  </strong>
                  , tendo sido convidada algumas vezes como{" "}
                  <strong>
                    AGENTE MULTIPLICADOR PARA O SURGIMENTO DE OUTRAS ASSOCIAÇÕES
                  </strong>
                  .
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Venha conhecer nosso trabalho, a fim de compartilharmos nossas
                experiências.
              </p>
            </div>
            {/* CTA */}
            <div className="pt-4 flex justify-center">
              <Link
                href="/OurHistory"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Conheça Nosso Trabalho
                  <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </span>
              </Link>
            </div>
          </div>
          {/* Coluna de imagens - AboutUs */}
          <div className="lg:col-span-1.5">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square min-h-[110px] md:min-h-[150px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-xl flex items-center justify-center overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={typeof img.src === "string" ? img.src : img.src.src}
                    alt={img.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header secundário - Transformation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            Nossa História em Vídeo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            Transformação do Aquarius:{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              De Loteamento a Bairro Oficial
            </span>
          </h2>
        </div>

        {/* Layout principal - Grid adaptativo Transformation */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Coluna do texto - 3/5 do espaço */}
          <div className="lg:col-span-3 space-y-8">
            {/* Texto principal em cards */}
            <div className="space-y-6">
              {/* Card 1 - Contexto */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">O Projeto</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Em <strong>2023</strong>, foi produzido um vídeo especial com
                  o objetivo de apresentar e convencer as autoridades municipais
                  sobre o potencial do Loteamento Aquarius para se tornar
                  oficialmente um bairro. A proposta era evidenciar as
                  características únicas da região e mostrar como ela já possuía
                  uma{" "}
                  <strong>
                    identidade própria, infraestrutura completa e uma comunidade
                    consolidada
                  </strong>{" "}
                  que legalmente permitia a transformação em Bairro.
                </p>
              </div>
              {/* Card 2 - Estratégia */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">A Defesa</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  O vídeo foi utilizado como um dos principais materiais na
                  defesa do projeto, destacando a importância do reconhecimento
                  oficial para fortalecer a organização local, facilitar a
                  logística de serviços públicos e fomentar o desenvolvimento
                  econômico respeitando as peculiaridades locais. Por isso, a
                  produção abordou elementos fundamentais que diferenciavam o
                  Aquarius.
                </p>
              </div>
              {/* Card 3 - Conquistas */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    O Resultado
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hoje, com orgulho, disponibilizamos esse vídeo em nosso site
                  para que todos possam assistir e compreender o caminho
                  percorrido, principalmente analisar as características que
                  permitiram a aprovação em Bairro, depois muita dedicação para
                  com o apoio do <strong>Prefeito Bruno Reis</strong>, do{" "}
                  <strong>vereador Palhinha</strong>, morador do loteamento
                  desde 1998, a aprovação do projeto de lei na câmara de
                  vereadores da cidade do Salvador.
                </p>
              </div>
            </div>
          </div>
          {/* Coluna do vídeo - 2/5 do espaço */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              {/* Cards com destaques acima do vídeo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Container do vídeo */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/B3HJ_QZQWLc?start=1"
                    title="Bairro Aquarius - Documentário Oficial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-3xl"
                  ></iframe>
                </div>
                {/* Informações do vídeo */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        Documentário Oficial
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Conheça a jornada completa da transformação do Aquarius,
                        desde loteamento até o reconhecimento oficial como
                        bairro.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Informação adicional */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Aquarius - Salvador, BA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
