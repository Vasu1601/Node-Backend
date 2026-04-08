import express from 'express';
const app = express();

app.use(function(req, res, next){
    console.log("Middleware chala");
    next();
})

app.get("/", function(req, res){
    res.send("Champion hai tu hehe");
})

app.get("/profile", function(req, res, next){
    return next(new Error("Something went wrong"));
})

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send("Something broke!");
})

app.listen(3000);