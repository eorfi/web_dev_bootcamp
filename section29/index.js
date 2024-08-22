import express from "express"
import axios from "axios"

const app = express()
const port = 3000

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"))

// GET route to render the initial form
app.get("/", (req, res) => {
    res.render("index.ejs", { joke: null, name: null });
});

app.post("/get-joke", async (req,res) => {
    const name = req.body.name
    // Extract user's name from query parameters
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single")
        let joke = result.data.joke
        // Customizing the joke based on the user's name
        // if (name) {
        //     joke = joke.replace(/Chuck Norris/g, name);
        // }
        ////Chuck Norris/:
        // This is a regular expression (regex) pattern that matches the exact phrase "Chuck Norris".
        // g (Global Flag):
        // The g flag in the regular expression means "global". It tells the JavaScript replace() function to replace all instances of "Chuck Norris" in the string, not just the first one it encounters.
        // name:
        // This is the string that will replace "Chuck Norris" in the joke. The name variable contains the name that the user entered in the form.
        // this is anther way
        if (name) {
            joke = joke.replaceAll("Chuck Norris", name);
        }
        res.render('index.ejs', {joke, name})
    } catch (error) {
        console.error("Error fetching the joke:", error)
        res.render('index.ejs', {joke: "Opse! Something went wrong. Please try again later.", name })
    }
})

app.listen(port, () => {
    console.log(`app is runing on port ${port}`)
})