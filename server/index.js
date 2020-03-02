const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname,'../client/dist/')));

app.get('/restaurants', controllers.getAll);


app.listen(port, () => console.log(`el porte de ${port} esta correr!`))