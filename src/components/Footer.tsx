import {
  Award,
  Clock,
  Facebook,
  FileText,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
  Youtube,
} from "lucide-react";
import Logo from "@/assets/images/logo.png";

export default function Footer() {
  const quickLinks = [
    { name: "Quem Somos", href: "#about" },
    { name: "Diretoria", href: "#board" },
    { name: "Governança", href: "#governance" },
    { name: "Conquistas", href: "#achievements" },
  ];

  const services = [
    { name: "Associação", href: "#join" },
    { name: "Relatórios", href: "#reports" },
    { name: "Documentos", href: "#documents" },
    { name: "Projetos", href: "#projects" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 ">
      {/* Curva decorativa superior */}
      {/* <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full fill-white transform rotate-180"
        >
          <path d="M0,120 C200,40 400,0 600,60 C800,120 1000,80 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div> */}

      {/* Elementos decorativos */}
      <div className="absolute top-32 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 pt-20">
        {/* Seção principal do footer */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Coluna 1 - Logo e Informações */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    src={Logo.src}
                    alt="Logo AMEAQUARIUS"
                    className="h-10 lg:h-14 w-auto"
                  />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Associação civil sem fins lucrativos, dedicada ao
                desenvolvimento e bem-estar da comunidade do bairro Aquarius.
              </p>

              {/* Estatísticas rápidas */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold text-white">20+</div>
                  <div className="text-xs text-gray-400">Condomínios</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold text-white">15</div>
                  <div className="text-xs text-gray-400">Anos</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-400">Transparente</div>
                </div>
              </div>
            </div>

            {/* Coluna 2 - Links Rápidos */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Links Rápidos
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 - Serviços */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                Serviços
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4 - Contato */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                Contato
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Bairro Aquarius</p>
                    <p className="text-gray-400 text-sm">Salvador - BA</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+5571"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      (71) 3234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:contato@ameaquarius.com.br"
                      className="text-gray-300 hover:text-cyan-400 transition-colors break-all"
                    >
                      contato@ameaquarius.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Seg - Sex: 8h às 18h</p>
                    <p className="text-gray-400 text-sm">Sábados: 8h às 12h</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Siga-nos
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                      >
                        <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Divisória */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Rodapé inferior */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pb-8">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 AMEAQUARIUS. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>para a comunidade</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Termos de Uso
                </a>
              </div>

              {/* Botão voltar ao topo */}
              {/* <button
                // onClick={scrollToTop}
                className="group w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
