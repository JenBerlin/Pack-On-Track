const renderLoginSignUpPage = (req, res) => {
  res.render("loginSignup");
  console.log("Rendering login signup");
};

const renderLandingPage = (req, res) => {
  res.render(`landing`);
  console.log("Rendering landing");
};

module.exports = {
  renderLoginSignUpPage,
  renderLandingPage,
};
