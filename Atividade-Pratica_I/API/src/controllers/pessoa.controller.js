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

exports.getPessoaById = async (req, res) => {
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

exports.getPessoaByNome = async (req, res) => {
    try {
        const pessoa = await Pessoa.findOne({nome: req.params.nome});
        if(!pessoa) {
            return res.status(404).send({
                message: "Pessoa não encontrada com o nome " + req.params.nome
            });
        }
        res.send(pessoa);
    } catch (err) {
        return res.status(500).send({
            message: "Erro ao recuperar a pessoa com o nome " + req.params.nome
        });
    }
};

exports.updatePessoaById = async (req, res) => {
    try {
        const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!pessoa) {
            return res.status(404).send({
                message: "Pessoa não encontrada com o id " + req.params.id
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
            message: "Erro ao atualizar a pessoa com o id " + req.params.id
        });
    }
};

exports.deletePessoaById = async (req, res) => {
    try {
        const pessoa = await Pessoa.findByIdAndRemove(req.params.id);
        if(!pessoa) {
            return res.status(404).send({
                message: "Pessoa não encontrada com o id " + req.params.id
            });
        }
        res.send({ message: "Pessoa deletada com sucesso!" });
    } catch (err) {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Pessoa não encontrada com o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Não foi possível deletar a pessoa com o id " + req.params.id
        });
    }
};
