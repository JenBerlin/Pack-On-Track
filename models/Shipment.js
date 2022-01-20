const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Shipment extends Model {}

Shipment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    address_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "address",
        key: "id",
      },
    },
    courier_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "courier",
        key: "id",
      },
    },
    // Some tracking numbers have letters
    tracking_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_from: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order_made: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expected_arrival: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "shipment",
  }
);

module.exports = Shipment;
