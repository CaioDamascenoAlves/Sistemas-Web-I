const express = require('express');
const router = express.Router();
const ClassPessoaController = require('../controllers/CLASS_Pessoa.controller');


// Cria uma nova pessoa
router.post('/classepessoa', ClassPessoaController.createPessoa);

router.get('/classepessoa', ClassPessoaController.getAllPessoas);

router.get('/classepessoa/:id', ClassPessoaController.getPessoaById);

module.exports = router;