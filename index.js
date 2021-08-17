const express = require('express');
const app = express();

const connection = require('./config/database');
const usuarioController = require('./controller/UsuarioController');
const contaCorrenteController = require('./controller/ContaCorrenteController');
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

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', usuarioController);
app.use('/', contaCorrenteController);



app.listen(4000,() =>{
    console.log('Servidor Nodejs rodando');
})