const { Router } = require("express");
const {
    renderDashboardPage,
    renderProfilePage,
    renderShiptmentFormPage,
    renderAddressFormPage
} = require("../../../controllers/views/privateController")


const router = Router();

router.get("/dashboard", renderDashboardPage); //router
router.get("/profile", renderProfilePage); //router
router.get("/shipment", renderShiptmentFormPage); //router
router.get("/address", renderAddressFormPage); //router