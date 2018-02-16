const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20");

const mongoose = require("mongoose");

const keys = require("../config/keys");

const User = mongoose.model("users");

/* eslint-disable */
passport.use(
	new GoogleStrategy(
		{

			clientID: keys.googleClientID, 
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done ) => {
			User.findOne({ googleID: profile.id})
			.then( (exisitingUser) => {
				if (exisitingUser) {
					done(null, exisitingUser);
				} else {
					new User({ googleID: profile.id}).save().then(user => done(null, user));

				}

			} 

				)
			
		}
	)
);