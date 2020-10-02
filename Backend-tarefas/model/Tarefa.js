const mongoose = require('mongoose');

// Crio o schema
const tarefaSchema = new mongoose.Schema({
  nome: String,
  tempo: Number,
  horario: String,
  descricao: String,
});

// Crio e exporto o modelo
module.exports = mongoose.model('Tarefa', tarefaSchema);