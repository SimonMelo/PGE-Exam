const express = require('express');
const router = express.Router();
const db = require('../models');

// Criar processo judicial
router.post('/', async (req, res) => {
  try {
    const processo = await db.ProcessoJudicial.create(req.body);
    res.status(201).json(processo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter processo judicial por ID
router.get('/:id', async (req, res) => {
  try {
    const processo = await db.ProcessoJudicial.findByPk(req.params.id);
    if (!processo) {
      return res.status(404).json({ message: 'Processo não encontrado' });
    }
    res.json(processo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar processo judicial
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await db.ProcessoJudicial.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ message: 'Processo não encontrado' });
    }
    const updatedProcesso = await db.ProcessoJudicial.findByPk(req.params.id);
    res.json(updatedProcesso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar processo judicial
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.ProcessoJudicial.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ message: 'Processo não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Distribuir processo judicial para outro advogado
router.post('/:id/distribuir', async (req, res) => {
  try {
    const processo = await db.ProcessoJudicial.findByPk(req.params.id);
    if (!processo) {
      return res.status(404).json({ message: 'Processo não encontrado' });
    }
    processo.advogadoResponsavelId = req.body.advogadoId;
    await processo.save();
    res.json(processo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
