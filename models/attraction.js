"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attraction.belongsTo(models.City, {
        foreignKey: "city_id",
        as: "city",
      });

      Attraction.hasMany(models.AttractionImage, {
        foreignKey: "attraction_id",
        as: "images",
      });
    }
  }
  Attraction.init(
    {
      name: DataTypes.STRING,
      thumbnail: DataTypes.TEXT,
      persona: DataTypes.STRING,
      city_id: DataTypes.INTEGER,
      isPopular: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Attraction",
    }
  );
  return Attraction;
};
