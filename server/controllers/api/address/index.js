const router = require("express").Router();
const sequelize = require("../../../../config/connection");

const { User, Shipment, Courier, Address } = require("../../../../models");
const auth = require("../../../auth");

// Create address - POST request

router.post("/", async (req, res) => {
  try {
    const newAddress = {
      user_id: req.session.user_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      street: req.body.street,
      street_number: req.body.street_number,
      additional_line: req.body.additional_line,
      company: req.body.company,
      post_number: req.body.post_number,
      city: req.body.city,
      country: req.body.country,
      library_keyword: req.body.library_keyword,
    };
    const successAddress = await Address.create(newAddress);
    return res.status(200).json(successAddress.get({ plain: true }));
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to create address." });
  }
});

// View(read) address - GET request

// Update address - PUT request
// Delete address - DELETE request

module.exports = router;
