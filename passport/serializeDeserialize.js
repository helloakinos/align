const userQueries = require("../database/userQueries");
// passport generates token and puts it in a cookie, then sends it to user browser
function serializeUser(user, done) {
  console.log(
    "Serialize: Passport generates token, puts it in cookie and sends to browser:",
    user
  );

  return done(null, user);
}

// with every request, cookie will be sent back to server. server will take the token, pass it into this function, and turn it into a user
function deserializeUser(id, done) {
  console.log(id.finder_id, "<<< from serialise finder");
  console.log(id.seeker_id, "<<< from serialise seeker");
  console.log(
    "Deserialize: server will take token from your browser, and run this function to check if user exists"
  );
  if (id.finder_id) {
    userQueries
      .getByIdf(id.finder_id)
      .then((users) => {
        if (users.length === 0) {
          console.log("akin check here length = 0 Finder");
          console.log(users[0]);
          console.log(users);
          console.log(id);
          return done(null, false);
        }
        console.log("akin check here length works Finder");
        console.log(users[0]);
        done(null, users[0]);
      })
      .catch((err) => {
        console.log("DESERIALSE FAIL");
        done(err, false);
      });
  } else {
    userQueries
      .getById(id.seeker_id)
      .then((users) => {
        if (users.length === 0) {
          console.log("akin check here length = 0s");
          console.log(users[0]);
          console.log(users);
          console.log(id);
          return done(null, false);
        }
        console.log("akin check here length works Seeker");
        console.log(users[0]);
        done(null, users[0]);
      })
      .catch((err) => {
        console.log("DESERIALSE FAIL");
        done(err, false);
      });
  }
}

// function deserializeUserf(id, done) {
//   console.log(id.finder_id, "<<< from serialise ");
//   console.log(
//     "Deserialize: server will take token from your browser, and run this function to check if user exists"
//   );
//   userQueries
//     .getById(id.seeker_id)
//     .then((users) => {
//       if (users.length === 0) {
//         console.log("akin check here length = 0");
//       console.log(users[0]);
//       console.log(users);
//       console.log(id);
//         return done(null, false);
//       }
//       console.log("akin check here length works");
//       console.log(users[0]);
//       done(null, users[0])
//     ;
//     })
//     .catch((err) => {
//       console.log("DESERIALSE FAIL");
//       done(err, false);
//     });
// }
module.exports = {
  serializeUser: serializeUser,
  deserializeUser: deserializeUser,
  // deserializeUserf: deserializeUserf,
};
