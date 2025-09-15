# Ameaquarius Next.js Boilerplate

Um projeto boilerplate completo com Next.js e todas as ferramentas necessárias para desenvolvimento e produção.

## ✨ Características

- **Next.js 15** com App Router
- **React 19** - Última versão
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Styling utilitário moderno
- **ESLint** - Análise de código
- **Turbopack** - Bundler ultra-rápido para desenvolvimento
- **Componentes reutilizáveis** - Estrutura de componentes organizada
- **Configuração de segurança** - Headers de segurança configurados
- **Otimização de imagens** - Next.js Image optimization
- **Estrutura de pastas organizada** - Seguindo as melhores práticas

## 🚀 Começando

### Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd ameaquarius-next
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```
Edite `.env.local` com suas configurações.

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx          # Página inicial
│   └── about/            # Página sobre
├── components/            # Componentes reutilizáveis
│   ├── Button.tsx        # Componente de botão
│   └── Navigation.tsx    # Navegação
├── lib/                  # Funções utilitárias
│   └── utils.ts          # Utilitários gerais
├── types/                # Definições TypeScript
│   └── index.ts          # Tipos globais
└── hooks/                # React hooks customizados

public/                   # Assets estáticos
├── favicon.ico          # Favicon
└── *.svg               # Ícones SVG

Arquivos de configuração:
├── .env.example         # Exemplo de variáveis de ambiente
├── .gitignore          # Git ignore
├── eslint.config.mjs   # Configuração ESLint
├── next.config.ts      # Configuração Next.js
├── package.json        # Dependências e scripts
├── postcss.config.mjs  # Configuração PostCSS
├── tailwind.config.ts  # Configuração Tailwind
└── tsconfig.json       # Configuração TypeScript
```

## 🛠 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento com Turbopack

# Produção
npm run build           # Cria build de produção
npm run start           # Inicia servidor de produção
npm run preview         # Build + start em sequência

# Qualidade de código
npm run lint            # Executa ESLint
npm run lint:fix        # Corrige problemas do ESLint automaticamente
npm run type-check      # Verifica tipos TypeScript

# Utilidades
npm run clean           # Limpa arquivos de build
```

## 🎨 Customização

### Tailwind CSS

O projeto usa Tailwind CSS v4. Para customizar:

1. Edite o arquivo `src/app/globals.css`
2. Modifique a configuração em `tailwind.config.ts`

### Componentes

Crie novos componentes em `src/components/`:

```typescript
// src/components/MeuComponente.tsx
interface MeuComponenteProps {
  title: string;
}

export function MeuComponente({ title }: MeuComponenteProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
```

### Páginas

Adicione novas páginas em `src/app/`:

```typescript
// src/app/nova-pagina/page.tsx
export default function NovaPagina() {
  return (
    <main>
      <h1>Minha Nova Página</h1>
    </main>
  );
}
```

## 🔒 Segurança

O projeto inclui headers de segurança configurados no `next.config.ts`:

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## 📈 Performance

- **Turbopack** para desenvolvimento ultra-rápido
- **Next.js Image** para otimização automática de imagens
- **Static Generation** onde possível
- **Bundle optimization** automática

## 🚀 Deploy

### Vercel (Recomendado)

1. Push para GitHub/GitLab/Bitbucket
2. Conecte no [Vercel](https://vercel.com)
3. Deploy automático

### Outros provedores

```bash
# Build para produção
npm run build

# Os arquivos estáticos ficam em .next/
# Configure seu servidor para servir esses arquivos
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🔗 Links Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Desenvolvido com ❤️ para a comunidade Ameaquarius
