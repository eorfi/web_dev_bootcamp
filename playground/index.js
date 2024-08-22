<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joke Generator</title>
    <link rel="stylesheet" href="/styles/main.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to the Joke Generator!</h1>
        <form action="/get-joke" method="POST">
            <label for="name">Enter your name:</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required>
            <button type="submit">Get Joke</button>
        </form>
        <% if (joke) { %>
            <p class="joke"><%= joke %></p>
        <% } %>
    </div>
</body>
</html>
