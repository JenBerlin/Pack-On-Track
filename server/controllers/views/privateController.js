// const { send } = require("express/lib/response")

const { Router } = require("express");
const { Address, Courier, Shipment } = require("../../../models");

const renderDashboardPage = (req, res) => {
  console.log(`Dashboard`);
  res.render(`dashboard`, { logged_in: req.session.logged_in });
};
const renderProfilePage = (req, res) => {
  console.log(`Profile`);
  res.render(`profile`, { logged_in: req.session.logged_in });
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
  let couriers = await Courier.findAll();
  let shipment = await Shipment.findByPk(id);
  couriers = couriers.map((courier) => courier.get({ plain: true }));
  //console.log(couriers);
  shipment = shipment.get({ plain: true });
  const variables = {
    couriers,
    ...shipment,
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
