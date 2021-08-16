const Sequelize = require('sequelize');
const connection = require('../config/database');

const Usuario = connection.define('usuario', {
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
    freezeTableName: true,
    schema:'public'});


Usuario.sync({force:false}).then(()=>{});
module.exports = Usuario;
