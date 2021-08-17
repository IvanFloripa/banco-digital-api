const Sequelize = require('sequelize');
const connection = require('../config/database');
const Usuario = connection.define('usuario_api', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull: false,
    },cpf:{
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    schema:'public'});
module.exports = Usuario;
