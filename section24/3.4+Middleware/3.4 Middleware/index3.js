import bodyParser from "body-parser";
import express from "express";


const app = express();
const port = 3000;

function logger(req, res, next){
  console.log("Request Method:", req.method);
  console.log("Request url:", req.url); 
  next();
  // that mean this function shoud contnue to next thing
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello by logger");
}); 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
