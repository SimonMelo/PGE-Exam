'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    razao_social: {
      type: DataTypes.STRING,
      allowNull: function() {
        return this.documento.length > 14 ? false : true;
      }
    },
    nome_fantasia: {
      type: DataTypes.STRING,
      allowNull: function() {
        return this.documento.length > 14 ? false : true;
      }
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento_file: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
  };
  return User;
};
