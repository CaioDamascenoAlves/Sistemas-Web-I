const LocalColeta = require('../models/localColeta.model');

exports.createLocalColeta = async (req, res) => {
    try {
        const novoLocal = new LocalColeta({
            nome: req.body.nome,
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            cidade: req.body.cidade,
        });
        const local = await novoLocal.save();
        res.send(local);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Erro ao salvar o local de coleta."
        });
    }
};

exports.getAllLocaisColeta = async (req, res) => {
    try {
        const locais = await LocalColeta.find();
        res.send(locais);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Erro ao recuperar os locais de coleta."
        });
    }
};

exports.getLocalColetaById = async (req, res) => {
    try {
        const local = await LocalColeta.findById(req.params.id);
        if(!local) {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });
        }
        res.send(local);
    } catch (err) {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Local de coleta não encontrado com o id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Erro ao recuperar o local de coleta com o id " + req.params.id
        });
    }
};