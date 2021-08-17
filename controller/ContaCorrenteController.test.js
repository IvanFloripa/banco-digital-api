const request = require('supertest');
const express = require('express');
const app = require('../index');


const contaCorrente = require('../controller/ContaCorrenteController');

describe('Teste Criar Usuário', () =>{
    test("Criar Conta", async () => {
        const response = await request(app).post('/conta-corrente/criar').send({
            agencia: 9999,
            numero: 7890
        })
        expect(response.statusCode).toBe(200)        
      })

      test("Sacar", async () => {
        const response = await request(app).post('/conta-corrente/sacar').send({
            numero: 7890,
            valor: 1000.00
        })
        expect(response.statusCode).toBe(200)        
      })

      test("Saldo", async () => {
        const response = await request(app).post('/conta-corrente/criar').send({
            numero: 7890
        })
        expect(response.statusCode).toBe(200)        
      })
      
})
