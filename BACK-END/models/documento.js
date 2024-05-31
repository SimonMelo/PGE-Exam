'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documento extends Model {
    static associate(models) {
    }
  }
  Documento.init({
    nome: DataTypes.STRING,
    caminho: DataTypes.STRING,
    extensao: DataTypes.STRING,
    processoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Documento',
  });
  return Documento;
};