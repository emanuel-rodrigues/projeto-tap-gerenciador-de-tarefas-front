const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: String,
  senha: String,
});

module.exports = mongoose.model('Usuario', usuarioSchema);