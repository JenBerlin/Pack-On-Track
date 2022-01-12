const { Router } = require("express");
const {
    renderEditProfileForm
} = require("../../../controllers/views/privateController/profile")


const router = Router();

router.get("/:id", renderEditProfileForm); //router