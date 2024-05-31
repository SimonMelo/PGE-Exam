const express = require('express');
const router = express.Router();
const db = require('../models');

// Anexar documento ao processo
router.post('/', async (req, res) => {
  try {
    const documento = await db.Documento.create(req.body);
    res.status(201).json(documento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Desanexar documento do processo
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.Documento.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Documento não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
