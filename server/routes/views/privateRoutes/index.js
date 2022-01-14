
const { Router } = require("express");

// const dashboardRouter = require("./dashboard")
const addressRouter = require("./address")
const profileRouter = require("./profile")
const shipmentRouter = require("./shipment")

const router = Router();

// router.use(dashboardRouter);
router.use(addressRouter);
router.use(profileRouter);
router.use(shipmentRouter);

module.exports = router;