const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocalColetaSchema = new Schema({
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
  cidade: {
    type: Schema.Types.ObjectId,
    ref: 'Cidade'
  },
},{
	timestamps: true,
  	collection: 'locaisColeta',
});

const LocalColeta = mongoose.model('LocalColeta', LocalColetaSchema);
module.exports = LocalColeta;