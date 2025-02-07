import express from "express";

const app = express();
const port = 3000;
// By adding this line of code we well tell express where our static files are located
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.get("/about", (req, res) => {
  res.render("about.ejs");
})

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
