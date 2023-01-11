const dotenv = require('dotenv');

// Encontra e consome a connection string do mongoDB
dotenv.config({path: './src/.env'});

module.exports = {
    local: {
        localUrlDatabase: process.env.DB_URI,
        secret: "password",
    }
}