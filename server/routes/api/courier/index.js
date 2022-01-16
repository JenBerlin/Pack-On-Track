const { Router } = require("express");
const {
    getAllCouriers,
    getOneCourier
} = require("../../../controllers/api/courier")

const router = Router();

// Get all couriers

router.get("/", getAllCouriers);

// Get one courier

router.get("/:id", getOneCourier);

module.exports = router;