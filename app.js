const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cookieParser = require('cookie-parser');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://admin:test123@cluster0.ntya2.mongodb.net/node-app';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.send('The API main page'));
app.use(authRoutes);
app.use(productRoutes);