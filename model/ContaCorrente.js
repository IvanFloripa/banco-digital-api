const Sequelize = require('sequelize');
const connection = require('../config/database');
const Usuario = require('./Usuario');
const ContaCorrente = connection.define('conta_corrente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuarioApiId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true
    },
    agencia:{
        type:Sequelize.STRING,
        allowNull: true,
    },numero:{
        type: Sequelize.STRING,
        allowNull: false
    },saldo:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: true
    }
},{
    freezeTableName: true,
    schema:'public'});

ContaCorrente.belongsTo(Usuario);
module.exports = ContaCorrente;
