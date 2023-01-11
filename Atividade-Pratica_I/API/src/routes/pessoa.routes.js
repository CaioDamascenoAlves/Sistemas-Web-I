const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoa.controller');

// ==> Rota responsável por Criar uma nova Pessoa: (POST): localhost:3000/api/pessoa
router.post('/pessoa', pessoaController.createPessoa);

// ==> Rota responsável por Buscar todas as Pessoas: (GET): localhost:3000/api/pessoa
router.get('/pessoa', pessoaController.getAllPessoas);

// ==> Rota responsável por Buscar uma determinada Pessoa por id: (GET): localhost:3000/api/pessoa/:id
router.get('/pessoa/:id', pessoaController.getPessoaById);

// ==> Rota responsável por Atualizar uma determinada Pessoa por id: (PUT): localhost:3000/api/pessoa/:id
router.put('/pessoa/:id', pessoaController.updatePessoaById);

module.exports = router;