const { Router } = require("express");
const {
    renderShiptmentFormPage,
    renderEditShiptmentFormPage
} = require("../../../../controllers/views/privateController")


const router = Router();

router.get("/:id", renderEditShiptmentFormPage);
router.get("/", renderShiptmentFormPage );

module.exports = router;