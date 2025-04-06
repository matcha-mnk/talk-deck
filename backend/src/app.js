const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../frontend')))

app.get('/backend', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});