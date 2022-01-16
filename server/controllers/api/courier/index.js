const { User, Shipment, Courier, Address } = require("../../../../models");

// Get all couriers

const getAllCouriers = async (req, res) => {
  try {
    const allCouriers = await Courier.findAll({
      attributes: ["id", "courier_name"],
    });
    res.status(200).json(allCouriers);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving couriers data from database.");
  }
}

// Get one courier

const getOneCourier = async (req, res) => {
  try {
    const allCouriers = await Courier.findByPk(req.params.id, {
      attributes: ["id", "courier_name"],
    });
    if (!allCouriers) {
      res
        .status(404)
        .json({ data: "No courier with this ID in the database." });
      return;
    }
    res.status(200).json(allCouriers);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving couriers data from database.");
  }
}

module.exports = {
  getAllCouriers,
  getOneCourier
};
