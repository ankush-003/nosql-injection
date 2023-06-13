const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const User = require('./User');

const url = "mongodb+srv://Ankush:ganya@learning.id5ibpg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//logger middleware
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});

const connectionParams = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }

app.get('/', (req, res) => {
    let user = User.find({"email": "ankush", "password": "ganya"});
    if (!user) {
        res.status(404).send("User not found");
    }
    res.send(user);
});

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});