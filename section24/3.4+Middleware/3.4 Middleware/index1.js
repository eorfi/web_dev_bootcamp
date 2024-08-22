import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
// path: This is a core Node.js module that provides utilities for working with file and directory paths. It is a native module, meaning it comes with Node.js, so you don't need to install it separately.
// dirname: This function is part of the path module. It returns the directory name of a given path. Essentially, it extracts the directory portion of a file path.
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// This is a property in ES modules that provides the URL of the current module. If the module is a local file, import.meta.url will contain the file:// URL of that file.
// The fileURLToPath function (from the url module) converts a file:// URL into an absolute file path.
// As explained earlier, dirname is used to get the directory part of a file path.
// By combining dirname with fileURLToPath(import.meta.url), you get the directory path of the current module

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
