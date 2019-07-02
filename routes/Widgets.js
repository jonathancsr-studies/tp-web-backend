const express = require('express')
const widgets = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Widgets = require("../models/Widgets")
widgets.use(cors())

widgets.get('/findById', (req, res) => {
    Widgets.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(widgets => {
            res.json(widgets)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

widgets.get('/findAll', (req, res) => {
    Widgets.findAll({
    })
        .then(widgets => {
            res.json(widgets)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = widgets