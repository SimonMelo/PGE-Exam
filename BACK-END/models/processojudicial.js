'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProcessoJudicial extends Model {
    static associate(models) {

    }
  }
  ProcessoJudicial.init({
    numero_processo: DataTypes.STRING,
    tema: DataTypes.STRING,
    valor_causa: DataTypes.DECIMAL,
    clienteId: DataTypes.INTEGER,
    advogadoResponsavelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProcessoJudicial',
  });
  return ProcessoJudicial;
};