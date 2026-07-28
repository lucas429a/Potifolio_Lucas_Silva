# Projeto 6 Cordas — Especificações Técnicas (para Portfólio)

**App web de gestão de um projeto social gratuito de aulas de violão e teoria musical**, com aulas de segunda a quinta em uma escola do bairro. O sistema gerencia turmas, alunos, presença, material didático (PDFs) e um dicionário musical.

- Deploy: https://projeto-6-cordas.vercel.app/
- Repositório: https://github.com/lucas429a/projeto6cordas

---

## Resumo para o portfólio (versão curta)

> **6 Cordas** — Aplicação web full-stack (Next.js 16 + React 19 + TypeScript + Supabase) para gestão de um projeto social de ensino de violão. Inclui autenticação com dois perfis (admin/aluno), painel administrativo com CRUD de turmas, alunos e aulas, controle de presença (chamada digital), liberação progressiva de material em PDF por turma e dicionário de acordes/cifras. Banco PostgreSQL com Row Level Security, storage privado com URLs assinadas e deploy na Vercel.

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | **Next.js 16.2** (App Router, Server Components, Server Actions) |
| UI | **React 19.2**, **Tailwind CSS 4** (via PostCSS), react-icons |
| Linguagem | **TypeScript 5** (strict) |
| Backend/BaaS | **Supabase** — PostgreSQL, Auth, Storage |
| Auth SSR | `@supabase/ssr` com gerenciamento de sessão via cookies |
| Qualidade | ESLint 9 + eslint-config-next |
| Deploy | Vercel |
| Testes de API | Coleção Insomnia versionada no repo |

## Arquitetura

- **App Router do Next.js** com três áreas segmentadas por rota:
  - `/` — landing page institucional pública (descrição do projeto, local, horários, contatos)
  - `/login` — autenticação por e-mail/senha
  - `/app/*` — área do aluno (perfil, minhas aulas/progresso, dicionário)
  - `/admin/*` — painel do professor/admin (dashboard, turmas, alunos, aulas, chamada, dicionário)
- **Proxy/middleware de autenticação** (`proxy.ts` + `lib/supabase/middleware.ts`): renova a sessão a cada request, protege todas as rotas não públicas e redireciona o usuário logado para `/admin` ou `/app` conforme o **role** do perfil.
- **Server Actions** (`'use server'`) para todas as mutações (login/logout, CRUD de alunos, aulas, dicionário) — sem API REST manual, com `revalidatePath` para atualização do cache.
- **Dois clientes Supabase no servidor**: um com a sessão do usuário (anon key + cookies) e um `createAdminClient` com **service role key** (nunca exposta ao browser), usado apenas em ações administrativas protegidas por `requireAdmin()` (defesa em profundidade: verificação de role no servidor + RLS no banco).
- Páginas do aluno renderizadas como **React Server Components** (busca de dados direto no servidor); telas administrativas interativas como **Client Components** com `useTransition`.

## Modelagem de Dados (PostgreSQL / Supabase)

7 tabelas com migrations SQL versionadas (`supabase/migrations/`):

- `profiles` — perfil ligado a `auth.users` (trigger de criação automática), com `role` (`admin` | `student`), dados pessoais, responsável, gênero/música favorita
- `turmas` — nome, dia(s) da semana (seg–qui, com segundo dia opcional via migration incremental), horário de início/fim
- `turma_students` — vínculo aluno↔turma (1 turma por aluno, PK no aluno)
- `lessons` — aulas numeradas com apostila em PDF
- `turma_lesson_unlocks` — **liberação progressiva de conteúdo**: quais aulas cada turma já pode acessar
- `attendance` — presença diária por turma/aluno/data (constraint de unicidade)
- `dictionary_items` — dicionário musical (acorde, cifra, postura) com imagem e tags (`text[]`)

Extras de banco:
- Triggers `set_updated_at` e `handle_new_user` (criação automática de perfil no signup, `security definer`)
- Funções helper `is_admin()` e `my_turma_id()` reutilizadas nas policies

## Segurança

- **Row Level Security habilitado em todas as tabelas**, com políticas granulares:
  - Aluno só vê o próprio perfil, o próprio vínculo de turma, as próprias presenças e **apenas as aulas liberadas para a sua turma**
  - Policy de update impede o aluno de elevar o próprio `role`
  - Admin gerencia tudo via `is_admin()`
- **Storage privado** (buckets `pdfs`, `images`, `photos`) com policies próprias: leitura só autenticada, upload/exclusão só admin; no bucket de fotos, cada aluno só escreve na própria pasta (`userId/...`)
- PDFs e imagens servidos via **URLs assinadas** (signed URLs) — nada público
- Service role key usada exclusivamente em Server Actions, com verificação de admin antes de cada operação

## Funcionalidades

**Área do aluno**
- Login e redirecionamento por perfil
- "Minhas Aulas": lista das apostilas liberadas para a turma, com download do PDF por URL assinada
- Perfil editável com upload de foto
- Dicionário musical com busca/filtragem por tipo e tags

**Painel do professor (admin)**
- Dashboard com visão geral
- CRUD de turmas (dias e horários)
- CRUD de alunos: cria o usuário no Supabase Auth (com rollback se falhar o perfil), vincula à turma
- CRUD de aulas com upload de PDF + matriz de liberação de aulas por turma
- **Chamada digital**: seleção de turma e data, marcação de presença com upsert idempotente
- Gestão do dicionário musical

## Destaques técnicos (o que citar em entrevista)

1. **Autorização em camadas**: middleware de rota → checagem de role em Server Actions → RLS no PostgreSQL → policies de Storage
2. **Liberação progressiva de conteúdo** modelada relacionalmente (`turma_lesson_unlocks`) e imposta no próprio banco via RLS — o aluno não consegue acessar aula não liberada nem via API direta
3. **Next.js moderno**: App Router, Server Components, Server Actions e SSR de sessão com `@supabase/ssr` (padrão atual de cookies, sem helpers deprecados)
4. **Migrations SQL versionadas** com evolução incremental do schema (ex.: `004_turma_weekday2.sql` adicionando segundo dia de aula)
5. **Tratamento de consistência**: rollback manual (delete do usuário Auth) quando a criação do perfil falha; upserts idempotentes na chamada e no vínculo de turma
6. **Projeto de impacto social real em produção**, usado semanalmente para gerir turmas, presença e material didático










LINK DO SITE DO PROJETO https://projeto-6-cordas.vercel.app/
LINK DO CODIGO https://github.com/lucas429a/projeto6cordas

VOU COLCOcAR 4 IMAGENSD ENTRO DE assets com imagens de telas internas do projeto, nessa sessão enfatize bem que é um trablho social totlamente gratuito e que tem ajudado a pobre comunidad locla, eu dou aulas de segunda a quinta e tenho cerca de 15 alinios entre crianças e adultos 
