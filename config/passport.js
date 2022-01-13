
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    user.findOne({ 'googleId': profile.id }, function(err, user) {
        if (err) return cb(err);
        if (user) {  
        return cb(null, user);
    } else {
         // we have a new user via OAuth!
         var newUser = new user({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
        });
        newUser.save(function(err) {
          if (err) return cb(err);
          return cb(null, newUser);
        });
      }
    });
  }
));

passport.serializeUser(function(student, done) {
    done(null, student.id);
});

passport.deserializeUser(function(id, done) {
    Student.findById(id, function(err, student) {
      done(err, student);
    });
  });