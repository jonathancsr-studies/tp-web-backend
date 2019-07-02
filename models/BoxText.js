const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'box_text', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: Sequelize.TEXT
        },
        id_user: {
            type: Sequelize.INTEGER
        }

    }
)