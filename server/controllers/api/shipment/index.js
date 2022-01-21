const sequelize = require("../../../../config/connection");

const { User, Shipment, Courier, Address } = require("../../../../models");
const auth = require("../../../auth");

// Create shipment - POST request

const createNewShipment = async (req, res) => {
  const userId = req.session.userId;
  try {
    const newShipment = {
      user_id: userId,
      address_id: req.body.address_id,
      courier_id: req.body.courier_id,
      tracking_number: req.body.tracking_number,
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
};

// View(read) a shipment - Get request

const getOneShipment = async (req, res) => {
  try {
    const allShipments = await Shipment.findByPk(req.params.id, {
      attributes: [
        "id",
        "user_id",
        "address_id",
        "courier_id",
        "tracking_number",
        "order_number",
        "description",
        "order_made",
        "expected_arrival",
      ],
    });
    if (!allShipments) {
      res.status(404).json("No shipment with this ID in the database");
      return;
    }
    res.status(200).json(allShipments);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving shipment data from database.");
  }
};

// View(read) all shipments - Get request

const getAllShipments = async (req, res) => {
  try {
    const allShipments = await Shipment.findAll({
      attributes: [
        "id",
        "user_id",
        "address_id",
        "courier_id",
        "tracking_number",
        "order_number",
        "description",
        "order_made",
        "expected_arrival",
      ],
    });
    res.status(200).json(allShipments);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving shipments data from database.");
  }
};

// Update shipment - PUT request

const updateShipment = async (req, res) => {
  try {
    await Shipment.update(
      {
        user_id: req.session.user_id, // should not be possible to update?
        address_id: req.body.address_id,
        courier_id: req.body.courier_id,
        tracking_number: req.body.tracking_number,
        order_number: req.body.order_number,
        description: req.body.description,
        order_made: req.body.order_made,
        expected_arrival: req.body.expected_arrival,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({ data: "Shipment succesfully updated." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to update shipment." });
  }
};

// Delete shipment - DELETE request

const deleteShipment = async (req, res) => {
  try {
    await Shipment.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({ data: "Shipment successfully deleted." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to delete shipment." });
  }
};

module.exports = {
  createNewShipment,
  getOneShipment,
  getAllShipments,
  updateShipment,
  deleteShipment,
};
