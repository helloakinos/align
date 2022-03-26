// require("passport");

// middleware to check if the user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user) {
      return next();
    }
  }

  res.redirect("/login");
}

function isLoggedInSeeker(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user.type == "seeker") {
      return next();
    }
  }

  res.redirect("/login");
}

function isLoggedInFinder(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user.type == "finder") {
      return next();
    }
  }

  res.redirect("/login");
}

function isOurFinder(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(`I am authenticated`);
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user.type == "finder") {
      return next();
    }
  }
  console.log(`I am not authenticated`);

  next();
}

module.exports = {
  isLoggedIn,
  isLoggedInSeeker,
  isLoggedInFinder,
  isOurFinder,
};
