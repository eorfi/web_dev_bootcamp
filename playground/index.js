import express from 'express';

const app = express();
const port = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('Received request for /');
  res.send('Hello from nodeJS!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
    });