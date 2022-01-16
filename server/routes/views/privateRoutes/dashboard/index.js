const { Router } = require("express");
const {
    renderDashboardPage
} = require("../../../../controllers/views/privateController")


const router = Router();

router.get("/", renderDashboardPage); 

module.exports = router;
