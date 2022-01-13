const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Courier extends Model {}

Courier.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    courier_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "courier",
  }
);

module.exports = Courier;
