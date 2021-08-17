const Sequelize = require('sequelize');

const connection = new Sequelize(
    process.env.PGDATABASE, 
    process.env.PGUSER,
    process.env.PGPASSWORD,
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