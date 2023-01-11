const mongoose = require('mongoose');
const { Schema } = mongoose;

const PessoaSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  rua: {
    type: String,
    required: true
  },
  numero: {
    type: Number,
    required: true
  },
  complemento: {
    type: String
  },
  documento: {
    type: String,
    required: true
  },
  cidade: {
    type: Schema.Types.ObjectId,
    ref: 'Cidade'
  },
  tipo_sanguineo: {
    type: Schema.Types.ObjectId,
    ref: 'TipoSanguineo'
  },
  
},{
	timestamps: true,
  	collerction: 'pessoas',
});

const Pessoa = mongoose.model('Pessoa', PessoaSchema);
module.exports = Pessoa;