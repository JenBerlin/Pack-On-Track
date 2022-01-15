
const { Router } = require("express");

const dashboardRouter = require("./dashboard")
const addressRouter = require("./address")
const shipmentRouter = require("./shipment")
const profileRouter = require("./profile")

const router = Router();

router.use("/dashboard",dashboardRouter);
router.use("/address",addressRouter);
router.use("/shipment",shipmentRouter);
router.use("/profile",profileRouter);

module.exports = router;