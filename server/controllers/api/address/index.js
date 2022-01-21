const sequelize = require("../../../../config/connection");

const { User, Shipment, Courier, Address } = require("../../../../models");
const auth = require("../../../auth");

// Create address - POST request

const createNewAddress = async (req, res) => {
  const userId = req.session.userId;
  try {
    const newAddress = {
      user_id: userId,
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
    console.log(newAddress);
    const successAddress = await Address.create(newAddress);
    return res.status(200).json(successAddress.get({ plain: true }));
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to create address." });
  }
}

// View(read) an address - GET request

const getOneAddress = async (req, res) => {
  try {
    const allAddresses = await Address.findByPk(req.params.id, {
      attributes: [
        "id",
        "user_id",
        "first_name",
        "last_name",
        "street",
        "street_number",
        "additional_line",
        "company",
        "post_number",
        "city",
        "country",
        "library_keyword",
      ],
    });
    if (!allAddresses) {
      res.status(404).json("No address with this ID in the database");
      return;
    }
    res.status(200).json(allAddresses);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving address data from database.");
  }
}

// View all addresses - GET request

const getAllAddresses = async (req, res) => {
  try {
    const allAddresses = await Address.findAll({
      attributes: [
        "id",
        "user_id",
        "first_name",
        "last_name",
        "street",
        "street_number",
        "additional_line",
        "company",
        "post_number",
        "city",
        "country",
        "library_keyword",
      ],
    });
    res.status(200).json(allAddresses);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error retrieving addresses data from database.");
  }
}

// Update address - PUT request

const updateAddress = async (req, res) => {
  try {
    await Address.update(
      {
        user_id: req.session.user_id, // should not be possible to update?
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
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({ data: "Address succesfully updated." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to update address." });
  }
}

// Delete address - DELETE request

const deleteAddress = async (req, res) => {
  try {
    await Address.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({ data: "Address successfully deleted." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to delete address." });
  }
}

module.exports = {
  createNewAddress,
  getOneAddress,
  getAllAddresses,
  updateAddress,
  deleteAddress
};
