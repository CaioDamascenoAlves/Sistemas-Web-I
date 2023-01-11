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