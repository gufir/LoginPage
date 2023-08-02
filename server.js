const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const mysql = require('mysql');
const db = require('./dbcon.js')

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '')));

app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname + '/login.html'))

});

app.post('/login', (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.send(`username: ${username} password:${password}`);
})

const port = 3000;
app.listen(port, () => console.log(`Thiss app Running on port ${port}`));