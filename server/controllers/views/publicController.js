const renderLoginSignUpPage = (req, res) => {
  res.render("loginSignup", { logged_in: req.session.loggedIn });
  console.log("Rendering login signup");
};

const renderLandingPage = (req, res) => {
  res.render(`landing`, { logged_in: req.session.loggedIn });
  console.log("Rendering landing");
};

const renderAboutPage = (req, res) => {
  res.render(`about-us`);
  console.log("Rendering about-us");
};

const renderFAQPage = (req, res) => {
  res.render(`faq`);
  console.log("Rendering faq");
};

module.exports = {
  renderLoginSignUpPage,
  renderLandingPage,
  renderAboutPage,
  renderFAQPage,
};
