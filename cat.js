const express = require('express')
const fs = require('fs')

const catRouter = express.Router()

for(let i=0;i<5;i++){
    catRouter.get(`/${i}`, (req,res)=>{
        const filedir = `./cat/cat${i}.jpg`
        fs.readFile(filedir, (err,data)=>{
            res.write(data);
            res.end()
        })
    })
}

module.exports = catRouter