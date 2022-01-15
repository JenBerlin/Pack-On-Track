const router = require("express").Router();
const sequelize = require("../../../../config/connection");

const { User, Shipment, Courier, Address } = require("../../../../models");
const auth = require("../../../auth");

// Create shipment - POST request

router.post("/", async (req, res) => {
  try {
    const newShipment = {
      user_id: req.session.user_id, // not possible to update
      address_id: req.body.address_id, // not possible to update
      courier_id: req.body.courier_id, // not possible to update
      tricking_number: req.body.tricking_number,
      order_number: req.body.order_number,
      description: req.body.description,
      order_made: req.body.order_made,
      expected_arrival: req.body.expected_arrival,
    };
    const successShipment = await Shipment.create(newShipment);
    return res.status(200).json(successShipment.get({ plain: true }));
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to create shipment." });
  }
});

// View(read) shipment - Get request
// Update shipment - PUT request
// Delete shipment - DELETE request

module.exports = router;
