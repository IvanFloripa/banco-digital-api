const Sequelize = require('sequelize');
const connection = require('../config/database');

const Pergunta = connection.define('pergunta', {
    titulo:{
        type:Sequelize.STRING,
        allowNull: false,
    },descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    schema:'node_cursos'});
;

Pergunta.sync({force:false}).then(()=>{});