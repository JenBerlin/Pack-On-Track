const { Router } = require("express");
const {
    renderShiptmentFormPage,
    renderEditShiptmentFormPage
} = require("../../../../controllers/views/privateController")


const router = Router();

router.get("/", renderShiptmentFormPage );
router.get("/:id", renderEditShiptmentFormPage);

module.exports = router;