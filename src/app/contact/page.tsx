"use client";

import Footer from "@/components/Footer";
import {
  AlertCircle,
  Building,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormStatus("standby");
    setTimeout(() => setFormStatus("idle"), 2000);
    // EmailJS temporariamente desativado
    // Para reativar, descomente o bloco abaixo:
    /*
    setFormStatus("sending");
    const SERVICE_ID = "service_0y4dtlv";
    const TEMPLATE_ID = "template_ltkp4sr";
    const PUBLIC_KEY = "0iORqeR7J_GxuaDIY";
    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      message: formData.mensagem,
    };
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setFormStatus("success");
      setFormData({ nome: "", email: "", mensagem: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
    */
  };

  const contatoInfo = {
    endereco: {
      rua: "Rua Desembargador Álvaro Clemente de Oliveira",
      cep: "41771-020",
      bairro: "Bairro Aquarius",
      cidade: "Salvador - Bahia",
    },
    contatos: [
      {
        tipo: "Telefone Principal",
        valor: "(71) 991857238",
        icone: Phone,
        descricao: "Atendimento de segunda a sexta, 8h às 18h",
      },
      {
        tipo: "WhatsApp",
        valor: "(71) 99185-7238",
        icone: MessageCircle,
        descricao: "Atendimento rápido via WhatsApp",
      },
      {
        tipo: "E-mail Institucional",
        valor: "associcaoameaquarius@gmail.com",
        icone: Mail,
        descricao: "Resposta em até 24 horas",
      },
    ],
    horarios: [
      { dia: "Segunda a Sexta", horario: "8h às 18h" },
      { dia: "Sábados", horario: "8h às 12h" },
      { dia: "Domingos", horario: "Fechado" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-80 h-80 bg-blue-300/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 mt-4 md:mb-8 md:mt-0 border border-white/20">
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Contate-nos
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              Estamos aqui para ouvir você e fortalecer ainda mais nossa
              comunidade. Entre em contato conosco através dos canais
              disponíveis.
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

      {/* Seção Principal - Formulário e Informações */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Formulário de Contato */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envie sua Mensagem
                </h2>

                <div className="space-y-6">
                  {/* Nome */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Seu e-mail"
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="mensagem"
                      rows={6}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Sua mensagem"
                    />
                  </div>

                  {/* Status do formulário */}
                  {formStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        Mensagem enviada com sucesso! Retornaremos em breve.
                      </span>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                      <AlertCircle className="w-5 h-5" />
                      <span>Erro ao enviar mensagem. Tente novamente.</span>
                    </div>
                  )}

                  {/* Botão de Envio */}
                  <button
                    onClick={handleSubmit}
                    disabled={
                      formStatus === "sending" ||
                      !formData.nome.trim() ||
                      !formData.email.trim() ||
                      !formData.mensagem.trim()
                    }
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {formStatus === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {/* Endereço */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Nosso Endereço
                  </h3>
                </div>

                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{contatoInfo.endereco.rua}</p>
                      <p>CEP: {contatoInfo.endereco.cep}</p>
                      <p>{contatoInfo.endereco.bairro}</p>
                      <p>{contatoInfo.endereco.cidade}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações de Contato */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Canais de Contato */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Canais de Contato
                </h3>

                <div className="space-y-4">
                  {contatoInfo.contatos.map((contato, index) => {
                    const IconComponent = contato.icone;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {contato.tipo}
                          </h4>
                          <p className="text-blue-600 font-medium mb-3">
                            {contato.valor}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {contato.descricao}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Horários */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Horário de Atendimento
                  </h3>
                </div>

                <div className="space-y-3">
                  {contatoInfo.horarios.map((horario, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-3"
                    >
                      <span className="font-medium text-gray-900">
                        {horario.dia}
                      </span>
                      <span className="text-gray-600">{horario.horario}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
