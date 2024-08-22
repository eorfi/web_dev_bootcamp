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

// logger(req, res, next): This function is a custom middleware that logs the HTTP method and the URL of each incoming request.
// req.method: Logs the HTTP method used in the request (e.g., GET, POST).
// req.url: Logs the URL of the request (e.g., /, /about).
// next(): This tells Express to proceed to the next middleware function or route handler in the stack. Without next(), the request would hang and not reach its intended destination.

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello by logger");
}); 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
