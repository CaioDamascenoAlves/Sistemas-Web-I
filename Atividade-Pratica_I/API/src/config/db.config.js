const dotenv = require('dotenv');

dotenv.config({path: './src/.env'});

module.exports = {
    local: {
        localUrlDatabase: process.env.DB_URI,
        secret: "password",
    }
}