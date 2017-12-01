require('dotenv').config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require('passport-auth0');

const app = express();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(db => {
    console.log("Connected to DB")
    app.set('db', db)
})
const PORT = 3028;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))