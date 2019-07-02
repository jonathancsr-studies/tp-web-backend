const express = require('express')
const atributes = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Atributes = require("../models/Atribute")
atributes.use(cors())

atributes.get('/findById', (req, res) => {
    Atributes.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(att => {
            res.json(att)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = atributes