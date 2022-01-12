const { Router } = require("express");
const {
    renderLoginSignUpPage,
    renderLandingPage,
} = require("../../../controllers/views/publicController")

const router = Router();

router.get("/login", renderLoginSignUpPage);
router.get("/", renderLandingPage);

module.exports = router;
