const { Router } = require("express");
const {
    renderProfilePage
} = require("../../../../controllers/views/privateController")


const router = Router();

router.get("/:id", renderProfilePage);
router.get("/", renderProfilePage);

module.exports = router;
