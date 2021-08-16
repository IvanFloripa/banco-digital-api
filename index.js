const express = require('express');
const app = express();
const connection = require('./config/database');
const Usuario = require('./model/Usuario');

async function connectPg(){
    try{
        await connection.authenticate();
        console.log("Conexão feita com o banco de dados!");

    }catch(error){
        console.log(error);

    }
}
connectPg();
app.get('/', (req, res) => {
    res.send('Rodando Aplicação Nodejs');
});

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.post('/criar-usuarios',(req,res)=>{
    console.log(req.body.nome);
    console.log(req.body.cpf);
    var nome = req.body.nome;
    var cpf = req.body.cpf;
    Usuario.create({
        nome: nome,
        cpf: cpf
    }).then((Usuario) =>{
        res.send(Usuario.dataValues);
    });
});


app.listen(4000,() =>{
    console.log('Servidor Nodejs rodando');
})