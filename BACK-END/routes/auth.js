const express = require('express');
const router = express.Router();
const db = require('../models');
const jwt = require('jsonwebtoken');

// Registro de usuário
router.post('/register', async (req, res) => {
  console.log('Requisição de Registro Recebida:', req.body);
  try {
    const user = await db.User.create({
      nome: req.body.nome,
      documento: req.body.documento,
      endereco: req.body.endereco,
      documento_file: req.body.documento_file,
      role: req.body.role
    });
    console.log('Usuário criado:', user);
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400 // 24 horas
    });
    console.log('Token gerado:', token);
    res.status(201).json({ auth: true, token });
  } catch (error) {
    console.error('Erro ao Registrar Usuário:', error);
    res.status(400).json({ error: error.message });
  }
});

// Login de usuário
router.post('/login', async (req, res) => {
  console.log('Requisição de Login Recebida:', req.body);
  try {
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400 // 24 horas
    });
    res.status(200).json({ auth: true, token });
  } catch (error) {
    console.error('Erro ao Logar Usuário:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
