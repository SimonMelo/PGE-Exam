const express = require('express');
const router = express.Router();
const db = require('../models');

// Criar advogado
router.post('/', async (req, res) => {
  try {
    const advogado = await db.Advogado.create(req.body);
    res.status(201).json(advogado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter advogado por ID
router.get('/:id', async (req, res) => {
  try {
    const advogado = await db.Advogado.findByPk(req.params.id);
    if (!advogado) {
      return res.status(404).json({ message: 'Advogado não encontrado' });
    }
    res.json(advogado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar advogado
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await db.Advogado.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ message: 'Advogado não encontrado' });
    }
    const updatedAdvogado = await db.Advogado.findByPk(req.params.id);
    res.json(updatedAdvogado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar advogado
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.Advogado.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Advogado não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
