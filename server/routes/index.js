const { Router } = require("express");

// const api = require("./api");
const view = require("./views");
const apiRoutes = require("./api");

const router = Router();

// router.use("/api", api);
router.use("/api", apiRoutes);
router.use("/", view);

module.exports = router;
