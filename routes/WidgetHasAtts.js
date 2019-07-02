const express = require('express')
const widgetsHasAtt = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const WidgetsHasAtt = require("../models/WidgetsHasAtt")
widgetsHasAtt.use(cors())


widgetsHasAtt.post('/register', (req, res) => {
    const widgetHasAttData = {
        id_att: req.body.id_att,
        id_widget: req.body.id_widget,
        id_user: req.body.id_user,
        description: req.body.description
    }
    WidgetsHasAtt.findOne({
        where: {
            id_att: req.body.id_att,
            id_widget: req.body.id_widget,
            id_user: req.body.id_user
        }
    })
        .then(widgetHasAtt => {
            if (!widgetHasAtt) {
                WidgetsHasAtt.create(widgetHasAttData)
                    .then(widgetHasAtt => {
                        res.json({ status: widgetHasAtt.id + ' registered' })
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

widgetsHasAtt.get('/findById', (req, res) => {
    console.log(req.body.userId)
    WidgetsHasAtt.findOne({
        where: {
            userId: req.body.userId
        }
    })
        .then(widgetsHasAtt => {
            res.json(widgetsHasAtt)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

widgetsHasAtt.get('/findAll', (req, res) => {
    WidgetsHasAtt.findAll({
    })
        .then(widgetsHasAtt => {
            res.json(widgetsHasAtt)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

widgetsHasAtt.post('/findSky', (req, res) => {
    console.log("body id - " + req.body.id_user)
    WidgetsHasAtt.findOne({
        where: {
            id_att: 1,
            id_widget: 1,
            id_user: req.body.id_user
        }
    })
        .then(WidgetsHasAtt => {
            res.json(WidgetsHasAtt)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
module.exports = widgetsHasAtt