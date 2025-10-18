# 🛡️ Golpes.org

> Portal brasileiro de prevenção e denúncia de fraudes e golpes digitais

![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646cff?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?logo=tailwindcss)

## 📋 Sobre o Projeto

**Golpes.org** é uma plataforma web desenvolvida para conscientizar e proteger brasileiros contra fraudes e golpes digitais. O portal oferece um catálogo completo de golpes comuns, orientações de prevenção, e um sistema de denúncias colaborativo.

### 🎯 Missão

Criar uma comunidade segura onde pessoas possam aprender sobre golpes, compartilhar experiências e ajudar outras pessoas a se protegerem contra fraudes.

## ✨ Funcionalidades

- 🔍 **Pesquisa de Golpes**: Base de dados completa com os golpes mais comuns no Brasil
- 📱 **Catálogo Detalhado**: Informações sobre PIX falso, WhatsApp clonado, falso sequestro, romance virtual e mais
- 📝 **Sistema de Denúncias**: Formulário para reportar novos golpes
- 🛡️ **Guias de Prevenção**: Orientações passo a passo sobre como se proteger
- ⚠️ **Alertas em Tempo Real**: Informações sobre golpes em alta
- 📊 **Estatísticas**: Dados sobre golpes catalogados e denúncias recebidas
- 🔗 **Links Úteis**: Acesso direto a canais oficiais de denúncia (Procon, Banco Central, Polícia)

## 🚀 Tecnologias

