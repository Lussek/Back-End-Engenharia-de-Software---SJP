# 🍽️ Restaurant Ordering System

API REST de pedidos para restaurante, desenvolvida em **Node.js + TypeScript** com **Express** e **Supabase** (PostgreSQL) como banco de dados.

Projeto da disciplina de **Desenvolvimento Back-End** — Engenharia de Software, 4º período, Turma B (sex).

## 📋 Sumário

- [Tecnologias](#-tecnologias)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e execução](#-instalação-e-execução)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Endpoints](#-endpoints)
- [Scripts](#-scripts)
- [Status do projeto](#-status-do-projeto)
- [Autor](#-autor)
- [Licença](#-licença)

## 🛠 Tecnologias

- [Node.js](https://nodejs.org/) (ES Modules)
- [TypeScript](https://www.typescriptlang.org/)
- [Express 5](https://expressjs.com/)
- [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- [dotenv](https://github.com/motdotla/dotenv)
- [tsx](https://tsx.is/) para desenvolvimento com hot reload

## 📁 Estrutura do projeto

```
src/
├── config/
│   └── supabase.ts            # Cliente do Supabase
├── controller/
│   └── CategoryController.ts  # Lógica das rotas de categorias
├── models/
│   ├── Category.ts            # Acesso a dados da tabela "categories"
│   └── Product.ts             # Acesso a dados da tabela "products"
├── routes/
│   └── categoryRoutes.ts      # Rotas de /categories
├── app.ts                     # Configuração do Express e rotas
└── server.ts                  # Inicialização do servidor
```

A arquitetura segue o padrão em camadas: **rotas → controller → model → Supabase**.

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm
- Um projeto no [Supabase](https://supabase.com/) com as tabelas `categories` e `products`

### Tabela `categories`

| Coluna          | Tipo    | Descrição                     |
| --------------- | ------- | ----------------------------- |
| `id`            | uuid/int | Identificador (chave primária) |
| `name`          | text    | Nome da categoria             |
| `description`   | text    | Descrição                     |
| `icon`          | text    | Ícone da categoria            |
| `display_order` | int     | Ordem de exibição             |
| `active`        | boolean | Se a categoria está ativa     |

## 🚀 Instalação e execução

```bash
# 1. Clone o repositório
git clone https://github.com/Lussek/Back-End-Engenharia-de-Software---SJP.git
cd Back-End-Engenharia-de-Software---SJP

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (veja a seção abaixo)
cp .env.example .env   # ou crie o arquivo .env manualmente

# 4. Rode em modo de desenvolvimento
npm run dev
```

O servidor sobe em **http://localhost:3000**.

### Build para produção

```bash
npm run build   # compila o TypeScript para ./dist
npm start       # executa dist/server.js
```

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_SECRET_KEY=sua-chave-secreta
```

> ⚠️ **Nunca** envie o arquivo `.env` ao repositório. A chave secreta do Supabase dá acesso total ao banco de dados.

## 📡 Endpoints

URL base: `http://localhost:3000`

### Geral

| Método | Rota | Descrição                    |
| ------ | ---- | ---------------------------- |
| GET    | `/`  | Informações básicas da API   |

### Categorias

| Método | Rota                          | Descrição                                   |
| ------ | ----------------------------- | ------------------------------------------- |
| GET    | `/categories`                 | Lista todas as categorias                   |
| GET    | `/categories/:id`             | Busca uma categoria pelo ID                 |
| GET    | `/categories/search/:keyword` | Busca por palavra-chave (nome ou descrição) |
| POST   | `/categories`                 | Cria uma categoria                          |
| PUT    | `/categories/:id`             | Atualiza uma categoria                      |
| DELETE | `/categories/:id`             | Remove uma categoria                        |

**Exemplo de corpo (POST/PUT):**

```json
{
  "name": "Sobremesas",
  "description": "Doces e sobremesas da casa",
  "icon": "🍰",
  "display_order": 3,
  "active": true
}
```

### Produtos

| Método | Rota        | Descrição              |
| ------ | ----------- | ---------------------- |
| GET    | `/products` | Lista todos os produtos |

## 📜 Scripts

| Comando         | Descrição                                      |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Inicia o servidor com hot reload (`tsx watch`) |
| `npm run build` | Compila o projeto para `dist/`                 |
| `npm start`     | Executa a versão compilada                     |

## 🗺 Status do projeto

Em desenvolvimento. Já implementado:

- [x] CRUD de categorias
- [x] Busca de categorias por palavra-chave
- [x] Listagem de produtos

Próximos passos:

- [ ] CRUD completo de produtos
- [ ] Pedidos
- [ ] Validação de dados de entrada
- [ ] Autenticação
- [ ] Testes automatizados

## 👤 Autor

**Lussek** — [GitHub](https://github.com/Lussek)

## 📄 Licença

Distribuído sob a licença ISC.
