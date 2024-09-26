import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session"; // session is a middleware that allows us to store data on the server side
import passport from "passport"; // passport is a middleware that allows us to authenticate users
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({ // session is a middleware that allows us to store data on the server side
  secret: "Our little secret.",  // secret is used to encrypt the cookie
  resave: false, // don't save the session if nothing has changed
  saveUninitialized: true,    // don't save an empty value in the session 
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // the session will expire after 24 hours
}))

app.use(passport.initialize()); // initialize passport
// you must first session before you can use passport.session()
app.use(passport.session()); // use passport to set up the session

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
}); 

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) { // isAuthenticated() is a function provided by passport that checks if the user is authenticated or not 
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            if (err) {
              console.error("Error logging in:", err);
            } else {
              res.redirect("/secrets");
            }
          }); // login is a function provided by passport that allows us to login the user
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/secrets", // if the authentication is successful, redirect to the secrets page
  failureRedirect: "/login", // if the authentication is not successful, redirect to the login page
}));


passport.use(new Strategy (async function(username, password, cb) { // Strategy is a constructor provided by passport that allows us to create a new strategy for authentication 
console.log("Username:", username, "Password:", password);
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0]; // this is the details of the user that we get from the database
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
        } else {
          if (result) {
            return cb(null, user); // cd is callback function that is called when the authentication is successful
          } else {
            return cb(null, false); // this line is called when the authentication is not successful
          }
        }
      });
    } else {
      return cb("No user found");
    }
  } catch (err) {
    return cb(err);
  }
}))

passport.serializeUser((user, cb) => {
  cb(null, user);
}); // serializeUser is a function provided by passport that allows us to store the user in the session

passport.deserializeUser((user, cb) => {
  cb(null, user);
}); // deserializeUser is a function provided by passport that allows us to retrieve the user from the session

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
