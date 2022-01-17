const { Router } = require("express");
const {
    renderShipmentFormPage,
    renderEditShipmentFormPage
} = require("../../../../controllers/views/privateController")


const router = Router();

router.get("/", renderShipmentFormPage );
router.get("/:id", renderEditShipmentFormPage);

module.exports = router;