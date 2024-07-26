// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

import express from "express";
const app = express();
const port = 3000;

// used to represent the request and response objects
app.get("/", (req, res) => {
  console.log("Received request for /");
  res.send("<h1>Hello from me</h1>");
});


app.get("/about", (req, res) => {
  res.send("<h2>About me</h2>");
});

app.get("/contact", (req, res) => {
  res.send("<h2>contact me</h2>")
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})