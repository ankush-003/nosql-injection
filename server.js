const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const User = require('./models/user');

const url = "mongodb+srv://Ankush:ganya@learning.id5ibpg.mongodb.net/test?retryWrites=true&w=majority";

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

app.post('/user', (req, res) => {
    let user = User.find({"email": req.body.email, "password": req.body.password}, (err, user) => {
        if (err) throw err;
        if (user.length == 0) {
            res.status(404).send({message: "No user found"});
        }
        else {
            res.send(user);
        }
    });
});

app.get('/db', (req, res) => {
    // let user = User.find({"email": "ankush", "password": "gan"}, (err, user) => {
    //     if (err) throw err;
    //     if (user.length == 0) {
    //         res.send("No user found");
    //     }
    //     else {
    //         res.send(user);
    //     }
    // });
    let user = User.find({}, (err, user) => {
        if (err) throw err;
        if (user.length == 0) {
            res.status(404).send({message: "No user found"});
        }
        else {
            res.send(user);
        }
    });
});

app.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});