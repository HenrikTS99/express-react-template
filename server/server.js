// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use the port defined in the environment variable or 5000 by default

// Define a route
app.get('/api', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});