const router = require("express").Router();
const sequelize = require("../../../../config/connection");

const { User, Shipment, Courier, Address } = require("../../../../models");
const auth = require("../../../auth"); // if user not logged in, gets redirected to /login

// Login - POST request
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        name: req.body.name,
      },
    });
    console.log("user");
    if (!user) {
      res.status(400).json({ message: "Incorrect username or password." });
      return;
    }
    // Check if password correct
    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect username or password." });
      return;
    }

    // Once user is logged in, set up the session variable "loggedIn", save user data in session
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = user.id;
      req.session.username = user.name;
      return res.status(200).json({ user, message: "You are logged in!" });
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed login." });
  }
});

// Logout - GET request
router.get("/logout", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  req.session.loggedIn = false;
  delete req.session.user_id;
  res.redirect("/");
});

// Create User - Sign Up - POST request

// Update User - PUT request

// Delete User - DELETE request

module.exports = router;
