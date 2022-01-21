// const { send } = require("express/lib/response")
const { Address, Courier, Shipment, User } = require("../../../models");

const renderDashboardPage = async (req, res) => {
    console.log(`Dashboard`);
    const id = req.session.userId;
    console.log(id)
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
        logged_in: req.session.loggedIn,
    };
    res.render("dashboard", variables);
};

const renderProfilePage = async (req, res) => {
    const id = req.session.userId;
    console.log(id)
    let profile = await User.findByPk(id, {
        include: [{ model: Address, attributes: ["library_keyword", "id"] }],
    });
    profile = profile.get({ plain: true });
    const variables = {
        profile,
        logged_in: req.session.loggedIn,
    };
    res.render(`profile`, variables);
};

const renderShipmentFormPage = async (req, res) => {
    const userId = req.session.userId;
    let couriers = await Courier.findAll()
    let addresses = await Address.findAll(
        {
            where: {
                user_id: userId,
            },
        }
    )
    //const variables = {...couriers,  logged_in: req.session.logged_in}
    couriers = couriers.map(courier => courier.get({ plain: true }))
    addresses = addresses.map(address => address.get({ plain: true }))
    res.render(`shipment`, {
        title: "New Shipment",
        couriers,
        logged_in: req.session.logged_in,
    });
};
const renderEditShipmentFormPage = async (req, res) => {
    const userId = req.session.userId;
    let couriers = await Courier.findAll();
    let addresses = await Address.findAll(
        {
            where: {
                user_id: userId,
            },
        }
    )
    const id = req.params.id;
    let shipment = await Shipment.findByPk(id, {
        include: [
            { model: Courier },
            { model: Address, attributes: ["library_keyword", "id"] },
        ],
    });
    couriers = couriers.map(courier => courier.get({ plain: true }))
    addresses = addresses.map(address => address.get({ plain: true }))
    shipment = shipment.get({ plain: true });

    addresses.forEach(address => {
        address.isSelected = shipment.address.id == address.id;
    })

    couriers.forEach(courier => {
        courier.isSelected = shipment.courier.id == courier.id;
    })

    const variables = {
        title: "Edit Shipment",
        couriers,
        shipment,
        addresses,
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
        logged_in: req.session.loggedIn,
    };
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
