# Projeto de Testes com Cypress

## Descrição

Este projeto utiliza Cypress para realizar testes automatizados na aplicação:

- `https://parabank.parasoft.com/`

Cypress é uma ferramenta de teste de front-end que facilita a escrita de testes end-to-end para aplicações web, oferecendo uma interface interativa e poderosas funcionalidades de depuração.

## Requisitos

Antes de começar, certifique-se de que você tem o Node.js e o npm instalados.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/rafael-isidro/cypress-study.git
   ```

2. Navegue para o diretório do projeto:

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o Cypress:

   ```bash
   npx cypress open
   ```

## Funcionalidades Verificadas

Abaixo estão as funcionalidades que foram verificadas com testes automatizados:

- **Login:**

  - [CT-001] Validar login com sucesso
  - [CT-002] Verificar login com username invalido
  - [CT-003] Verificar login com password invalido
  - [CT-004] Verificar login com username vazio
  - [CT-005] Verificar login com password vazio

- **Registro:**

  - [CT-001] Validar registro com sucesso
  - [CT-002] Verificar registro com campos vazios
  - [CT-003] Verificar registro com telefone com formato invalido
  - [CT-004] Verificar registro com senhas divergentes
  - [CT-005] Verificar registro com username existente

- **Transferência:**

  - [CT-001] Validar transferencia com sucesso
  - [CT-002] Verificar transferencia com valor negativo
  - [CT-003] Verificar transferencia com valor zero
  - [CT-004] Verificar transferencia com formato invalido
  - [CT-005] Verificar transferencia com valor maior que saldo

## Relatórios de Bugs

Aqui estão alguns bugs identificados durante a realização dos testes:

  **Bug 001: Instabilidade do servidor**

  **Criticidade:** Alta. 
  
  **Cenário:** 
  - DADO que estou acessando o sistema e possuo um banco da dados configurado adequadamente em Admin Page, 
  - QUANDO acesso diferentes endpoints 
  - ENTÃO é mostrado, em algumas execuções, o erro: "An internal error has occurred and has been logged."
---

  **Bug 002: Mensagem de conta já existente no cadastro**

  **Criticidade:** Alta. 
  
  **Cenário:** 
  - DADO que estou realizando um novo cadastro com dados ainda não cadastrados e randomicos, gerados pelo DataFaker, 
  - QUANDO clico em "REGISTER"
  - ENTÃO é mostrado o erro: "This username already exists."
  ---

  **Bug 003: Campo "Phone" no cadastro aceita texto**

  **Criticidade:** Média (por não ser um campo obrigatório). 
  
  **Cenário:** 
  - DADO que estou realizando um novo cadastro com dados ainda não cadastrados e informo um valor de texto no campo "Phone"
  - QUANDO clico em "REGISTER"
  - ENTÃO deveria mostrar erro de campo inválido
 ---

  **Bug 004: Campo "SSN" no cadastro aceita texto**

  **Criticidade:** Alta. 
  
  **Cenário:** 
  - DADO que estou realizando um novo cadastro com dados ainda não cadastrados e informo um valor de texto no campo "SSN"
  - QUANDO clico em "REGISTER"
  - ENTÃO deveria mostrar erro de campo inválido
---

  **Bug 005: Transferência aceita valores negativos**

  **Criticidade:** Alta. 
  
  **Cenário:** 
  - DADO que estou logado no sistema
  - QUANDO tento realizar transferência com valor negativo
  - ENTÃO deveria mostrar erro de valor inválido
---

  **Bug 006: Transferência aceita valor igual a zero**

  **Criticidade:** Alta. 
  
  **Cenário:** 
  - DADO que estou logado no sistema
  - QUANDO tento realizar transferência com valor 0
  - ENTÃO deveria mostrar erro de valor inválido
---

  **Bug 007: Transferência aceita valor maior do que o saldo**

  **Criticidade:** Alta. 
  
  **Cenário:** 
  - DADO que estou logado no sistema
  - QUANDO tento realizar transferência com valor muito alto e superior ao saldo da conta
  - ENTÃO deveria mostrar erro de saldo insuficiente
--- 

  **Bug 008: Transferência aceita texto no campo do valor da transferencia**

  **Criticidade:** Alta. 
  
  **Cenário:** 
  - DADO que estou logado no sistema
  - QUANDO tento realizar transferência informando um texto no valor
  - ENTÃO deveria mostrar erro de formato inválido
---

## Autor

<a href="https://github.com/rafael-isidro">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118776145?v=4" width="100px;" alt="Foto de perfil - Rafael Isidro"/>
    <br />
    <sub><b>Rafael Santos Isidro</b></sub>
</a> 
<br />

<a href="https://github.com/rafael-isidro" title="Github">⚫ Github</a>
<br />
<a href="https://www.linkedin.com/in/rafael-isidro/" title="Linkedin">🔵 Linkedin</a>
