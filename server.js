const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// DB CONFIG

const db = require('./config/keys').mongoURI;

console.log(db);

//connect to Mongo
mongoose
 .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err));

 const port = process.env.PORT|| 5000;


 app.listen(port, () => console.log(`Server started on port ${port}`));