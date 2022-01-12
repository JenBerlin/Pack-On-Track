const { Router } = require("express");
const {
    renderEmptyAddressForm,
    renderEditAddressForm
} = require("../../../controllers/views/privateController/address")


const router = Router();

router.get("/", renderEmptyAddressForm); //router
router.get("/:id", renderEditAddressForm); //router