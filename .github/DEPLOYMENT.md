# 🚀 Deployment Guide

## GitHub Pages - Automated Deployment

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Como Funciona

1. **Você faz push para `main`**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **GitHub Actions é acionado automaticamente**
   - Instala Node.js 18
   - Instala dependências (`npm ci`)
   - Faz build do projeto (`npm run build`)
   - Publica o conteúdo de `dist/` no GitHub Pages

3. **Site é atualizado**
   - Disponível em `https://golpes.org` (ou seu domínio configurado)
   - Ou `https://[username].github.io/[repo-name]` se não tiver domínio customizado

### Configuração Inicial (Uma vez apenas)

#### 1. Habilitar GitHub Actions no Repositório

1. Acesse seu repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Build and deployment** > **Source**, selecione **GitHub Actions**

![GitHub Pages Source](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/publishing-source-drop-down.webp)

#### 2. Permissões do Workflow

As permissões já estão configuradas no arquivo `.github/workflows/deploy.yml`:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

#### 3. Domínio Customizado (Opcional)

Se você tem um domínio customizado como `golpes.org`:

1. Mantenha o arquivo `CNAME` na pasta `public/` (já configurado)
2. No GitHub:
   - Vá em **Settings** > **Pages**
   - Em **Custom domain**, digite `golpes.org`
   - Clique em **Save**

3. Configure os DNS no seu provedor de domínio:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: [seu-username].github.io
   ```

### Verificar Status do Deploy

1. Vá para a aba **Actions** no seu repositório
2. Veja o workflow "Deploy to GitHub Pages" em execução
3. Clique no workflow para ver logs detalhados
4. ✅ Verde = Deploy bem-sucedido
5. ❌ Vermelho = Erro (veja os logs para debug)

### Workflow File

O arquivo de configuração está em `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main      # Deploy automático quando push em main
  workflow_dispatch: # Permite deploy manual pela interface
```

### Vantagens desta Abordagem

✅ **Branch `main` limpa** - Apenas código-fonte, sem arquivos de build  
✅ **Automático** - Push e esqueça, o GitHub faz o resto  
✅ **Versionamento** - Histórico completo apenas do código  
✅ **Rollback fácil** - Reverta commits e o deploy reverte junto  
✅ **Build consistente** - Sempre usa o mesmo ambiente  
✅ **CI/CD profissional** - Workflow moderno e escalável  

### Deploy Manual (Se Necessário)

Se quiser fazer deploy manual pela interface do GitHub:

1. Vá em **Actions**
2. Clique em "Deploy to GitHub Pages"
3. Clique em **Run workflow**
4. Selecione a branch `main`
5. Clique em **Run workflow** (botão verde)

### Troubleshooting

#### Build Falhou

Verifique os logs do Actions para ver o erro. Causas comuns:

- **Erro de dependência**: `npm ci` falhou
  - Solução: Delete `package-lock.json` e rode `npm install` localmente
  
- **Erro de lint**: ESLint encontrou erros
  - Solução: Execute `npm run lint` localmente e corrija os erros
  
- **Erro de build**: TypeScript ou Vite error
  - Solução: Execute `npm run build` localmente para reproduzir o erro

#### Site Não Atualiza

- Aguarde 1-2 minutos após o deploy (cache do GitHub)
- Limpe o cache do navegador (Ctrl+F5)
- Verifique se o workflow completou com sucesso
- Verifique se o arquivo `CNAME` está em `public/`

#### 404 em Rotas

Como é uma SPA (Single Page Application), você precisa configurar o fallback para `index.html`.

Solução: Adicione um arquivo `public/404.html` que redireciona para `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

E adicione no `public/index.html` (se necessário para rotas do React Router):

```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

### Arquivos Importantes

- `.github/workflows/deploy.yml` - Configuração do GitHub Actions
- `public/CNAME` - Domínio customizado (copiado para dist/ no build)
- `vite.config.ts` - Configuração do Vite
- `.gitignore` - Garante que `dist/` não seja commitado

### Comandos Úteis

```bash
# Testar build localmente
npm run build

# Testar o build localmente
npm run preview

# Ver se há erros de lint
npm run lint

# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Referências

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

