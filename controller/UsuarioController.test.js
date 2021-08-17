const express = require('express');
const app = express();

app.use('/', usuarioController);

const usuario = require('../controller/UsuarioController');

describe('Teste de operações usuário', () =>{
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/users").send({
          username: "username",
          password: "password"
        })
        expect(response.statusCode).toBe(200)
      })
})
