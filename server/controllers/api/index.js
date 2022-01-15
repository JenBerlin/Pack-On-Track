const router = require("express").Router();

const userRoutes = require("./user");
const shipmentRoutes = require("./shipment");
const courierRoutes = require("./courier");
const addressRoutes = require("./address");

router.use("/user", userRoutes);
router.use("/shipment", shipmentRoutes);
router.use("/courier", courierRoutes);
router.use("/address", addressRoutes);

module.exports = router;
