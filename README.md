
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

### Estrutura da API
Uso da Comunicação da API foi feito em ORM Sequelize, com NodeJs e Express.

### Banco de Dados
Postgresql, as credenciais do banco de dados ficam em <code>docker-compose.yml</code> que fica na raiz do projeto:
![Alt text](/../master/screenshots/config_banco.png?raw=true "Optional Title")

