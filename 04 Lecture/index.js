import express, { urlencoded } from 'express';
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!, aur batao kaise ho?');
});

app.listen(3000);