### Core
- **[React](https://react.dev/)** `18.3.1` - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** `5.5.3` - Tipagem estática
- **[Vite](https://vitejs.dev/)** `5.4.2` - Build tool e dev server

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** `3.4.1` - Framework CSS utilitário
- **[PostCSS](https://postcss.org/)** `8.4.35` - Processamento CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** `10.4.18` - Prefixos CSS automáticos
- **[Lucide React](https://lucide.dev/)** `0.344.0` - Ícones modernos

### Routing
- **[React Router DOM](https://reactrouter.com/)** `6.26.1` - Navegação SPA

### Code Quality
- **[ESLint](https://eslint.org/)** `9.9.1` - Linter JavaScript/TypeScript
- **[TypeScript ESLint](https://typescript-eslint.io/)** `8.3.0` - Regras ESLint para TS

## 📦 Instalação

### Pré-requisitos

- **Node.js** >= 18.x
- **npm** >= 9.x ou **yarn** >= 1.22.x

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/yourusername/golpes.org-dev.git
cd golpes.org-dev
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com hot reload |
| `npm run build` | Gera build de produção otimizado na pasta `/dist` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa ESLint para verificar qualidade do código |

## 📁 Estrutura do Projeto

```
golpes.org-dev/
├── src/
│   ├── components/           # Componentes React
│   │   ├── HomePage.tsx      # Página inicial com estatísticas e CTAs
│   │   ├── Layout.tsx        # Layout principal com header/footer
│   │   ├── GolpeDetail.tsx   # Página de detalhes do golpe
│   │   ├── ReportForm.tsx    # Formulário de denúncia
│   │   └── SearchGolpes.tsx  # Página de busca e listagem
│   ├── data/
│   │   └── golpes.ts         # Base de dados dos golpes
│   ├── App.tsx               # Componente raiz com rotas
│   ├── main.tsx              # Entry point da aplicação
│   ├── index.css             # Estilos globais e Tailwind
│   └── vite-env.d.ts         # Definições de tipos do Vite
├── public/                   # Assets estáticos
├── dist/                     # Build de produção (gerado)
├── index.html                # HTML template
├── vite.config.ts            # Configuração do Vite
├── tailwind.config.js        # Configuração do Tailwind
├── postcss.config.js         # Configuração do PostCSS
├── tsconfig.json             # Configuração TypeScript principal
├── tsconfig.app.json         # Config TS para aplicação
├── tsconfig.node.json        # Config TS para scripts Node
├── eslint.config.js          # Configuração ESLint
├── package.json              # Dependências e scripts
└── CNAME                     # Configuração de domínio customizado
```

## 🎨 Componentes Principais

### HomePage
Página inicial com:
- Hero section com CTAs principais
- Estatísticas do portal (golpes catalogados, pessoas alertadas, denúncias)
- Seção de alertas sobre golpes em alta
- Como funciona o portal

### SearchGolpes
Interface de busca e listagem de golpes com:
- Cards visuais para cada tipo de golpe
- Navegação para detalhes
- Categorização por tipo

### GolpeDetail
Página de detalhes contendo:
- Descrição completa do golpe
- Como prevenir (checklist)
- O que fazer se for vítima
- Imagem ilustrativa

### ReportForm
Formulário para denúncias com campos para:
- Tipo de golpe
- Descrição da experiência
- Informações para autoridades

### Layout
Template principal incluindo:
- Header com navegação
- Logo e menu responsivo
- Footer com links úteis (Procon, Banco Central, Polícia)
- Contatos para denúncias oficiais

## 🗄️ Dados dos Golpes

Atualmente catalogados em `src/data/golpes.ts`:

1. **PIX Falso** - Chaves falsas e interceptação de transações
2. **WhatsApp Clonado** - Golpistas pedindo dinheiro aos contatos
3. **Falso Sequestro** - Ligações fingindo ter sequestrado familiar
4. **Cartão Clonado** - Dispositivos em caixas e sites falsos
5. **Romance Virtual** - Perfis falsos pedindo dinheiro

Cada golpe contém:
- ID único
- Título e descrição
- Imagem ilustrativa
- Steps: "Como Prevenir?" e "O que Fazer?"

## 🚀 Build e Deploy

### Build de Produção

```bash
npm run build
```

O build otimizado será gerado na pasta `dist/` com:
- Minificação de código
- Tree-shaking
- Code splitting
- Assets otimizados

### Deploy

#### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages (Automated with GitHub Actions)

O projeto está configurado para deploy automático via GitHub Actions. Basta fazer push para a branch `main`:

```bash
git add .
git commit -m "Deploy changes"
git push origin main
```

**Configuração inicial necessária:**

1. Acesse as configurações do seu repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. O deploy acontecerá automaticamente a cada push na branch `main`

O workflow está em `.github/workflows/deploy.yml` e:
- Instala as dependências
- Faz o build do projeto
- Publica automaticamente na GitHub Pages

**Nota:** Se estiver usando um domínio customizado (como `golpes.org`), mantenha o arquivo `CNAME` na raiz do projeto.

#### GitHub Pages (Manual - método antigo)

Se preferir deploy manual:

```bash
npm run build
# Copie o conteúdo de dist/ para a branch gh-pages
```

#### Servidor Próprio

Após o build, sirva os arquivos da pasta `dist/` com qualquer servidor web:
```bash
npm run preview  # para testar localmente
```

## 🌐 Domínio Customizado

O projeto está configurado para usar o domínio `golpes.org` (arquivo `CNAME`).

Para alterar:
1. Edite o arquivo `CNAME` na raiz
2. Configure os DNS records no seu provedor:
   - Tipo A apontando para o IP do servidor
   - ou CNAME apontando para o domínio do hosting

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Navegação por teclado
- Labels semânticos
- Contraste de cores adequado
- Ícones com significado contextual

## 🔒 Segurança

- Sem armazenamento de dados sensíveis no frontend
- Links externos com `rel="noopener noreferrer"`
- Validação de formulários
- CSP-friendly

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Siga as regras do ESLint configuradas
- Mantenha o código TypeScript tipado
- Use Tailwind para estilos (evite CSS inline)
- Componentes funcionais com hooks
- Nomeie componentes em PascalCase
- Nomeie arquivos de componentes com `.tsx`

## 📝 Roadmap

- [ ] Sistema de autenticação para denúncias
- [ ] Dashboard de administração
- [ ] API backend para gerenciar golpes
- [ ] Sistema de notificações por e-mail
- [ ] Integração com redes sociais
- [ ] App mobile (React Native)
- [ ] Sistema de comentários e avaliações
- [ ] Modo escuro
- [ ] Internacionalização (i18n)
- [ ] Chatbot de orientação

## 📊 Status do Projeto

🟢 **Ativo** - Em desenvolvimento e manutenção contínua

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Ebenezer** - Desenvolvimento inicial

## 🙏 Agradecimentos

- Comunidade React e Vite
- Contribuidores do projeto
- Vítimas de golpes que compartilharam suas histórias
- Órgãos oficiais de proteção ao consumidor

## 📞 Canais Oficiais de Denúncia

- **Procon**: https://www.gov.br/pt-br/servicos/registrar-reclamacao-no-procon
- **Banco Central - Registrato**: https://www.bcb.gov.br/estabilidadefinanceira/registrato
- **Polícia Civil**: 190
- **Disque Denúncia**: 181

## 📧 Contato

- **Website**: [golpes.org](https://golpes.org)
- **Email**: contato@golpes.org

---

<div align="center">
  <strong>🛡️ Proteja-se. Informe-se. Ajude outros. 🛡️</strong>
</div>

<div align="center">
  Desenvolvido com ❤️ para um Brasil mais seguro
</div>

