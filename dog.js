const express = require('express')
const fs = require('fs')

const dogRouter = express.Router()

for(let i=0;i<5;i++){
    dogRouter.get(`/${i}`, (req,res)=>{
        const filedir = `./dog/dog${i}.jpg`
        fs.readFile(filedir, (err,data)=>{
            res.write(data);
            res.end()
        })
    })
}

module.exports = dogRouter
