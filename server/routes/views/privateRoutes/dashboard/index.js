const { Router } = require("express");
const {
    renderDashboard
} = require("../../../controllers/views/privateController/dashboard")


const router = Router();

router.get("/", renderDashboard); 