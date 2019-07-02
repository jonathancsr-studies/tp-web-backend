const express = require('express')
const user = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../models/User")
user.use(cors())

const World = require("../models/World")
var nodemailer = require('nodemailer');

var $usuario = 'myuniverselol1@gmail.com';
var $senha = 'br0379c12';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: $usuario,
        pass: $senha
    }
});

var $destinatario = 'raylanderfl@gmail.com';

var mailOptions = {
    from: $usuario,
    to: $destinatario,
    subject: 'My Universe lol',
    text: 'Parabéns! Seu site acaba de atingir 10 acessos.'
};



process.env.SECRET_KEY = 'secret'

user.post('/register', (req, res) => {

    const today = new Date()
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        count: 1
    }



    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {

            if (user == null) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            const worldData = {
                                id_user: user.dataValues.id
                            }
                            World.create(worldData);
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

user.post('/login', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440,
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

user.post('/updateCount', (req, res) => {
    const userData = {
        count: req.body.count
    }


    User.findOne({
            where: {
                id: req.body.id_user
            }
        })
        .then(user => {
            if (user) {
                user.update(userData)
                    .then(user => {
                        res.json(user.dataValues)
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})


user.post('/getUser', (req, res) => {

    User.findOne({
            where: {
                id: req.body.id_user
            }
        })
        .then(user => {
            if (user) {
                res.json(user.dataValues)
                if (user.dataValues.count > 100) {
                    console.log("PASSOU DE 10")
                    mailOptions.to = user.dataValues.email;
                    transporter.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email enviado: ' + info.response);
                        }
                    });
                }

            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = user