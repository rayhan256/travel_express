"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AttractionImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AttractionImage.belongsTo(models.Attraction, {
        foreignKey: "attraction_id",
        as: "attraction",
      });
    }
  }
  AttractionImage.init(
    {
      name: DataTypes.STRING,
      attraction_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AttractionImage",
    }
  );
  return AttractionImage;
};
