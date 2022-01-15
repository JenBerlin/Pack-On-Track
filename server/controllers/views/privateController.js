// const { send } = require("express/lib/response")

const renderDashboardPage = (req, res) => {
    console.log(`Dashboard`);
    res.render(`dashboard`, { logged_in: req.session.logged_in });
}
const renderProfilePage = (req, res) => {
    console.log(`Profile`);
    res.render(`profile`, { logged_in: req.session.logged_in });
}
const renderShiptmentFormPage = (req, res) => {
    console.log(`New Shipment`);
    res.render(`shipment`, { logged_in: req.session.logged_in });
}
const renderEditShiptmentFormPage = (req, res) => {
    console.log(`Edit Shipment`);
    res.render(`shipment`, { logged_in: req.session.logged_in });
}
const renderAddressFormPage = (req, res) => {
    console.log(`New Address`);
    res.render(`address`, { logged_in: req.session.logged_in });
}
const renderEditAddressFormPage = (req, res) => {
    console.log(`Edit Address`);
    res.render(`address`, { logged_in: req.session.logged_in });
}

module.exports = {
    renderDashboardPage,
    renderProfilePage,
    renderShiptmentFormPage,
    renderEditShiptmentFormPage,
    renderAddressFormPage,
    renderEditAddressFormPage
}