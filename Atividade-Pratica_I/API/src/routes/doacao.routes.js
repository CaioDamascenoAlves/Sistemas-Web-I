const express = require('express');
const router = express.Router();

const docaoController = require('../controllers/doacao.controller');

// ==> Rota responsável por Criar uma nova Doação: (POST): localhost:3000/api/doacao
router.post('/doacao', docaoController.createDoacao);

// ==> Rota responsável por Buscar todas as Doações: (GET): localhost:3000/api/doacao
router.get('/doacao', docaoController.getAllDoacoes);

// ==> Rota responsável por Buscar uma determinada Doação por ID: (GET): localhost:3000/api/doacao/:id
router.get('/doacao/:id', docaoController.getDoacaoById);

// ==> Rota responsável por Atualizar uma determinada Doação por ID: (PUT): localhost:3000/api/doacao/:id
router.put('/doacao/:id', docaoController.updateDoacaoById);

// ==> Rota responsável por Deletar uma determinada Doação por ID: (PUT): localhost:3000/api/doacao/:id
router.delete('/doacao/:id', docaoController.deleteDoacaoById);

module.exports = router;