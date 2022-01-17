// const { send } = require("express/lib/response")

const renderDashboardPage = (req, res) => {
  console.log(`Dashboard`);
  res.render(`dashboard`, { logged_in: req.session.logged_in });
};
const renderProfilePage = (req, res) => {
  console.log(`Profile`);
  res.render(`profile`, { logged_in: req.session.logged_in });
};
const renderShiptmentFormPage = (req, res) => {
  console.log(`New Shipment`);
  res.render(`shipment`, { logged_in: req.session.logged_in });
};
const renderEditShiptmentFormPage = (req, res) => {
  console.log(`Edit Shipment`);
  res.render(`shipment`, { logged_in: req.session.logged_in });
};
const renderAddressFormPage = (req, res) => {
  console.log(`New Address`);
  res.render(`address`, {
    title: "New Address",
    address: {
      user_id: "",
      first_name: "",
      last_name: "",
      street: "",
      street_number: "",
      company: "",
      additional_line: "",
      post_number: "",
      city: "",
      country: "",
      library_keyword: "",
    },
    logged_in: req.session.logged_in,
  });
};
const renderEditAddressFormPage = (req, res) => {
  console.log(`Edit Address`);
  res.render(`address`, {
    title: "Edit Address",
    address: {
      user_id: 1,
      first_name: "Quentin",
      last_name: "Lernantino",
      street: "Paris Avenue",
      street_number: "15-A",
      company: "Lernantino Productions",
      additional_line: "2nd Floor",
      post_number: 15005,
      city: "Paris",
      country: "France",
      library_keyword: "Home",
    },
    isEdit: true,
    logged_in: req.session.logged_in,
  });
};

module.exports = {
  renderDashboardPage,
  renderProfilePage,
  renderShiptmentFormPage,
  renderEditShiptmentFormPage,
  renderAddressFormPage,
  renderEditAddressFormPage,
};
