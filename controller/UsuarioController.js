const express = require('express');
const router = express.Router();
const Usuario = require('../model/Usuario');


router.get('/list-usuarios',(req,res)=>{
    Usuario.findAll({ raw: true, order: [
        ['id','DESC']
    ]}).then(Usuario =>{
        console.log(Usuario);
        res.send(Usuario);
    })
});

router.post('/usuarios/criar',(req,res)=>{
    var nome = req.body.nome;
    var cpf = req.body.cpf;
    Usuario.create({
        nome: nome,
        cpf: cpf
    }).then((Usuario) =>{
        res.send(Usuario.dataValues);
    });
});

module.exports = router;
    