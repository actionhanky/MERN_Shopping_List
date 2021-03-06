const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// environment variable for Heroku deployment or port 5000
const port = process.env.PORT || 5000;

//note: use of backticks (``) not single quotes ('')!
app.listen(port, () => console.log(`Server started on port ${port}`));
