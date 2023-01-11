const Doacao = require('../models/doacao.model');

exports.createDoacao = async (req, res) => {
    const newDoacao = new Doacao({
        pessoa: req.body.pessoa,
        localColeta: req.body.localColeta,
        data: req.body.data
    });

    try {
        const doacao = await newDoacao.save();
        res.send(doacao);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocorreu um erro ao criar a doação"
        });
    }
};

exports.getAllDoacoes = async (req, res) => {
    try {
        const doacoes = await Doacao.find();
        res.send(doacoes);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocorreu um erro ao recuperar as doações"
        });
    }
};