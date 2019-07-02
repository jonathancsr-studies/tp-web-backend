const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'widgetsHasAtt',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_att: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_widget: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_user: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }

    }
)