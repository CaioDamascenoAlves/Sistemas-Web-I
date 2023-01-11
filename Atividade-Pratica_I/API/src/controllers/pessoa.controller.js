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

exports.getAllPessoas = async (req, res) => {
	try{
		const pessoas = await Pessoa.find();
		res.send(pessoas);
	} catch (err){
		res.status(500).send({
			message: err.message || "Erro ao recuperar as pessoas"
		});
	}
};

exports.getpessoaByid = async (req, res) => {
	try {
		const pessoa = await Pessoa.findById(req.params.id);
		if(!pessoa) {
			return res.status(404).send({
				message: "Pessoa não encontrada com o id: " + req.params.id
			});
		}
		res.send(pessoa);
	} catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pessoa não encontrada com o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Erro ao recuperar a pessoa com o id " + req.params.id
        });
    }
};