const express = require('express')
const worldHasWidgets = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const WorldHasWidgets = require("../models/worldHasWidgets")
worldHasWidgets.use(cors())

worldHasWidgets.post('/registerWidgets', (req, res) => {
    const worldHasWidgetsData = {
        id_world: req.body.id_world,
        id_widgets: req.body.id_widgets
    }
    WorldHasWidgets.findOne({
        where: {
            id_world: req.body.id_world,
            id_widgets: req.body.id_widgets
        }
    }).then(hasWidget => {
        if (!hasWidget) {
            WorldHasWidgets.create(worldHasWidgetsData)
                .then(hasWidget => {
                    res.json({ status: hasWidget })
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
        }
    })

})
worldHasWidgets.post('/findByUserId', (req, res) => {
    WorldHasWidgets.findOne({
        where: {
            id_world: req.body.id_world
        }
    })
        .then(worldHasWidgets => {
            res.json(worldHasWidgets)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
worldHasWidgets.get('/findById', (req, res) => {
    WorldHasWidgets.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(worldHasWidgets => {
            res.json(worldHasWidgets)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

worldHasWidgets.get('/findAll', (req, res) => {
    WorldHasWidgets.findAll({
    })
        .then(worldHasWidgets => {
            res.json(worldHasWidgets)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = worldHasWidgets