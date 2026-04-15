📦 4.1 — Setup do Projeto

Criar o projeto com Vite + React
Instalar dependências principais: react-router-dom, axios, tailwindcss
Instalar o plugin de PWA: vite-plugin-pwa
Configurar estrutura de pastas do projeto

# FEITO
-🗂️ 4.2 — Estrutura de Pastas e Roteamento

Definir a estrutura (/pages, /components, /services, /hooks)
Configurar o react-router-dom com as rotas principais:

/tickets — listagem
/tickets/novo — criar
/tickets/:id — detalhe/editar
/categories — CRUD de categorias
/users — CRUD de usuários

# NAO FEITO
🔌 4.3 — Camada de Serviços (API)

Criar arquivo de configuração do axios com a baseURL da API
Criar um arquivo de serviço para cada entidade:

ticketService.js — getAll, getById, create, update, delete
categoriaService.js
usuarioService.js


🎨 4.4 — Layout Base

Criar componente de Navbar/Sidebar com navegação entre as seções
Criar componente de Layout que envolve todas as páginas
Configurar Tailwind e definir identidade visual básica


🎫 4.5 — Módulo de Tickets (core do sistema)
Essa é a parte principal, dividida em:

4.5.1 — Página de listagem com tabela/cards de tickets
4.5.2 — Filtros por status e prioridade
4.5.3 — Formulário de criação de ticket
4.5.4 — Página de detalhe do ticket
4.5.5 — Funcionalidade de editar ticket
4.5.6 — Funcionalidade de deletar ticket


🏷️ 4.6 — Módulo de Categorias

Listagem de categorias
Formulário criar/editar (pode ser um modal)
Deletar categoria


👤 4.7 — Módulo de Usuários

Listagem de usuários
Formulário criar/editar
Deletar usuário


📱 4.8 — Configurar PWA

Configurar o vite-plugin-pwa com manifest.json
Definir ícones, nome do app, cor do tema
Testar instalação no navegador (botão "Instalar app")


✅ 4.9 — Testes e Ajustes Finais

Testar todos os CRUDs conectados à API real
Verificar responsividade mobile
Tratar erros de requisição (loading, mensagens de erro)