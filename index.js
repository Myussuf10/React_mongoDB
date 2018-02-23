const express = require("express");

const cookieSession = require("cookie-session");

const passport = require("passport");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const keys = require("./config/keys");


require("./models/User");

require("./services/passport");

const app = express();

app.use(bodyParser.json());
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

require("./routes/billingRoutes")(app);


if (process.env.NODE_ENV=production) {

// Express will serve the production assets like main.js and .css build by reactjs

	app.use(express.static('client/build'));

// If express does not recognize the route then it will serve index.html from front end
	const path = require('path');

	app.get('*', (req , res) => {

		res.sendFile(path.resolve(__dirname , 'client' , 'build' , 'index.html'));


	});

}
// For Deploymnet listen to enviorment variable PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT);





