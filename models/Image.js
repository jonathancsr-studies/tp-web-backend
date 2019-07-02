const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'image',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        base64: {
            type: Sequelize.TEXT
        },
        id_user: {
            type: Sequelize.INTEGER
        }

    }
)