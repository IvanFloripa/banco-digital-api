const request = require('supertest');
const express = require('express');
const app = require('../index');


const usuario = require('../controller/UsuarioController');

describe('Teste Criar Usuário', () =>{
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post('/usuarios/criar').send({
            nome: 'teste',
            cpf: '123456'
        })
        expect(response.statusCode).toBe(200)        
      })
})
