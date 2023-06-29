"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    static associate(models) {
      // define association here
      Allcode.hasMany(models.User, {
        foreignKey: "positionId",
        as: "positionData",
      });
      Allcode.hasMany(models.User, { foreignKey: "gender", as: "genderData" });
    }
  }

  Allcode.init(
    {
      keyMap: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valueEn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valueVi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );

  return Allcode;
};
