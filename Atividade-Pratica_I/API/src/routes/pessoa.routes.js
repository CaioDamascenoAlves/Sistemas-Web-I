const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoa.controller');

// ==> Rota responsável por Criar uma nova Pessoa: (POST): localhost:3000/api/pessoa/register
router.post('/pessoa/create', pessoaController.createPessoa);

module.exports = router;