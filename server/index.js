'use strict';
const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Main route
app.get('*',(req, res) => {
   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
   console.log(`YEY i'm working on port ${PORT} `);
});

module.exports = app;

