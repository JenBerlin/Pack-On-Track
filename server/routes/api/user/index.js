const { Router } = require("express");
const {
  userLogin,
  userLogout,
  userSignup,
  updateUser,
  deleteUser,
} = require("../../../controllers/api/user");

const router = Router();

// Login - POST request
router.post("/login", userLogin);

// Logout - GET request
router.post("/logout", userLogout);

// Create User - Sign Up - POST request
router.post("/signup", userSignup);

// Update User - PUT request
router.put("/:id", updateUser);

// Delete User - DELETE request
router.delete("/:id", deleteUser);

module.exports = router;
