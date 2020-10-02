const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Usuario = require('../model/Usuario');
const bcrypt = require('bcrypt');

JWT_SECRET = process.env.JWT_SECRET;

router.post('/', async (req, res) => {
  let usuario = await Usuario.findOne({email: req.body.email});

  if (usuario === null) {
    res.status(500).json({auth: false, mensagem: 'usuário não encontrado'});
  } else if (await bcrypt.compare(req.body.senha, usuario.senha)) {
    let payload = {
      username: 'admin',
      roles: ['ADMIN', 'USUARIO']
    };

    let token = jwt.sign(payload, JWT_SECRET, {expiresIn: 300});

    res.status(200).json({auth: true, token: token});
  } else {
    res.status(500).json({auth: false, mensagem: 'login ou senha inválidos'});
  }
});

module.exports = router;