const express = require('express');
const router = express.Router();
const localColetaController = require('../controllers/localColeta.controller');

// ==> Rota responsável por Criar um Local de Coleta: (POST): localhost:3000/api/local_coleta
router.post('/local_coleta', localColetaController.createLocalColeta);

module.exports = router;