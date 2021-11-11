const express = require('express')
const fs = require('fs')
const dogRouter = require('./dog.js')


const app = express()
const port = 3000


app.use('/api/breed', dogRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})