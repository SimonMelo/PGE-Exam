'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advogado extends Model {

    static associate(models) {

    }
  }
  Advogado.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    CNPJ: DataTypes.STRING,
    OAB: DataTypes.STRING,
    documento: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Advogado',
  });
  return Advogado;
};