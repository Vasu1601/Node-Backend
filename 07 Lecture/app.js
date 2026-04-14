const express = require('express')
const app = express()

const userModel = require('./usermodel')

app.get('/', (req, res)=>{
    res.send("Hey")
})

app.get('/create',async (req, res)=>{
    let createdUser = await userModel.create({
        name: "Harsh",
        email: "harsh995@gmail.com",
        username: "harsh1901"
    })//This is Asyncronus code so which mean this will not run first, mongoDB se related koi bhi code asyncronus hi ho ga hamesha and agar hum chahte hai pehle ye chale to hum is line ke agge await put kar denge and jo nearest parent function hai uske agge async

    //console.log("Hey");//This is suncronus code which means this run first 
    res.send(createdUser)
})

app.get('/update',async (req, res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username: "Vassu1601"}, {name: "Vassu Mehta"}, {new: true})
    res.send(updatedUser);
})


//To get all user names
// app.get('/read', async (req, res)=>{
//     let users = await userModel.find()
//     res.send(users)
// })

//To get particular user name
app.get('/read', async (req, res)=>{
    let users = await userModel.find({username: "Vassu1601"})
    res.send(users)
})

app.get('/delete', async (req, res)=>{
    let users = await userModel.findOneAndDelete({username: "Vassu1601"})
    res.send(users)
})

app.listen('3000')