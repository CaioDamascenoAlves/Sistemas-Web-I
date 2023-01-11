const mongoose = require('mongoose');
const { Schema } = mongoose;

const DoacaoSchema = new Schema({
    pessoa: {
        type: Schema.Types.ObjectId,
        ref: 'Pessoa',
    },
    localColeta: {
        type: Schema.Types.ObjectId,
        ref: 'LocalColeta',
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
