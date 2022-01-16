const { Router } = require("express");

const {
    createNewAddress,
    getOneAddress,
    getAllAddresses,
    updateAddress,
    deleteAddress
} = require("../../../../controllers/api/address")


const router = Router();

// create new address - POST request

router.post("/", createNewAddress);

// View(read) an address - GET request

router.get("/:id", getOneAddress);

// View all addresses - GET request

router.get("/", getAllAddresses);

// Update address - PUT request

router.put("/:id", updateAddress);

// Delete address - DELETE request

router.delete("/:id", deleteAddress);


module.exports = router;