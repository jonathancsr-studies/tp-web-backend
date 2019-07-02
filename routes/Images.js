const express = require('express')
const image = express.Router()
const cors = require('cors')

const Image= require("../models/Image")
image.use(cors())

image.post('/upload', (req, res) => {
    const imageData = {
        base64: req.body.base64,
        id_user : req.body.id_user
    }
    Image.findOne({
        where: {
            base64: req.body.base64
        }
    })
        .then(image => {
            Image.create(imageData)
                .then(image => {
                    res.send('Sucess')
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

image.post('/findAll', (req, res) => {
    Image.findAll({
        where: {
            id_user : req.body.id_user
        }
    })
        .then(image => {
            res.json(image)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
module.exports = image