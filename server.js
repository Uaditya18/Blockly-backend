const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS from any origin
app.use(cors({
  origin: '*'
}));

// Serve route data from route.json
app.get('/api/route', (req, res) => {
  fs.readFile(path.join(__dirname, 'route.json'), (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data');
    }
    res.json(JSON.parse(data));
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
