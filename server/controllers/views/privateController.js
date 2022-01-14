const { send } = require("express/lib/response")

const renderDashboardPage = (req, res) => {
    console.log(`Dashboard`);
}
const renderProfilePage = (req, res) => {
    console.log(`Profile`);
}
const renderShiptmentFormPage = (req, res) => {
    console.log(`New Shipment`);
}
const renderEditShiptmentFormPage = (req, res) => {
    console.log(`Edit Shipment`);
}
const renderAddressFormPage = (req, res) => {
    console.log(`New Address`);
}
const renderEditAddressFormPage = (req, res) => {
    console.log(`Edit Address`);
}

module.exports = {
    renderDashboardPage,
    renderProfilePage,
    renderShiptmentFormPage,
    renderEditShiptmentFormPage,
    renderAddressFormPage,
    renderEditAddressFormPage
}