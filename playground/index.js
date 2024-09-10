import express from "express";
import pg from "pg";
import axios from "axios"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book_reviews",
  password: "123456",
  port: 5432,
})

db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
      const result = await db.query("SELECT * FROM books ORDER BY date_read DESC");
      res.render("index.ejs", {books: result.rows});
      
  } catch (err) {
      console.log(err)
      res.status(500).send("Error retrieving books from the database.")
  }
})

app.post("/add-book", async (req,res) => {
  const {title, auther, rating, review, date_read} = req.body;
  
})
