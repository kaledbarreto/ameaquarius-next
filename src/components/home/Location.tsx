import React from "react";
import {
  MapPin,
  Navigation,
  Phone,
  Mail,
  Clock,
  Car,
  Bus,
  Home,
} from "lucide-react";

export default function Location() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Bairro Aquarius, Salvador - BA",
      details: "Centro de referência da comunidade",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(71) 3234-5678",
      details: "Atendimento de segunda a sexta",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@ameaquarius.com.br",
      details: "Resposta em até 24h",
    },
    {
      icon: Clock,
      title: "Funcionamento",
      info: "Seg - Sex: 8h às 18h",
      details: "Sábados: 8h às 12h",
    },
  ];

  const areaInfo = [
    {
      icon: Home,
      title: "20+ Condomínios",
      description: "Associados ativos",
    },
    {
      icon: Car,
      title: "Fácil Acesso",
      description: "Vias principais e transporte",
    },
    {
      icon: Bus,
      title: "Transporte Público",
      description: "Linhas de ônibus disponíveis",
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>

      {/* Elementos decorativos */}
      <div className="absolute top-32 right-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-16 w-64 h-64 bg-cyan-100/30 rounded-full blur-2xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-8">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Navigation className="w-4 h-4" />
            Nossa Localização
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Venha nos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Conhecer
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos localizados no coração do bairro Aquarius, em Salvador-BA.
            Nossa sede é um ponto de encontro para toda a comunidade.
          </p>
        </div>

        {/* Layout principal - Mapa + Informações */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-16">
          {/* Coluna de Informações - 1/3 do espaço, à esquerda */}
          <div className="lg:w-1/3 w-full flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-blue-600 font-medium mb-1">
                          {contact.info}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {contact.details}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna do Mapa - 2/3 do espaço, à direita */}
          <div className="lg:w-2/3 w-full flex items-stretch">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.764480126418!2d-38.45502118835752!3d-12.986910187277003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0e3b78182d%3A0x1f71c2a2107315ba!2sPra%C3%A7a%20Aquarius!5e0!3m2!1spt-BR!2sbr!4v1758378959648!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl w-full h-full min-h-[400px]"
            ></iframe>
          </div>
        </div>

        {/* Informações sobre a área */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Por que escolher o Aquarius?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {areaInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h4>

                  <p className="text-gray-600">{info.description}</p>
                </div>
              );
            })}
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
