# API de Cadastro de Usuários

API REST desenvolvida com Node.js para gerenciamento de usuários (CRUD), integrada ao MongoDB utilizando Mongoose e com interface web renderizada com EJS.

---

# Sobre o Projeto

Esta aplicação permite:

- Criar usuários
- Listar usuários
- Buscar usuário por ID
- Atualizar usuário
- Deletar usuário
- Visualizar usuários em um painel web estilizado

Os dados são persistidos no MongoDB e exibidos tanto via API (JSON) quanto via interface renderizada no navegador.

---

# Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- EJS
- Dotenv
- Nodemon
- Postman (testes de API)

---

# Estrutura do Projeto

APICadastro
┣  src
┃ ┣ 📂database
┃ ┣ 📂 models
┃ ┗ 📂 views
┣ .env
┣ .gitignore
┣ index.js
┣ package.json
┗ package-lock.json


---

#Endpoints da API

# Criar Usuário

POST /users

Body (JSON):
```json
{
  "name": "Carlos",
  "age": 22,
  "email": "carlos@email.com"
}
Listar Usuários
GET /users
Buscar Usuário por ID
GET /users/:id
Atualizar Usuário
PUT /users/:id

Body (JSON):

{
  "name": "Carlos Silva",
  "age": 23
}
Deletar Usuário
DELETE /users/:id

#Banco de Dados

O projeto utiliza MongoDB com Mongoose para modelagem e persistência dos dados.

As variáveis de ambiente devem ser configuradas no arquivo .env:

MONGODB_URI=sua_string_de_conexao
PORT=8080
Interface Web

A aplicação possui um painel web renderizado com EJS que exibe os usuários cadastrados.

Acesse no navegador:

http://localhost:8080
 #Testes

Os endpoints foram testados utilizando o Postman, validando:

Requisições HTTP

Status codes

Respostas em JSON

Integração com o banco de dados

##Como Executar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/Gmoraes2/APICadastro.git
2️⃣ Instalar dependências
npm install
3️⃣ Configurar variáveis de ambiente

Criar um arquivo .env na raiz do projeto:

MONGODB_URI=sua_string_de_conexao
PORT=8080
4️⃣ Rodar em desenvolvimento
npm run start:dev
## Objetivo

Projeto desenvolvido para prática de:

Construção de APIs REST

Integração com banco de dados

Estruturação de backend

Renderização server-side com EJS

Organização de projeto Node.js

#Autor
Gabriel Moraes
OBS: projeto desenvolvido em Bootcamp realizadao por : Felipe Rocha/ intagram: byfeliperocha
GitHub: https://github.com/Gmoraes2
