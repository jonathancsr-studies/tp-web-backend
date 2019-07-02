const express = require('express')
const boxText = express.Router()
const cors = require('cors')

const BoxText = require("../models/BoxText")
boxText.use(cors())

boxText.post('/save', (req, res) => {
    const textData = {
        text: req.body.text,
        id_user: req.body.id_user
    }
    BoxText.findOne({
            where: {
                id_user: req.body.id_user
            }
        })
        .then(boxText => {
            if (!boxText) {
                BoxText.create(textData)
                    .then(user => {})
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                boxText.update(textData)
                    .then(user => {})
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

boxText.post('/findAll', (req, res) => {
    BoxText.findAll({
            where: {
                id_user: req.body.id_user
            }
        })
        .then(boxText => {
            res.json(boxText)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
module.exports = boxText