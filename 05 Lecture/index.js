const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render("index")
})

app.get('/profile/:username', (req, res)=>{
    res.send(`<h3>Profile of ${req.params.username}</h5>`);
})

app.get('/authors/:username/:age', (req, res)=>{
    res.send(`<h3>Author: ${req.params.username} is ${req.params.age} years old</h5>`);
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})