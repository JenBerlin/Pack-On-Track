const { Courier } = require("../models");

const courierData = [
  {
    courier_name: "Amazon",
  },
  {
    courier_name: "DHL",
  },
  {
    courier_name: "Hermes",
  },
];

const seedCouriers = () => Courier.bulkCreate(courierData);

module.exports = seedCouriers;
