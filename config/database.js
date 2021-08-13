const Sequelize = require('sequelize');

const connection = new Sequelize('postgres', 'postgres','1234',{
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = connection;