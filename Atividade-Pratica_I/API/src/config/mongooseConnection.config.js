const mongoose = require('mongoose');

// ==> Importar o arquivo: 'db.config.js'
const database = require('./db.config'); // ==> aqui é conexão local: MongoDB
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

// ==> Conexão com a Base de Dados:
mongoose.connect(process.env.DB_URI,{
}).then(() => {
    console.log('A Base de Dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
  process.exit();
});
