// TODO
const express = require('express')
const app = express()
const path = require('path')
const controllers = require('./controllers')
const port = 3003

//body-parser
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist/')))

app.get('/restaurants', controllers.getAll)
app.get('/restaurants/:id', controllers.getOne)
app.post('/restaurants', controllers.postOne)
app.delete('/restaurants/:id', controllers.deleteOne)

app.listen(port, () => console.log(`Linda LISTEN...on port: ${port}!`))