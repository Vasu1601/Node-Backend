const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.cookie("name", "Vasu");
//   res.send('done')
// });

// app.get("/", (req, res) => {
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash('pololololo', salt, function (err, hash) {
//       console.log(hash);
//     });
//   });
// });

// app.get("/", (req, res) => {
//   bcrypt.compare("pololololo","$2b$10$mrVvp/Xt1zreebIPdJgrzemWQ0OkZoP9To0TLEZ0.NHs8IofTb77G", function (err, result) {
//     console.log(result);
//   });
// });

// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("Read page");
// });

app.get('/',(req, res)=>{
  let token = jwt.sign({email: "vasu@gmail.com"}, "secret")
  res.cookie('token', token);
  res.send('done')
})

app.get('/read', (req, res)=>{
  let data = jwt.verify(req.cookies.token, "secret")
  console.log(data);
})

app.listen(3000, () => {
  console.log("App started");
});
