const express = require('express');
const router = express.Router();
const localColetaController = require('../controllers/localColeta.controller');

// ==> Rota responsável por Criar um Local de Coleta: (POST): localhost:3000/api/local_coleta
router.post('/local_coleta', localColetaController.createLocalColeta);

// ==> Rota responsável por Buscar todos os Locais de Coleta: (POST): localhost:3000/api/local_coleta
router.get('/local_coleta', localColetaController.getAllLocaisColeta);

module.exports = router;