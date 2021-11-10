const express = require('express')
const fs = require('fs')
const dogRouter = require('./dog.js')
const catRouter = require('./cat.js')


const app = express()
const port = 3000


app.use('/dog', dogRouter)
app.use('/cat', catRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})