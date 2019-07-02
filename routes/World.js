const express = require('express')
const world = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const World = require("../models/World")
world.use(cors())

world.post('/Register', (req, res) => {
    const worldData = {
        id_user: req.body.id_user,
        url: ''
    }
    World.findOne({
        where: {
            id_user: req.body.id_user
        }
    })
        .then(world => {
            if (!world) {
                World.create(worldData)
                    .then(world => {
                        res.json({ status: world.id + ' registered' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

world.get('/findByUserId', (req, res) => {
    World.findOne({
        where: {
            id_user: req.body.id_user
        }
    })
        .then(world => {
            res.json(world)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

world.get('/findById', (req, res) => {
    World.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(world => {
            res.json(world)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

world.get('/findAll', (req, res) => {
    World.findAll({
    })
        .then(world => {
            res.json(world)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = world