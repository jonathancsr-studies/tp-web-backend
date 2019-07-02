const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'atribute',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    }
)