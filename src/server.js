// initialise the server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");
const bcrypt = require("bcrypt-nodejs");

const register = require("./controllers/register");
const signIn = require("./controllers/signIn");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

// database knex connection
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "lee",
    password: "",
    database: "smartbrain",
  },
});

// initialize express server
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("success");
});


// I've put some snippets of the code in the controllers folder
// Need to finish this by tommorow

app.post("/signin", (req, res) => {
  signIn.handleSignin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});

app.listen(3004, () => {
  console.log("app is running on port 3004");
});

/* 
/signin ---> POST = success/fail
/register ----> POST = user
/profile/:userId --> GET = user
/image ---> PUT ---> user

*/

// I need to fix this tommmorow early in the morning.
