# 🗄️ Etapa 1 — Modelagem do Banco de Dados
Definir as tabelas (mínimo 3, com FK). Sugestão para helpdesk:

usuarios – id, nome, email, senha, role (admin/user)
tickets – id, titulo, descricao, status, prioridade, criado_em, fk: usuario_id, categoria_id
categorias – id, nome, descricao

Isso já cobre o requisito de FK e 3 tabelas.

# ⚙️ Etapa 2 — Backend (API REST)
Construir a API com todas as operações CRUD para cada tabela. Stack sugerida: Node.js + Express + Prisma (ou Django, FastAPI — sua escolha).

Rotas para /usuarios, /tickets, /categorias
Cada rota com GET (listar/buscar), POST, PUT/PATCH e DELETE
Banco: PostgreSQL (funciona bem nas nuvens gratuitas)


# ☁️ Etapa 3 — Deploy do Backend
Subir a API em um serviço de nuvem gratuito. Opções recomendadas:

Render.com – fácil, aceita Node/Python, PostgreSQL incluso
Railway.app – similar, muito simples de configurar
O banco pode ficar no próprio Render/Railway ou no Supabase


# ⚛️ Etapa 4 — Frontend (PWA com React)
Criar a interface do helpdesk. Funcionalidades principais:

Listagem de tickets com filtros (status, prioridade)
Formulário para abrir novo ticket
Tela de detalhe com opção de editar/deletar
CRUD de categorias (tela admin simples)
Configurar como PWA: adicionar manifest.json e service worker (o create-react-app ou Vite PWA plugin já fazem isso)


# ☁️ Etapa 5 — Deploy do Frontend

Vercel ou Netlify – conecta direto no GitHub, deploy automático a cada push
Configurar a variável de ambiente com a URL da API em produção


# 🐙 Etapa 6 — GitHub e Entrega

Dois repositórios (ou um monorepo com pastas /frontend e /backend)
README com instruções de como rodar localmente
Entregar: link do GitHub + link do deploy da API + link do deploy do frontend