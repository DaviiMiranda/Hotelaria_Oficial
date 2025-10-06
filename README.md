# Sistema de Gestão Hoteleira

![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

Um projeto full-stack de um sistema de gerenciamento de hotelaria, desenvolvido para aprimorar e demonstrar habilidades em desenvolvimento web com Java/Spring Boot no backend e Angular no frontend.
<img width="1599" height="455" alt="projetoHotelaria" src="https://github.com/user-attachments/assets/3f614c52-5c41-4d47-8578-894e8a2ec61f" />

## ✨ Funcionalidades

* **Cadastro de Hóspedes:** Formulário para registro completo de novos hóspedes no sistema.
* **Cadastro de Quartos:** Permite adicionar novos quartos de diferentes tipos (Normal, Plus, Suíte, etc.) e definir seus preços.
* **API RESTful:** Backend robusto que expõe endpoints para todas as operações CRUD (Create, Read, Update, Delete).
* **Validação de Dados:** Formulários reativos no frontend que validam os dados em tempo real para garantir a integridade das informações.

## 🛠️ Stack de Tecnologias

A aplicação é dividida em duas partes principais: um backend que serve uma API e um frontend que a consome.

### **Backend**
* **Java 17+**
* **Spring Boot 3**
* **Spring Data JPA / Hibernate**
* **MySQL 8**
* **Maven**

### **Frontend**
* **Angular 17+**
* **TypeScript**
* **HTML5 / CSS3**
* **Angular Reactive Forms**

## 🚀 Pré-requisitos

Antes de começar, garanta que você tem as seguintes ferramentas instaladas em sua máquina:
* [Java (JDK) 17 ou superior](https://www.oracle.com/java/technologies/downloads/)
* [Apache Maven](https://maven.apache.org/download.cgi)
* [MySQL Server](https://dev.mysql.com/downloads/mysql/)
* [Node.js e npm](https://nodejs.org/en/)
* [Angular CLI](https://angular.io/cli)
* [Git](https://git-scm.com/)

## ⚙️ Instalação e Execução

Siga os passos abaixo para executar o projeto localmente.

### **1. Configuração do Ambiente**

```bash
# Clone este repositório
$ git clone https://[URL-DO-SEU-REPOSITORIO-GIT]

# Acesse a pasta do projeto

$ cd nome-da-pasta-do-projeto

Abra seu cliente MySQL e crie o banco de dados para a aplicação:

CREATE DATABASE hotelaria_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Navegue até a pasta do backend
$ cd back_hotelaria

#Abra o arquivo src/main/resources/application.properties e altere as seguintes linhas com suas credenciais do MySQL:

spring.datasource.username=seu_usuario_mysql
spring.datasource.password=sua_senha_mysql

# Execute a aplicação com o Maven
$ mvn spring-boot:run

Executando o Frontend (Angular)

Abra um novo terminal para executar o frontend.
Bash

# Navegue até a pasta do frontend
$ cd front_hotelaria

# Instale as dependências (execute apenas na primeira vez)
$ npm install

# Inicie o servidor de desenvolvimento
$ ng serve
