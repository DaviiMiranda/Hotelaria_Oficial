# 🏨 Projeto Hotelaria - API + Front-End

Este projeto é um sistema simples de gerenciamento de hóspedes e reservas de um hotel, desenvolvido com **Node.js**, **Express**, **MySQL** e um front-end básico em **HTML/CSS/JS**.

---

## 📌 Funcionalidades

### 🔧 Back-End
- Cadastro de hóspedes
- Listagem de hóspedes e quartos
- Edição e exclusão de hóspedes
- Reserva de quartos com verificação de disponibilidade
- Cálculo automático de valor da estadia
- API REST com rotas para CRUD

### 💻 Front-End
- Formulário para cadastro de hóspedes
- Tabela com listagem dinâmica de hóspedes e quartos
- Estilo moderno com CSS
- Validações básicas de formulário

---

## 🛠️ Tecnologias Utilizadas

### Back-End
- Node.js
- Express
- MySQL2 (Promise)
- dotenv
- CORS

### Front-End
- HTML5
- CSS3
- JavaScript (puro)


## 📁 Estrutura do Projeto

Projeto_Hotelaria/
│
├── scripts/
│ ├── index.js # Arquivo principal da API
│ ├── db.js # Conexão e funções com o banco de dados
│ ├── functions.js # Funções auxiliares (ex: cálculo de valores, idade, dias)
│ └── hospedagem.js # Script de front-end para envio e manipulação de dados
│
├── public/
│ ├── hospedagem.html # Formulário para cadastrar hóspedes
│ ├── lista.html # Tabela de hóspedes ou quartos
│ └── estilo.css # Estilo visual do site
│
├── .env # Configurações sensíveis (porta, credenciais etc.)
├── package.json
└── README.md


---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- MySQL em execução

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/projeto-hotelaria.git

# 2. Instalar as dependências
cd Projeto_Hotelaria
npm install

# 3. Criar o banco de dados
# Execute o script SQL para criar as tabelas e relações (hospedes, reservas, quartos)

# 4. Configurar o .env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=1234
DB_NAME=hotel_overlook

# 5. Rodar o projeto
node scripts/index.js
