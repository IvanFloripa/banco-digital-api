const express = require('express');
const router = express.Router();
const ContaCorrente = require('../model/ContaCorrente');

router.post('/conta-corrente/criar',(req,res)=>{
    var agencia = req.body.agencia;
    var numero = req.body.numero;
    var titular = req.body.titular;
    ContaCorrente.create({
        agencia: agencia,
        numero: numero,
        usuarioApiId: titular,
        saldo: 0
    }).then((ContaCorrente) =>{
        res.send(ContaCorrente.dataValues);
    });
});

router.post('/conta-corrente/depositar',(req,res)=>{
    
    var numero = req.body.numero;
    var valor = req.body.valor;
    var soma = null;
    let retorno = null;
    ContaCorrente.findOne({
        where: {numero: numero},
    }).then(ContaCorrente =>{
        let valueBd = parseFloat(ContaCorrente.saldo);
        let value2 = parseFloat(valor);
        soma = valueBd + value2;
        ContaCorrente.update({saldo: soma},{
        where:{numero: numero}
        }).then((ContaCorrente) =>{
            retorno = {
               conta: ContaCorrente.numero,
               saldo: ContaCorrente.saldo
            }
            res.send(retorno);
        });
        
    });
        
});

router.post('/conta-corrente/sacar',(req,res)=>{
    
    var numero = req.body.numero;
    var valor = req.body.valor;
    var soma = null;
    let retorno = null;
    ContaCorrente.findOne({
        where: {numero: numero},
    }).then(ContaCorrente =>{
        let valueBd = parseFloat(ContaCorrente.saldo);
        let value2 = parseFloat(valor);
        soma = valueBd - value2;
        ContaCorrente.update({saldo: soma},{
        where:{numero: numero}
        }).then((ContaCorrente) =>{
            retorno = {
                conta: ContaCorrente.numero,
                saldo: ContaCorrente.saldo
             }
             res.send(retorno);
        });
        
    });
        
});

router.post('/conta-corrente/saldo',(req,res)=>{

    var numero = req.body.numero;
    let retorno = null;
    ContaCorrente.findOne({
        where: {numero: numero},
    }).then(conta =>{
        retorno = {
            saldo: conta.saldo
        }
        res.send(retorno);
    });
        
});

module.exports = router;
