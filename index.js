const express = require("express");

const cookieSession = require("cookie-session");

const passport = require("passport");

const mongoose = require("mongoose");

const keys = require("./config/keys");


require("./models/User");

require("./services/passport");

const app = express();

// making use of cookie-session

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
	);

// Telling passport Make use of cookies to handle authentication

app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(keys.mongoURI);

require("./routes/authRoutes")(app);


// For Deploymnet listen to enviorment variable PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT);