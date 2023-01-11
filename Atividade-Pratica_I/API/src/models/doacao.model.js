const mongoose = require('mongoose');
const { Schema } = mongoose;

const DoacaoSchema = new Schema({
    pessoa: {
        type: Schema.Types.ObjectId,
        ref: 'Pessoa',
        required: true
    },
    localColeta: {
        type: Schema.Types.ObjectId,
        ref: 'LocalColeta',
        required: true
    },
    data: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    collection: 'doacoes'
});

const Doacao = mongoose.model('Doacao', DoacaoSchema);
module.exports = Doacao;
