const express = require('express')
const fs = require('fs')

const dogRouter = express.Router()

const breeds = ['shiba', 'terrier', 'retriever'];
dogRouter.get(`/dog/:breed/:index.jpg`, (req,res)=>{
    const filedir = `./dog/${req.params.breed}/${req.params.index}.jpg`
    fs.readFile(filedir, (err,data)=>{
        res.write(data);
        res.end()
    })
})
dogRouter.get(`/:breed/images/random/:number`, (req,res)=>{
    var data = new Object()
    data.status = 'success'
    let fileList = []
    data.message = fileList
    if(breeds.includes(req.params.breed)){
        if(isNaN(req.params.number)){
            data.status = 'fail: not a number'
            res.send(data)
            res.end()
        }
        for(let i=0;i<parseInt(req.params.number);i++){
            if(i>4){
                data.status = 'fail:over the index'
                data.message = fileList;
                let jsonData = JSON.stringify(data)
                res.send(jsonData)
                res.end()
            }
            const filedir = `http://localhost:3000/api/breed/dog/${req.params.breed}/${i}.jpg`            
            fileList.push(filedir)
        }
        data.message = fileList;
        let jsonData = JSON.stringify(data)
        res.send(jsonData)
        res.end()
    }
    else{
        data.status = `fail: no picture for ${req.params.breed}`
        res.send(data)
        res.end()
    }
})

module.exports = dogRouter
