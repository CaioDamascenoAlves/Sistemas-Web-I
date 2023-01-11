const express = require('express');

// importando o router do express
const router = express.Router();

// configura uma rota get para a raiz da API
router.get('/api', (req, res) => {

	// seta o status da resposta como 200 (OK) 
	// e envia um objeto JSON com informações da API
	
	res.status(200).send({
		sucess: true,
		message: 'Seja bem-vindo(a) a API None.JS + MongoDB',
		version: '1.0.0',
	});
});

// exporta o router
module.exports = router;