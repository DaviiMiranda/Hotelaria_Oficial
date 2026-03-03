# Hotel Overlook — Sistema de Gestão Hoteleira

![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

Um projeto full-stack de um sistema de gerenciamento de hotelaria de luxo, desenvolvido para aprimorar e demonstrar habilidades em desenvolvimento web com Java/Spring Boot no backend e Angular no frontend.

*Recentemente atualizado com um novo visual elegante (Glassmorphism), Dashboard em tempo real e fluxo inteligente de registros.*

<img width="800" alt="projetoHotelaria Dashboard" src="https://github.com/user-attachments/assets/3f614c52-5c41-4d47-8578-894e8a2ec61f" />
<img width="800" alt="projetoHotelaria Registro" src="https://github.com/user-attachments/assets/f182a6a9-3d63-4ff3-b7f8-ec488207f2c1" />

_(Substitua as imagens acima pelos novos prints do Hotel Overlook na próxima atualização do repositório)_

## ✨ Funcionalidades

* **Painel Administrativo (Dashboard):** Visão geral em tempo real da taxa de ocupação, número de hóspedes registrados, faturamento projetado e média de dias de estadia.
* **Cadastro Inteligente de Hóspedes:** Fluxo de registro que permite cadastrar novos hóspedes ou buscar hóspedes já existentes pelo CPF através de um botão deslizante (Toggle Switch), pré-preenchendo os dados para agilizar a reserva.
* **Gerenciamento de Quartos:** Quartos separados por categoria (Normal, Plus, Max, Suíte Presidencial). Controle visual de disponibilidade e status.
* **Tema Visual Luxury (Glassmorphism):** Interface moderna e sofisticada utilizando a paleta de cores carmesim/vermelho escuro, tipografia premium (`Playfair Display` e `Montserrat`) e painéis de vidro fosco (backdrop-blur) sobre um lobby hiper-realista.
* **API RESTful Integrada:** Backend robusto em Java Spring Boot que calcula estatísticas financeiras e expõe endpoints para todas as operações CRUD.

## 🛠️ Stack de Tecnologias

A aplicação é dividida em duas partes principais: um backend que serve uma API de dados e estatísticas, e um frontend moderno Angular que a consome.

### **Backend**
* **Java 17+**
* **Spring Boot 3**
* **Spring Data JPA / Hibernate**
* **MySQL 8**
* **Maven**

### **Frontend**
* **Angular 17+**
* **TypeScript**
* **HTML5 / CSS3** (Vanilla CSS com Design System de Múltiplas Camadas / Glassmorphism)
* **Angular Reactive Forms**

## 🚀 Pré-requisitos

Antes de começar, garanta que você tem as seguintes ferramentas instaladas em sua máquina:
* [Java (JDK) 17 ou superior](https://www.oracle.com/java/technologies/downloads/)
* [Apache Maven](https://maven.apache.org/download.cgi)
* [MySQL Server](https://dev.mysql.com/downloads/mysql/)
* [Node.js e npm](https://nodejs.org/en/)
* [Angular CLI](https://angular.io/cli)
* [Git](https://git-scm.com/)

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para executar o projeto localmente.

### 1. Clonando o Repositório

```bash
# Clone este repositório
git clone https://github.com/DaviiMiranda/Hotelaria_Oficial.git

# Acesse a pasta do projeto
cd Hotelaria_Oficial
```

### 2. Configurando o Banco de Dados

Abra seu cliente MySQL e crie o banco de dados para a aplicação:

```sql
CREATE DATABASE hotelaria_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 3. Executando o Backend (Spring Boot)

```bash
# Navegue até a pasta do backend
cd back_hotelaria

# Edite o arquivo src/main/resources/application.properties com suas credenciais:
# spring.datasource.username=seu_usuario_mysql
# spring.datasource.password=sua_senha_mysql

# Execute a aplicação com o Maven
./mvnw spring-boot:run
```

O backend estará ativo em `http://localhost:8080`.

### 4. Executando o Frontend (Angular)

Abra um novo terminal e volte para a raiz do repositório.

```bash
# Navegue até a pasta do frontend
cd front_hotelaria

# Instale as dependências (execute apenas na primeira vez)
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

Acesse o sistema no seu navegador em: **`http://localhost:4200`**
