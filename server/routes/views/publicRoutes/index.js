const { Router } = require("express");
const {
  renderLoginSignUpPage,
  renderLandingPage,
  renderAboutPage,
  renderFAQPage,
} = require("../../../controllers/views/publicController");

const router = Router();

router.get("/", renderLandingPage);
router.get("/login", renderLoginSignUpPage);
router.get("/about-us", renderAboutPage);
router.get("/faq", renderFAQPage);

module.exports = router;
