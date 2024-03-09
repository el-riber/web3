// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

// Query String Handling
app.get('/get', (req, res) => {
    console.log('Query Parameters:', req.query);
    res.send('Query String Received!');
});

// Error Handling
app.use((req, res, next) => {
    res.status(404).send('404 - Not Found');
});

// Starting the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
