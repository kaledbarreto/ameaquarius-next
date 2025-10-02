"use client";

import Footer from "@/components/Footer";
import {
  Calendar,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Lock,
  Search,
  Shield,
  X,
} from "lucide-react";
import { useState } from "react";

type Documento = {
  id: number;
  titulo: string;
  categoria: string;
  tipo: string;
  tamanho: string;
  dataPublicacao: string;
  descricao: string;
  arquivo: string;
  protegido?: boolean;
};

export default function DocumentosPage() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoAcao, setTipoAcao] = useState(""); // "download" ou "visualizar"
  const [documentoAtual, setDocumentoAtual] = useState<Documento | null>(null); // Documento sendo acessado
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const documentoPrincipal = {
    titulo: "ATA DE FUNDAÇÃO E ESTATUTO REGISTRADOS DA AMEAQUARIUS",
    descricao:
      "Documento oficial de fundação da Associação de Condomínios Residenciais, Comerciais e Mistos do Loteamento Aquarius",
    pdfUrl:
      "/assets/files/documents/ATA_DE_FUNDACAO_E_ESTATUTO_REGISTRADOS_DA_AMEAQUARIUS.pdf",
    paginas: 19,
    dataPublicacao: "26 de Setembro de 2026",
  };

  const outrosDocumentos = [
    {
      id: 1,
      titulo: "ATA E ESTATUTO ALTERADO EM 08-11-2022.pdf",
      categoria: "Estatuto",
      tipo: "PDF",
      tamanho: "6.6 MB",
      dataPublicacao: "08/11/2022",
      descricao:
        "Versão atualizada do estatuto com alterações aprovadas em assembleia",
      arquivo:
        "/assets/files/documents/ATA_E_ESTATUTO_ALTERADO_EM_08112022.PDF",
    },
    {
      id: 2,
      titulo: "ATA do Leblon",
      categoria: "Atas",
      tipo: "PDF",
      tamanho: "1.8 MB",
      dataPublicacao: "15/03/2024",
      descricao: "Ata da reunião realizada no condomínio Leblon",
      arquivo: "/assets/files/documents/ATA_LEBLON_PROTEGIDA.pdf", //Inválido
      protegido: true, // Documento protegido por senha
    },
    {
      id: 3,
      titulo:
        "Ações AmeAquarius primeiro semestre 2025-2026 revisada Karine.docx",
      categoria: "Relatórios",
      tipo: "DOCX",
      tamanho: "2.9 MB",
      dataPublicacao: "17/06/2025",
      descricao: "Relatório de ações realizadas no primeiro semestre",
      arquivo:
        "/assets/files/documents/ACOES_AMEAQUARIUS_PRIMEIRO_SEMESTRE_2025_2026_REVISADA_KARINE.docx",
    },
    {
      id: 4,
      titulo: "Registro da Ata de Eleição 2024-2026.pdf",
      categoria: "Atas",
      tipo: "PDF",
      tamanho: "5 MB",
      dataPublicacao: "20/01/2024",
      descricao:
        "Registro oficial da eleição da diretoria para o biênio 2024-2026",
      arquivo:
        "/assets/files/documents/REGISTRO_DA_ATA_DE_ELEICAO_2024__2026.PDF",
    },
    {
      id: 5,
      titulo:
        "Ações Primeiro Semestre 2025-2026 revisada Karine e Eldete 17/06/2025.pdf",
      categoria: "Relatórios",
      tipo: "PDF",
      tamanho: "11.2 MB",
      dataPublicacao: "17/06/2025",
      descricao: "Versão final revisada das ações do primeiro semestre",
      arquivo:
        "/assets/files/documents/ACOES_PRIMEIRO_SEMESTRE_20252026_REVISADA_KARINE_E_ELDETE_17062025.PDF",
    },
  ];

  const categorias = [
    { id: "todos", nome: "Todos", count: outrosDocumentos.length },
    {
      id: "Estatuto",
      nome: "Estatutos",
      count: outrosDocumentos.filter((d) => d.categoria === "Estatuto").length,
    },
    {
      id: "Atas",
      nome: "Atas",
      count: outrosDocumentos.filter((d) => d.categoria === "Atas").length,
    },
    {
      id: "Relatórios",
      nome: "Relatórios",
      count: outrosDocumentos.filter((d) => d.categoria === "Relatórios")
        .length,
    },
  ];

  const documentosFiltrados =
    filtroAtivo === "todos"
      ? outrosDocumentos
      : outrosDocumentos.filter((doc) => doc.categoria === filtroAtivo);

  const abrirModal = (acao: string, documento: Documento) => {
    setTipoAcao(acao);
    setDocumentoAtual(documento);
    setModalAberto(true);
    setSenha("");
    setErro("");
  };

  const fecharModal = () => {
    setModalAberto(false);
    setDocumentoAtual(null);
    setSenha("");
    setErro("");
  };

  const verificarSenha = () => {
    if (senha === "aquarius2024") {
      fecharModal();
      if (documentoAtual) {
        if (tipoAcao === "download") {
          // Criar link temporário para download
          const link = document.createElement("a");
          link.href = documentoAtual.arquivo;
          link.download = documentoAtual.titulo;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // Abrir em nova aba
          window.open(documentoAtual.arquivo, "_blank");
        }
      }
    } else {
      setErro("Senha incorreta!");
    }
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <Shield className="w-4 h-4" />
              Transparência e Documentação
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Documentos{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Oficiais
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              Acesse todos os documentos oficiais, estatutos, atas de reuniões e
              relatórios da AMEAQUARIUS de forma transparente e organizada.
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

      {/* Seção do Documento Principal em Destaque */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Card do Documento Principal */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl shadow-2xl border border-blue-500 overflow-hidden relative">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/10 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10 p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center md:items-start">
                  {/* Ícone e Badge */}
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                      <FileText className="w-12 h-12 text-white" />
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      <Shield className="w-4 h-4" />
                      Documento Oficial
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-100 text-sm font-semibold rounded-full mb-4">
                        Documento Principal
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        {documentoPrincipal.titulo}
                      </h2>
                      <p className="text-blue-100 text-lg leading-relaxed">
                        {documentoPrincipal.descricao}
                      </p>
                    </div>

                    {/* Metadados */}
                    <div className="flex flex-wrap gap-6 mb-8 text-white/90">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-blue-200">Páginas</p>
                          <p className="font-bold">
                            {documentoPrincipal.paginas}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-blue-200">Publicação</p>
                          <p className="font-bold">
                            {documentoPrincipal.dataPublicacao}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-blue-200">Status</p>
                          <p className="font-bold">Registrado</p>
                        </div>
                      </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={documentoPrincipal.pdfUrl}
                        download
                        className="group px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                      >
                        <span className="flex items-center gap-3">
                          <Download className="w-5 h-5" />
                          <span className="leading-none mt-1">
                            Download PDF
                          </span>
                          <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </span>
                      </a>

                      <a
                        href={documentoPrincipal.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer"
                      >
                        <Eye className="w-5 h-5" />
                        Visualizar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Outros Documentos */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6 lg:px-12 mb-8">
          <div className="max-w-6xl mx-auto">
            {/* Header com filtros */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Outros Documentos
                  </h2>
                  <p className="text-gray-600">
                    {documentosFiltrados.length} documentos disponíveis
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <div className="flex gap-2">
                    {categorias.map((categoria) => (
                      <button
                        key={categoria.id}
                        onClick={() => setFiltroAtivo(categoria.id)}
                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                          filtroAtivo === categoria.id
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {categoria.nome}
                        <span
                          className={`ml-2 text-xs ${
                            filtroAtivo === categoria.id
                              ? "text-blue-200"
                              : "text-gray-500"
                          }`}
                        >
                          ({categoria.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de documentos */}
            <div className="space-y-4">
              {documentosFiltrados.map((documento) => (
                <div
                  key={documento.id}
                  className="group bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                    {/* Ícone do documento */}
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        documento.tipo === "PDF"
                          ? "bg-gradient-to-r from-red-100 to-pink-100"
                          : "bg-gradient-to-r from-blue-100 to-cyan-100"
                      }`}
                    >
                      <FileText
                        className={`w-8 h-8 ${
                          documento.tipo === "PDF"
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                      />
                    </div>

                    {/* Informações do documento */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {documento.titulo}
                          </h3>
                          {documento.protegido && (
                            <div title="Documento protegido por senha">
                              <Shield className="w-4 h-4 text-orange-500" />
                            </div>
                          )}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                            documento.categoria === "Estatuto"
                              ? "bg-purple-100 text-purple-700"
                              : documento.categoria === "Atas"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {documento.categoria}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">
                        {documento.descricao}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {documento.tipo}
                        </span>
                        <span>{documento.tamanho}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {documento.dataPublicacao}
                        </span>
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="flex gap-2 flex-shrink-0">
                      {documento.protegido ? (
                        <>
                          <button
                            onClick={() => abrirModal("download", documento)}
                            className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl transition-colors cursor-pointer"
                          >
                            <Lock className="w-4 h-4" />
                            Download
                          </button>
                          <button
                            onClick={() => abrirModal("visualizar", documento)}
                            className="p-2 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-xl transition-colors cursor-pointer"
                            title="Visualizar documento protegido"
                          >
                            <Lock className="w-5 h-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <a
                            href={documento.arquivo}
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                          {documento.tipo === "PDF" ? (
                            <a
                              href={documento.arquivo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                              title="Visualizar em nova aba"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          ) : (
                            <span className="p-2 w-9 h-9 inline-flex items-center justify-center opacity-0 select-none">
                              <ExternalLink className="w-5 h-5" />
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mensagem quando não há documentos */}
            {documentosFiltrados.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Nenhum documento encontrado nesta categoria
                </p>
              </div>
            )}
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

      {/* Modal de Senha */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
            {/* Botão fechar */}
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Ícone e título */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Documento Protegido
              </h3>
              <p className="text-gray-600">
                Digite a senha para{" "}
                {tipoAcao === "download" ? "baixar" : "visualizar"} este
                documento
              </p>
            </div>

            {/* Campo de senha */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  setErro("");
                }}
                onKeyPress={(e) => e.key === "Enter" && verificarSenha()}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                placeholder="Digite sua senha"
                autoFocus
              />
              {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}
            </div>

            {/* Botões */}
            <div className="flex gap-3">
              <button
                onClick={fecharModal}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={verificarSenha}
                className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-medium cursor-pointer"
              >
                {tipoAcao === "download" ? "Baixar" : "Visualizar"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
