
# Projeto Banco Digital API Funcional Health Tech

Exame de Programador Node.js
Objetivo
Desenvolver uma API em NodeJS que simule algumas funcionalidades de um banco digital. Nesta simulação considere que não há necessidade de autenticação.

Desafio
Você deverá garantir que o usuário conseguirá realizar uma movimentação de sua conta corrente para quitar uma dívida.

Cenários
DADO QUE eu consuma a API
QUANDO eu chamar a mutation sacar informando o número da conta e um valor válido
ENTÃO o saldo da minha conta no banco de dados reduzirá de acordo
E a mutation retornará o saldo atualizado.

DADO QUE eu consuma a API
QUANDO eu chamar a mutation sacar informando o número da conta e um valor maior do que o meu saldo
ENTÃO a mutation me retornará um erro informando que eu não tenho saldo suficiente

DADO QUE eu consuma a API
QUANDO eu chamar a mutation depositar informando o número da conta e um valor válido
ENTÃO a mutation atualizará o saldo da conta no banco de dados
E a mutation retornará o saldo atualizado.

DADO QUE eu consuma a API
QUANDO eu chamar a query saldo informando o número da conta
ENTÃO a query retornará o saldo atualizado.

### Descrição da API 
Uso da Comunicação da API foi feito em ORM Sequelize, com NodeJs e Express.

### Banco de Dados
Postgresql, as credenciais do banco de dados ficam em <code>docker-compose.yml</code> que fica na raiz do projeto:
![Alt text](/../master/screenshots/config_banco.png?raw=true "Optional Title")

###Executar o Projeto
Para executar o container do Projeto basta executar o comando <code>docker-compose up</code>

###Teste de Requisições
Utilizado o Postman para executar as requisições do Projeto

### Teste de Endpoints do Projeto via POSTMAN

![Alt text](/../master/screenshots/criar-usuario.png?raw=true "Optional Title")
```
- Criar Usuários
URL: http://localhost:4000/usuarios/criar
JSON: 
{
    "nome": "antonia",
	"CPF": "11056007001"
}
```

![Alt text](/../master/screenshots/criar-conta-corrente.png?raw=true "Optional Title")
```
- Criar Conta Corrente

URL: http://localhost:4000/conta-corrente/criar
JSON: 
{
    "agencia": 9878,
	"numero": "7890"
}
```

![Alt text](/../master/screenshots/depositar.png?raw=true "Optional Title")
```
- Depositar
URL: http://localhost:4000/conta-corrente/depositar
JSON: 
{
	"numero": "7890",
    "valor": 1000
}
```

![Alt text](/../master/screenshots/sacar.png?raw=true "Optional Title")
```
- Sacar

URL: http://localhost:4000/conta-corrente/sacar
JSON: 
{
	"numero": "7890",
    "valor": 700
}
```
![Alt text](/../master/screenshots/saldo.png?raw=true "Optional Title")
```
- Saldo

URL: http://localhost:4000/conta-corrente/saldo
JSON: 
{
	"numero": "7890",
    "valor": 700
}
```

### LINK REPOSITÓRIO DO PROJETO:
```
- gh repo clone IvanFloripa/banco-digital-api
```