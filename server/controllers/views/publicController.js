const renderLoginSignUpPage = (req, res) => {
  res.render("loginSignup", { logged_in: req.session.loggedIn });
  console.log("Rendering login signup");
};

const renderLandingPage = (req, res) => {
  res.render(`landing`, { logged_in: req.session.loggedIn });
  console.log("Rendering landing");
};

module.exports = {
  renderLoginSignUpPage,
  renderLandingPage,
};
