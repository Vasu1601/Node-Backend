const express = require('express');
const app = express()
const path = require('path')
const userModel = require('./models/user'); 
const user = require('./models/user');

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/delete/:id', async (req, res)=>{
    let users = await userModel.findByIdAndDelete({_id: req.params.id})
    res.redirect('/read')
})

app.get('/read', async (req, res)=>{
    let users = await userModel.find()
    res.render("read", {users})
})

app.get('/edit/:userid', async (req, res)=>{
    let user = await userModel.findOne({_id:req.params.userid})
    res.render('edit', {user})
})

app.post('/update/:userid', async (req, res)=>{
    let {name, email, image} = req.body;
    let user = await userModel.findOneAndReplace({_id: req.params.userid}, {name, email, image}, {new: true})
    res.redirect('/read')
})   

app.post('/create', async (req, res)=>{
    let {name, email, image} = req.body;//restructuring the data from the req body, isse hume baar baar req.body.name, req.body.email, req.body.image nahi likhna padega
    let createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})