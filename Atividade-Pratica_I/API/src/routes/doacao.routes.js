const express = require('express');
const router = express.Router();

const docaoController = require('../controllers/doacao.controller');

// ==> Rota responsável por Criar uma nova Doação: (POST): localhost:3000/api/doacao
router.post('/doacao', docaoController.createDoacao);

// ==> Rota responsável por Buscar todas as Doações: (GET): localhost:3000/api/doacao
router.get('/doacao', docaoController.getAllDoacoes);

// ==> Rota responsável por Buscar todas as Doações: (GET): localhost:3000/api/doacao/:id
router.get('/doacao/:id', docaoController.getDoacaoById);

module.exports = router;