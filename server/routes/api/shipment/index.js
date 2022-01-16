const { Router } = require("express");
const {
    createNewShipment,
    getOneShipment,
    getAllShipments,
    updateShipment,
    deleteShipment
} = require("../../../controllers/api/shipment")


const router = Router();

// Create shipment - POST request

router.post("/", createNewShipment);
  
  // View(read) a shipment - Get request
  
  router.get("/:id", getOneShipment);
  
  // View(read) all shipments - Get request
  
  router.get("/", getAllShipments);
  
  // Update shipment - PUT request
  
  router.put("/:id", updateShipment);
  
  // Delete shipment - DELETE request
  
  router.delete("/:id", deleteShipment);

module.exports = router;