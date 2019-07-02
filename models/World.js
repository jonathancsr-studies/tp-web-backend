const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'world',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        url: {
            type: Sequelize.STRING
        }
    }
)