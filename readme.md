# Documentação do Projeto: Sistema de Gerenciamento de Processos Jurídicos

## Tecnologias Utilizadas

### Frontend

- **Linguagem de Programação:** JavaScript (ES6+)
- **Bibliotecas/Frameworks:**
  - React.js: Uma biblioteca JavaScript para construir interfaces de usuário.
  - Material-UI: Uma biblioteca de componentes React para um desenvolvimento mais rápido e bonito.
- **Gerenciador de Pacotes:** npm
- **Iniciar o Projeto:**
  1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
  2. Clone o repositório do projeto para o seu ambiente local.
  3. Navegue até o diretório do projeto no terminal.
  4. Execute `npm install` para instalar as dependências.
  5. Após a instalação das dependências, inicie o servidor de desenvolvimento com `npm start`.

### Backend

- **Tecnologias Utilizadas:**
  - Node.js: Plataforma de execução de código JavaScript no servidor.
  - Express.js: Framework web para Node.js que simplifica o desenvolvimento de aplicativos.
  - Sequelize: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados relacional.
  - MySQL: Sistema de gerenciamento de banco de dados relacional.

## Estrutura de Arquivos Principais

A estrutura de arquivos do projeto é organizada da seguinte forma:

- **src/:** Este diretório contém todo o código-fonte do aplicativo.
  - **components/:** Componentes reutilizáveis do React.
  - **pages/:** Componentes que representam páginas inteiras do aplicativo.
  - **App.js:** O componente raiz que renderiza o aplicativo.
  - **index.js:** O arquivo de ponto de entrada do aplicativo, onde o React é renderizado no DOM.

## Endpoints da API

A API oferece os seguintes endpoints:

### Autenticação

- `POST /auth/register`: Registra um novo usuário no sistema.
  - Parâmetros:
    - nome: Nome do usuário.
    - email: Endereço de e-mail do usuário.
    - password: Senha do usuário.
    - role: Papel do usuário (cliente ou advogado).
- `POST /auth/login`: Realiza login de um usuário existente.
  - Parâmetros:
    - email: Endereço de e-mail do usuário.
    - password: Senha do usuário.

### Clientes

- `GET /clientes`: Retorna todos os clientes.
- `GET /clientes/:id`: Retorna os detalhes de um cliente específico com base no ID.
- `PUT /clientes/:id`: Atualiza os dados de um cliente específico.
- `DELETE /clientes/:id`: Exclui um cliente específico.

### Advogados

- `GET /advogados`: Retorna todos os advogados.
- `GET /advogados/:id`: Retorna os detalhes de um advogado específico com base no ID.
- `PUT /advogados/:id`: Atualiza os dados de um advogado específico.
- `DELETE /advogados/:id`: Exclui um advogado específico.

### Processos Judiciais

- `GET /processos`: Retorna todos os processos judiciais.
- `GET /processos/:id`: Retorna os detalhes de um processo judicial específico com base no ID.
- `POST /processos`: Cria um novo processo judicial.
- `PUT /processos/:id`: Atualiza os dados de um processo judicial específico.
- `DELETE /processos/:id`: Exclui um processo judicial específico.

### Documentos

- `GET /documentos/:id`: Retorna os detalhes de um documento específico com base no ID.
- `POST /documentos/:id`: Anexa um documento a um processo judicial específico.

## Diagrama 

### Diagrama de Entidade-Relacionamento (DER)

#### Entidades e Atributos:

**Cliente**

- id (PK)
- nome
- CPF

**Advogado**

- id (PK)
- nome
- CPF
- OAB

**Processo Judicial**

- id (PK)
- numero_processo
- tema
- valor_causa
- cliente_id (FK para Cliente)
- advogado_responsavel_id (FK para Advogado)

**Documento**

- id (PK)
- nome
- caminho
- extensao
- processo_id (FK para Processo Judicial)

#### Relacionamentos:

**Cliente - Processo Judicial:**

Um cliente pode estar associado a vários processos judiciais, mas um processo judicial está associado a apenas um cliente.

Relacionamento: 1 para N (Cliente para Processo Judicial)

**Advogado - Processo Judicial:**

Um advogado pode ser responsável por vários processos judiciais, mas um processo judicial tem apenas um advogado responsável.

Relacionamento: 1 para N (Advogado para Processo Judicial)

**Processo Judicial - Documento:**

Um processo judicial pode ter vários documentos anexados, mas um documento está associado a apenas um processo judicial.

Relacionamento: 1 para N (Processo Judicial para Documento)

+---------------------+        +---------------------+
|      Cliente        |        |      Advogado       |
+---------------------+        +---------------------+
| PK  id              |        | PK  id              |
|     nome            |        |     nome            |
|     CPF             |        |     CPF             |
+---------------------+        |     OAB             |
                               +---------------------+
                 1                          1
                 |                          |
                 |                          |
                 |                          |
                N|                          |N
+---------------------+        +---------------------+
|  Processo Judicial  |<-------|      Documento      |
+---------------------+        +---------------------+
| PK  id              |        | PK  id              |
|     numero_processo |        |     nome            |
|     tema            |        |     caminho         |
|     valor_causa     |        |     extensao        |
| FK  cliente_id      |        | FK  processo_id     |
| FK  advogado_resp_id|        +---------------------+
+---------------------+
