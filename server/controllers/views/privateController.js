// const { send } = require("express/lib/response")

const { Address } = require("../../../models");

const renderDashboardPage = (req, res) => {
    console.log(`Dashboard`);
    const user_id = req.session.user_id;
    res.render(`dashboard`, { logged_in: req.session.logged_in });
}
const renderProfilePage = (req, res) => {
    console.log(`Profile`);
    const user_id = req.session.user_id;
    //const shipment = await User.findByPk(id)
    //const variables = {...couriers, ...shipment, isEdit: true, logged_in: req.session.logged_in}
    res.render(`profile`, { logged_in: req.session.logged_in });
}
const renderShipmentFormPage = (req, res) => {
    console.log(`New Shipment`);
    //const couriers = await Courier.findAll()
    //const variables = {...couriers,  logged_in: req.session.logged_in}
    res.render(`shipment`, variables);
}
const renderEditShipmentFormPage = (req, res) => {
    console.log(`Edit Shipment`);
    const id = req.params.id;
    //const couriers = await Courier.findAll()
    //const shipment = await Shipment.findByPk(id)
    //const variables = {...couriers, ...shipment, isEdit: true, logged_in: req.session.logged_in}
    res.render(`shipment`, variables);
}
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
            post_number: "",
            city: "",
            country: "",
            library_keyword: "",
        },
        logged_in: req.session.logged_in
    });
}
const renderEditAddressFormPage = (req, res) => {
    console.log(`Edit Address`);
    const id = req.params.id;
    //fetch the address data from the model
    //const data = await Address.findByPk(id);
    const variables = {
        title: "Edit Address",
        address: {
            user_id: 1,
            first_name: "Quentin",
            last_name: "Lernantino",
            street: "Paris Avenue",
            street_number: "15-A",
            company: "Lernantino Productions",
            post_number: 15005,
            city: "Paris",
            country: "France",
            library_keyword: "Home",
        },
        isEdit: true,
        logged_in: req.session.logged_in
    }
    res.render(`address`, variables);
}

module.exports = {
    renderDashboardPage,
    renderProfilePage,
    renderShipmentFormPage,
    renderEditShipmentFormPage,
    renderAddressFormPage,
    renderEditAddressFormPage
}