const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// env
dotenv.config({ path: './config/config.env' });

app.use(cors());
app.use(express.json());

// mongodb
const ATLAS_URI = process.env.ATLAS_URI;
mongoose.connect(ATLAS_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to MongoDB`))
    .catch(err => console.log(`${err}`));

// routes
const cityRouter = require('./routes/city');

app.use('/cities', cityRouter);

const usersRouter = require('./routes/user');

app.use('/users', usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})