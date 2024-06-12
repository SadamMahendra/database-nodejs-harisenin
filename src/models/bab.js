"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bab.belongsTo(models.mata_pembelajaran, {
        foreignKey: "id_mata_pembelajaran",
        as: "mata_pembelajarans",
      });
      bab.hasMany(models.sub_bab, {
        foreignKey: "id_bab",
        as: "sub_babs",
      });
    }
  }
  bab.init(
    {
      nama_bab: DataTypes.STRING,
      id_mata_pembelajaran: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bab",
      underscored: true,
    }
  );
  return bab;
};
