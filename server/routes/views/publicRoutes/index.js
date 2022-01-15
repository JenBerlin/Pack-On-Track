const { Router } = require("express");
const {
    renderLoginSignUpPage,
    renderLandingPage,
} = require("../../../controllers/views/publicController")

const router = Router();

router.get("/", renderLandingPage);
router.get("/login", renderLoginSignUpPage);

module.exports = router;
