const router = require("express").Router();

const addressRoutes = require("./address");
const courierRoutes = require("./courier");
const shipmentRoutes = require("../../controllers/api/shipment");
const userRoutes = require("../../controllers/api/user");

router.use("/user", userRoutes);
// router.use("/address", addressRoutes);
router.use("/shipment", shipmentRoutes);
// router.use("/courier", courierRoutes);

module.exports = router;
