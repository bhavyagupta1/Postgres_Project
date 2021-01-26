const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/userss', db.getUsers)
app.get('/userss/:id', db.getUserById)
app.post('/userss', db.createUser)
app.put('/userss/:id', db.updateUser)
app.delete('/userss/:id', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})