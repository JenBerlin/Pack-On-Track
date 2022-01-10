const { Router } = require("express");
const {
    renderDashboardPage,
    renderProfilePage,
    renderShiptmentFormPage,
    renderAddressFormPage
} = require("../../../controllers/views/privateController")


const router = Router();

router.get("/dashboard", renderDashboardPage);
router.get("/profile", renderProfilePage);
router.get("/shipment", renderShiptmentFormPage);
router.get("/address", renderAddressFormPage);
// router.get("/editshipment", renderLandingPage);
// router.get("/newaddress", renderLandingPage);
// router.get("/editaddress", renderLandingPage);