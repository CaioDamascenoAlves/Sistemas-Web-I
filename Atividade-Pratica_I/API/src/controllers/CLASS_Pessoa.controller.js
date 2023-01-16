const Pessoa = require('../models/pessoa.model');

class PessoaController {
    createPessoa = async (req, res) =>{
        try {
            const pessoa = this.createPessoaFromRequest(req);
            const savedPessoa = await this.savePessoa(pessoa);
            res.send(savedPessoa);
        } catch (err) {
            this.handleError(err, res, "Algum erro ocorreu ao criar a pessoa.");
        }
    }

    async getAllPessoas(req, res) {
        try{
            const pessoas = await Pessoa.find();
            res.send(pessoas);
        } catch (err){
            this.handleError(err, res, "Erro ao recuperar as pessoas.");
        }
    }

    async getPessoaById(req, res) {
        try {
            const pessoa = await Pessoa.findById(req.params.id);
            if(!pessoa) {
                return this.handleError(req.params.id, res, 404, "Pessoa não encontrada com o id: ");
            }
            res.send(pessoa);
        } catch (err) {
            if(err.kind === 'ObjectId') {
                return this.handleError(req.params.id, res, 404, "Pessoa não encontrada com o id: ");                
            }
            return this.handleError(req.params.id, res, 500, "Erro ao recuperar a pessoa com o id: ");
        }
    }

    createPessoaFromRequest(req) {
        return new Pessoa({
            nome: req.body.nome,
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            documento: req.body.documento,
            cidade: req.body.cidade,
            tipo_sanguineo: req.body.tipo_sanguineo,
        });
    }

    async savePessoa(pessoa) {
        return pessoa.save();
    }

    handleError(err, res, message) {
        res.status(500).send({
            message: message || err.message
        });
    }
}

module.exports = new PessoaController();
