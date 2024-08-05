import express from "express";
import fs from "fs";
// The fs (File System) module in Node.js provides an API for interacting with the file system. It allows you to perform various file operations such as reading, writing, updating, deleting, and renaming files and directories. Here are some common functionalities provided by the fs module:
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Get the directory name in an ES module

// Get the filename from the ES module URL
const __filename = fileURLToPath(import.meta.url); 

// Get the directory name of the current module file
const __dirname = path.dirname(__filename);

// Create a path to a JSON file in the 'data' directory
const blogsFilePath = path.join(__dirname, 'data', 'blogs.json'); // Path to your JSON file

// Serve static files from the public directory
app.use(express.static("public"));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Set view engine to ejs
app.set("view engine", "ejs");

// Route for GET request
app.get("/", (req, res) => {
    res.render("index"); // Render index.ejs
});

// Route for POST request
app.post("/submit", (req, res) => {
    const { blogTitle, blogContante } = req.body;

    // Read the existing blogs
    fs.readFile(blogsFilePath, (err, data) => {
        if (err) {
            return res.status(500).send("Error reading blog data");
        }

        const blogs = JSON.parse(data);

        // Add new blog entry
        blogs.push({ title: blogTitle, content: blogContante });

        // Save the updated blogs
        fs.writeFile(blogsFilePath, JSON.stringify(blogs, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error saving blog data");
            }
            res.redirect("/blogs"); // Redirect to the blogs page
        });
    });
});

// Route to display all blogs
app.get("/blogs", (req, res) => {
    fs.readFile(blogsFilePath, (err, data) => {
        if (err) {
            return res.status(500).send("Error reading blog data");
        }

        const blogs = JSON.parse(data);
        res.render("blog", { blogs });
    });
});

// Route to edit a blog
app.get("/edit/:id", (req, res) => {
    const blogId = req.params.id;
    // this is the way to make the id

    fs.readFile(blogsFilePath, (err, data) => {
        if (err) {
            return res.status(500).send("Error reading blog data");
        }

        const blogs = JSON.parse(data);
        const blog = blogs[blogId];

        res.render("edit", { blog, blogId });
    });
});

// Route to handle the edited blog submission
app.post("/edit/:id", (req, res) => {
    const blogId = req.params.id;
    const { blogTitle, blogContante } = req.body;

    fs.readFile(blogsFilePath, (err, data) => {
        if (err) {
            return res.status(500).send("Error reading blog data");
        }

        const blogs = JSON.parse(data);
        blogs[blogId] = { title: blogTitle, content: blogContante };

        fs.writeFile(blogsFilePath, JSON.stringify(blogs, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error saving blog data");
            }
            res.redirect("/blogs");
        });
    });
});

// Route to delete a blog
app.post("/delete/:id", (req, res) => {
    const blogId = req.params.id;

    fs.readFile(blogsFilePath, (err, data) => {
        if (err) {
            return res.status(500).send("Error reading blog data");
        }

        const blogs = JSON.parse(data);
        blogs.splice(blogId, 1);

        fs.writeFile(blogsFilePath, JSON.stringify(blogs, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error saving blog data");
            }
            res.redirect("/blogs");
        });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
