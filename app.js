const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/search', async (req, res) => {
  // your search logic here
  res.json({ results: [] });
});
