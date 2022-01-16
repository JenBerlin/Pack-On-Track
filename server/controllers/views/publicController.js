const { send } = require("express/lib/response");

const renderLoginSignUpPage = (req, res) => {
  res.render(`loginsignup`);
  console.log(`loginsignup`);
};

const renderLandingPage = (req, res) => {
  res.render(`home`);
  console.log(`home/landing page`);
};

module.exports = {
  renderLoginSignUpPage,
  renderLandingPage,
};
