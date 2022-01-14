const auth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the login route
    req.session.logged_in = true;
    if (!req.session.logged_in) {
        console.log(`Not Logged In!`)
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = auth;
  