import express from "express";
import pg from "pg";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "book_reviews",
    password: "123456",
    port: 5432,
})
db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", async (req,res) => {
    try {
        const result = await db.query("SELECT * FROM books ORDER BY date_read DESC");
        res.render("index.ejs", { books: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving books from the database.");
    }
});

// Fetch Book Cover from Open Library API
async function fetchBookCover(title, author) {
    try {
        // Use Axios to get the book cover from Open Library API
        const response = await axios.get(`https://openlibrary.org/search.json?title=${title}&author=${author}`);
        
        // Check if there are any results and if the first result has a cover image
        if (response.data.docs.length > 0 && response.data.docs[0].cover_i) {
            const coverId = response.data.docs[0].cover_i;
            return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
        } else {
            console.log(`No cover found for the book: ${title}`);
            return 'https://via.placeholder.com/150'; // Placeholder if no cover found
        }
    } catch (error) {
        console.log(`Error fetching book cover:`, error);
        return 'https://via.placeholder.com/150'; // Placeholder if error occurs
    }
}

app.post('/add-book', async (req, res) => {
    const { title, author, rating, review, date_read } = req.body;
    const coverUrl = await fetchBookCover(title, author);
    try {
        // Insert the new book into the database
        await db.query(
            'INSERT INTO books (title, author, rating, review, cover_url, date_read) VALUES ($1, $2, $3, $4, $5, $6)',
            [title, author, rating, review, coverUrl, date_read]
        );
        res.redirect('/');
    } catch (error) {
        console.error('Error inserting book into database:', error);
        res.status(500).send('Error adding the book to the database.');
    }
});

app.get('/edit-book/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const result = await db.query('SELECT * FROM books WHERE id = $1', [bookId]);
        const book = result.rows[0];
        // Render the edit page with the book's current data
        res.render('edit-book.ejs', { book });
    } catch (err) {
        console.error('Error fetching book for edit:', err);
        res.status(500).send('Error fetching the book.');
    }
});

// Handle the form submission for editing a book
app.post('/edit-book/:id', async (req, res) => {
    const bookId = req.params.id;
    const {title, author, rating, review, date_read} = req.body;
    const coverUrl = await fetchBookCover(title, author);
    try {
        await db.query( 
            'UPDATE books SET title = $1, author = $2, rating = $3, review = $4, cover_url = $5, date_read = $6 WHERE id = $7',
            [title, author, rating, review, coverUrl, date_read, bookId]
        );
        res.redirect('/');
    } catch (err) {
        console.error('Error updating book', err);
        res.status(500).send('Error updating the Book.');
    }
});

app.post('/delete-book/:id', async (req, res) => {
    const book_id = req.params.id;
    try {
        await db.query(' DELETE FROM books WHERE id = $1 ', [book_id]);
        res.redirect("/");
    } catch (err) {
        console.log(err)
    }
})

app.listen(port, () => {
    console.log(`app is runing on port ${port}`)
})