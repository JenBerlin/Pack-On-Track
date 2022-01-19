// const { send } = require("express/lib/response")
const { Address, Courier, Shipment, User } = require("../../../models");

const renderDashboardPage = async (req, res) => {
  console.log(`Dashboard`);
  const id = req.session.userId;
  let dashboard = await User.findByPk(id, {
    include: [
      {
        model: Shipment,
        include: [
          { model: Courier },
          { model: Address, attributes: ["library_keyword", "id"] },
        ],
      },
      { model: Address, attributes: ["library_keyword", "id"] },
    ],
  });
  dashboard = dashboard.get({ plain: true });
  const variables = {
    dashboard,
    logged_in: req.session.logged_in,
  };
  res.render("dashboard", variables);
};

const renderProfilePage = async (req, res) => {
  console.log(`Profile`);
  const id = req.session.userId;
  console.log(req.session);
  let profile = await User.findByPk(id, {
    include: [{ model: Address, attributes: ["library_keyword", "id"] }],
  });
  profile = profile.get({ plain: true });
  const variables = {
    profile,
    logged_in: req.session.logged_in,
  };
  console.log(variables);
  res.render(`profile`, { variables });
};

const renderShipmentFormPage = (req, res) => {
  console.log(`New Shipment`);
  //const couriers = await Courier.findAll()
  //const variables = {...couriers,  logged_in: req.session.logged_in}
  res.render(`shipment`, {
    title: "New Shipment",
    logged_in: req.session.logged_in,
  });
};
const renderEditShipmentFormPage = async (req, res) => {
  console.log(`Edit Shipment`);
  const id = req.params.id;
  let shipment = await Shipment.findByPk(id, {
    include: [
      { model: Courier },
      { model: Address, attributes: ["library_keyword", "id"] },
    ],
  });
  shipment = shipment.get({ plain: true });
  const variables = {
    title: "Edit Shipment",
    shipment,
    isEdit: true,
    logged_in: req.session.logged_in,
  };
  console.log(variables);
  res.render(`shipment`, variables);
};
const renderAddressFormPage = (req, res) => {
  console.log(`New Address`);
  res.render(`address`, {
    title: "New Address",
    logged_in: req.session.logged_in,
  });
};
const renderEditAddressFormPage = async (req, res) => {
  console.log(`Edit Address`);

  //fetch the address data from the model
  const id = req.params.id;
  let address = await Address.findByPk(id);
  address = address.get({ plain: true });

  const variables = {
    address,
    title: "Edit Address",

    isEdit: true,
    logged_in: req.session.logged_in,
  };
  console.log(variables);
  res.render(`address`, variables);
};

module.exports = {
  renderDashboardPage,
  renderProfilePage,
  renderShipmentFormPage,
  renderEditShipmentFormPage,
  renderAddressFormPage,
  renderEditAddressFormPage,
};
