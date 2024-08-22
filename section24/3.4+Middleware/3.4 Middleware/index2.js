import express from "express";
import morgan from "morgan";
// Morgan is a popular HTTP request logger middleware for Node.js. It is commonly used in Express applications to log details about incoming HTTP requests, such as the method, URL, status code, and response time.

const app = express();
const port = 3000;

app.use(morgan("tiny"));
// The statement app.use(morgan("tiny")); in an Express.js application sets up the morgan middleware to log HTTP requests using the "tiny" logging format.
// "tiny" is one of the predefined logging formats provided by Morgan. It is a minimalistic format that logs a concise summary of each HTTP request.


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
