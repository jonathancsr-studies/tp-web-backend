const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'worldHasWidgets',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_world: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_widgets: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
)