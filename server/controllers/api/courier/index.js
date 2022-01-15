const router = require("express").Router();

const { User, Shipment, Courier, Address } = require("../../../../models");

// Get all couriers

router.get("/", async (req, res) => {
  try {
    const allCouriers = await Courier.findAll({
      attributes: ["id", "courier_name"],
    });
    res.status(200).json(allCouriers);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving couriers data from database.");
  }
});

// Get one courier

module.exports = router;
