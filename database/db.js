const Sequelize = require("sequelize")
const db = {}

const sequelize = new Sequelize('heroku_98b6ad814004cfe', 'b56dce79400138', '1b48863f', {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    dialect: 'mysql',
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
