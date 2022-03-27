// function isCurrentFinder(finderId, currentFinder) {
//   if (finderId == currentFinder) {
//     console.log(`user matches the finder profile being viewed`);
//     return true;
//   } else {
//     console.log(`user does not match the finder profile being viewed`);
//     return false;
//   }
// }

function isCurrentUser(req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.cookies);
    console.log(req.session.passport.user, "passport USER");
    console.log(req.user, "USER");
    if (req.session.passport.user == req.params.id) {
      console.log(req.session.passport.user);
      console.log(`I am visiting my own page`);
      res.locals.isCurrentUserBoolean = true;
      return next();
    }
  }
  console.log(`I am not looking at my own profile or perhaps I am a guest`);
  res.locals.isCurrentUserBoolean = false;
  return next();
}

module.exports = {
  // isCurrentFinder,
  isCurrentUser,
};
