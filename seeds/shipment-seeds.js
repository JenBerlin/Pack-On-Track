const { Shipment } = require("../models");

const shipmentData = [
  {
    user_id: 1,
    address_id: 1,
    courier_id: 1,
    tracking_number: "202-3225740-9850726",
    description: "my new film lens",
    order_made: "12/1/2022",
  },
  {
    user_id: 1,
    address_id: 2,
    courier_id: 2,
    tracking_number: "3SBCC000123456",
    order_number: "B1505",
    description: "the cool sneakers I bought for Julia",
    expected_arrival: "1/2/2022",
  },
  {
    user_id: 2,
    address_id: 3,
    courier_id: 3,
    tracking_number: "H1020650004908302017",
    description: "top secret order... tell no one!",
    order_made: "12/1/2022",
  },
];

const seedShipments = () => Shipment.bulkCreate(shipmentData);

module.exports = seedShipments;
