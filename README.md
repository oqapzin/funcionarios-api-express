# funcionarios-api-express
Projeto para avaliação do 1°bimestre de back-end.


## ✏️ Descrição

> Este projeto tem como objetivo demonstrar os conhecimentos adquiridos em aula, desenvolvendo uma API com operações similares ao CRUD, seguindo os requisitos estipulados pelo professor.


## 💻 Tecnologias utilizadas

* Node
* Express
* Mongo
* Mongoose
* Nodemon


## 🚀 Instalação

1. Clone o repositório:
```
git clone https://github.com/oqapzin/funcionarios-api-express
```
2. Navegue até o diretório do projeto:
```
 cd funcionarios-api-express
```
3. Instale as dependências: 
```
npm install
```
4. Após a conclusão da instalação, inicie o servidor de desenvolvimento:
```
npm run dev
```


## 🔧 Configuração

Antes de executar o projeto, é necessário renomear o arquivo `env copy` para `.env` e configurá-lo com as variáveis de ambiente necessárias. Veja um exemplo de arquivo `.env`:

- MONGO_DB_USER=seu_usuario
- MONGO_DB_PASSWORD=sua_senha
- MONGO_DB_ADDRESS=seu_endereço_do_mongodb
- API_PORT=porta_desejada

## 📃 Rotas/API

- `GET /funcionarios`: Retorna uma lista de todos os funcionários.
- `GET /funcionario/:id`: Retorna os detalhes de um funcionário específico.
- `POST /funcionario`: Cria um novo funcionário.
- `PUT /funcionario/:id`: Atualiza o salário de um funcionário específico.

Exemplo de uso:

- `GET /funcionarios`: `http://localhost:3000/funcionarios`
- `GET /funcionario/:id`: `http://localhost:3000/funcionario/1`
- `POST /funcionario`: `http://localhost:3000/funcionario`
- `PUT /funcionario/:id`: `http://localhost:3000/funcionario/1`

  
## ✅ Requisitos do projeto

### 1. Requisição POST

Fazer uma requisição POST que envie as seguintes informações: tipoPessoa, cpf, cnpj, nome, sexo, cargo e salario. Ao final, deverá salvar todas essas informações no banco, conforme itens abaixo:

a) (1,5 pontos) - Inserir os dados acima no banco de dados.

b) (0,5 pontos) - Os campos tipoPessoa, nome (máximo de 20 caracteres) e salário (não pode ser menor que um salário mínimo) são de preenchimento obrigatório.

c) (0,5 pontos) - Se no tipoPessoa foi informado "PF" e NÃO foi informado o CPF, apresentar a mensagem: "CPF não informado".

d) (0,5 pontos) - Se no tipoPessoa foi informado "PJ" e NÃO foi informado o CNPJ, apresentar a mensagem: "CNPJ não informado".

e) (0,5 pontos) - Se no tipoPessoa foi informado "PJ" e foi informado o sexo, apresentar a mensagem: "O campo sexo só é permitido para Pessoa Física".

f) (0,5 pontos) - Se no tipoPessoa foi informado "PJ" e foi informado o cargo, apresentar a mensagem: "O campo cargo só é permitido para Pessoa Física".

g) (0,5 pontos) - Se foram informados os campos cpf e cnpj ao mesmo tempo, apresentar a mensagem: "Favor informar somente uma opção, CPF ou CNPJ, de acordo com o Tipo de Pessoa".

h) (0,5 pontos) - Só aceitar CPF no formato 999.999.999-99 e CNPJ no formato 99.999.999/9999-99.

i) (0,5 pontos) - Obedecer aos valores aceitos para cada um dos campos, conforme tabela abaixo:

| Cargos    | Sexo | Tipo de Pessoa |
|-----------|------|----------------|
| Estagiario| M    | PF             |
| Tecnico   | F    | PJ             |
| Gerente   |      |                |
| Diretor   |      |                |
| Presidente|      |                |

### 2. Endpoint de Reajuste Salarial

Fazer um endpoint para calcular um percentual de reajuste de um funcionário específico. Para tanto o endpoint deve receber pela rota o id do funcionário e via json o valor do percentual de reajuste. O sistema deve calcular o valor de reajuste baseado no percentual informado, e alterar no banco o valor do salário do funcionário com o novo valor calculado.

### 3. Endpoint de Listagem por Cargo

Fazer um endpoint (pode ser o mesmo que retorna a lista completa) que retorne uma listagem de funcionários de um cargo específico. Para tanto, ao digitar o filtro de cargo na rota, deve-se recuperar o cargo digitado e trazer somente os funcionários desse cargo.
