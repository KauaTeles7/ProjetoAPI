# ⚽ API – Times da Premier League

## 📌 Descrição do Projeto

Este projeto consiste no desenvolvimento de uma **API REST** utilizando **Node.js e Express**, capaz de fornecer informações sobre alguns dos principais times da **Premier League (Big Six)**.

Além da API, foi desenvolvido também um **Front-end em HTML, CSS e JavaScript** que consome os dados da API e exibe na tela o **nome e o escudo dos times**.

O usuário pode:

* Visualizar um **time aleatório**
* **Buscar um time específico** digitando o nome

O objetivo do projeto é praticar conceitos de:

* Criação de **APIs REST**
* Comunicação entre **Front-end e Back-end**
* Uso de **requisições HTTP**
* Manipulação de **JSON**
* Consumo de APIs com **Fetch**

---

# 🧱 Tecnologias Utilizadas

### Back-end

* Node.js
* Express
* Cors

### Front-end

* HTML5
* CSS3
* JavaScript
* Fetch API

---

# 📂 Estrutura do Projeto

```
api-times-premier-league
│
├── backend
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── index.html
    ├── style.css
    └── script.js
```

---

# ⚙️ Funcionamento do Sistema

O sistema funciona em duas partes:

### 1️⃣ Back-end (API)

O servidor desenvolvido em **Node.js** armazena os dados dos times e disponibiliza rotas para consulta.

Quando o front-end faz uma requisição, a API retorna as informações em formato **JSON**.

Exemplo de resposta da API:

```json
{
  "status": "success",
  "nome": "arsenal",
  "imagem": "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
}
```

---

### 2️⃣ Front-end

O front-end faz requisições para a API utilizando **Fetch** e exibe na tela:

* Nome do time
* Escudo do time

O usuário pode:

* clicar no botão **Time Aleatório**
* digitar o nome de um time e clicar em **Buscar**

---

# 🌐 Rotas da API

## Rota inicial

```
GET /
```

Retorna uma mensagem indicando que a API está funcionando.

---

## Listar todos os times

```
GET /api/times
```

Retorna todos os times disponíveis.

---

## Buscar time aleatório

```
GET /api/times/aleatorio
```

Retorna um time escolhido aleatoriamente.

---

## Buscar time por nome

```
GET /api/times/:nome
```

Exemplo:

```
/api/times/arsenal
```

Retorno:

```json
{
 "status": "success",
 "nome": "arsenal",
 "imagem": "URL_DO_ESCUDO"
}
```

Caso o time não exista:

```json
{
 "status": "error",
 "message": "Time não encontrado"
}
```

---

# 🚀 Como Executar o Projeto

## 1️⃣ Clonar ou baixar o projeto

```
git clone URL_DO_REPOSITORIO
```

---

## 2️⃣ Instalar dependências

Dentro da pasta **backend** execute:

```
npm install
```

---

## 3️⃣ Iniciar o servidor

```
node server.js
```

O servidor iniciará na porta:

```
http://localhost:3001
```

---

## 4️⃣ Executar o Front-end

Abra o arquivo:

```
frontend/index.html
```

no navegador.

---

# 📊 Fluxo de Funcionamento

```
Usuário
   ↓
Front-end (HTML + JavaScript)
   ↓
Requisição HTTP (Fetch)
   ↓
API Node.js
   ↓
Resposta em JSON
   ↓
Front-end exibe nome e escudo do time
```

---

# 🎯 Objetivos do Projeto

* Aprender a criar **APIs com Node.js**
* Entender o funcionamento de **rotas REST**
* Praticar consumo de API com **JavaScript**
* Integrar **Front-end e Back-end**
* Trabalhar com **dados em JSON**

---

# 👨‍💻 Autores

Projeto desenvolvido por:

**Kauã Teles**
**Lucas Gabriel**

Curso Técnico em **Desenvolvimento de Sistemas**


# IMAGENS PROJETO 
<img width="1917" height="642" alt="image" src="https://github.com/user-attachments/assets/a1bd681d-1864-4220-bc19-f3730dfaa8a4" />


<img width="1108" height="613" alt="image" src="https://github.com/user-attachments/assets/386517be-ab8c-413b-b065-fa65176cfa12" />


<img width="1118" height="637" alt="image" src="https://github.com/user-attachments/assets/6772a269-3337-44fa-add9-5fe90a518f62" />
