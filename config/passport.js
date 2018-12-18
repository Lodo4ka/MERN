const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const mongoose = require('mongoose');
const USer = mongoose.model("users");
const keys = require('../config/keys.js');

const options = {};
options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options,
        (jwt_payload, done) => {
            console.log(jwt_payload);
        }
    ));
}