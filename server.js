const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users.js')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts');
const passport = require('passport');

const app = express();

// Add body-parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// DB Config
const db = require("./config/keys.js").mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("MongoDb Connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// USe Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));