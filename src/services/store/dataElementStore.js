const { sequelize } = require("../../dal");
const Sequelize = require("sequelize");

const DataElement = sequelize.define("dataelement", {
    dataelementid: { type: Sequelize.INTEGER, primaryKey: true },
    uid: { type: Sequelize.STRING(11) },
}, {
        timestamps: false,
        freezeTableName: true,
        tableName: "dataelement"
    });

module.exports = {
    DataElement
}