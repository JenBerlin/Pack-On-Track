const router = require("express").Router();
const sequelize = require("../../../../config/connection");

const { User, Shipment, Courier, Address } = require("../../../../models");
const auth = require("../../../auth"); // if user not logged in, gets redirected to /login
const { beforeCreate, beforeUpdate } = require("../../../../server/hooks/");

// Login - POST request
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });
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
      req.session.user_name = user.user_name;
      return res.status(200).json({ user, message: "You are logged in!" });
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed login." });
  }
});

// Logout - GET request
router.post("/logout", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res.status(200).json({ data: "Sign out successful." });
    });
  } else {
    return res.status(500).json({ data: "Sign out failed." });
  }
});

// Create User - Sign Up - POST request
router.post("/signup", async (req, res) => {
  try {
    if (req.body.user_name && req.body.password) {
      await User.create({
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(200).json({ data: "success" });
    }

    return res.status(400).json({ error: "Failed to create user." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to create user." });
  }
});

// Update User - PUT request
router.put("/:id", async (req, res) => {
  try {
    await User.update(
      {
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).json({ data: "Successfully updated user." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to update user." });
  }
});

// Delete User - DELETE request
router.delete("/:id", async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({ data: "successfully deleted user." });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed to delete user." });
  }
});

module.exports = router;
