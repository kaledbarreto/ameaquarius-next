import { Construction } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-2xl">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Construction className="w-12 h-12 text-cyan-400" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-bold text-white">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Site em Manutenção
          </h2>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-gray-400 text-lg">
            O site da AMEAQUARIUS está temporariamente indisponível.
          </p>
          <p className="text-gray-500">
            Estamos trabalhando para trazer melhorias. Por favor, volte em
            breve.
          </p>
        </div>

        {/* Contact */}
        {/* <div className="pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            Em caso de urgência, entre em contato:
          </p>
          <a
            href="mailto:associcaoameaquarius@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            associcaoameaquarius@gmail.com
          </a>
        </div> */}
      </div>
    </div>
  );
}
