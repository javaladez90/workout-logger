const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connection string from local MongoDB or MongoDB atlas
const dbURI = '';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3001))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Connected to MongoDB');
});