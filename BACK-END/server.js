const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send({ message: 'No token provided.' });
  }
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
};

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.use(authMiddleware);

// Rotas protegidas
const clienteRoutes = require('./routes/clientes');
const advogadoRoutes = require('./routes/advogados');
const processoRoutes = require('./routes/processosJudiciais');
const documentoRoutes = require('./routes/documentos');

app.use('/clientes', clienteRoutes);
app.use('/advogados', advogadoRoutes);
app.use('/processos', processoRoutes);
app.use('/documentos', documentoRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

module.exports = app;
