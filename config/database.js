const Sequelize = require('sequelize');

const connection = new Sequelize(
    'postgres', 
    'postgres',
    1234,
    {
        host: 'postgres_db',
        dialect: 'postgres',
        operatorAlias:false,
        logging:false,
        pool: {
            max: 5,
            idle: 30000,
            acquire: 60000,
        },
    })

module.exports = connection;