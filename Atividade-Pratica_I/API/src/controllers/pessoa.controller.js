const Pessoa = require('../models/pessoa.model');

exports.createPessoa = async (req, res) => {
    try {
        const pessoa = new Pessoa({
            nome: req.body.nome,
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            documento: req.body.documento,
            cidade: req.body.cidade,
            tipo_sanguineo: req.body.tipo_sanguineo,
        });

        const savedPessoa = await pessoa.save();
        res.send(savedPessoa);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Algum erro ocorreu ao criar a pessoa."
        });
    }
};

exports.getTodasPessoas = async (req, res) => {
	try{
		const pessoas = await Pessoa.find();
		res.send(pessoas);
	} catch (err){
		res.status(500).send({
			message: err.message || "Erro ao recuperar as pessoas"
		});
	}
};