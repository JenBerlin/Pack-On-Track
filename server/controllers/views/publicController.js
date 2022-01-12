const { send } = require("express/lib/response")

const renderLoginSignUpPage = (req, res) => {
    console.log(`loginsignup`);

}

const renderLandingPage = (req, res) => {
    console.log(`landing page`);
}

module.exports = {
    renderLoginSignUpPage,
    renderLandingPage
}