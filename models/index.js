const User = require("./User");
const Address = require("./Address");
const Shipment = require("./Shipment");
const Courier = require("./Courier");

User.hasMany(Address, {
  foreignKey: "user_id",
});

Address.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Shipment, {
  foreignKey: "user_id",
});

Shipment.belongsTo(User, {
  foreignKey: "user_id",
});

Address.hasMany(Shipment, {
  foreignKey: "address_id",
});

Shipment.belongsTo(Address, {
  foreignKey: "address_id",
});

Courier.hasMany(Shipment, {
  foreignKey: "courier_id",
});

Shipment.belongsTo(Courier, {
  foreignKey: "courier_id",
});

module.exports = { User, Address, Shipment, Courier };
