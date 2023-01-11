const express = require('express');
const router = express.Router();

const docaoController = require('../controllers/doacao.controller');

// ==> Rota responsável por Criar uma nova Doação: (POST): localhost:3000/api/doacao
router.post('/doacao', docaoController.createDoacao);

module.exports = router;