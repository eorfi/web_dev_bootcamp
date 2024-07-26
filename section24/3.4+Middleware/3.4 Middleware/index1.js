import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


// The bodyParser.urlencoded({ extended: true }) middleware function in Express is used to parse URL-encoded data from the body of incoming HTTP requests. This is commonly used when dealing with form data submitted via the application/x-www-form-urlencoded content type.
// extended: true: This option allows the parsing of richer objects and arrays from the URL-encoded data. It uses the qs library under the hood, which supports nested objects and arrays.


app.get("/", (req, res) => { 
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
