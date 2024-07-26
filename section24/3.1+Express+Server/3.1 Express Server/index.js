import express from "express";
const app = express();
const port = 3000;
// the port ia the location of our server

app.get("/", (req, res) => {
  console.log("Received request for /");
  res.send("Hello from nodeJS!");
});

app.listen(port, () => {
  // this is called the call back function
  console.log(`Server running on port ${port}.`);
});
