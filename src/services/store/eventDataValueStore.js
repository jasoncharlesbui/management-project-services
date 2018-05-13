const { sequelize } = require("../../dal");
const Sequelize = require("sequelize");

const DataValue = sequelize.define("trackedentitydatavalue", {
    dataelementid: { type: Sequelize.INTEGER, primaryKey: true },
    programstageinstanceid: { type: Sequelize.INTEGER, primaryKey: true, },
    value: Sequelize.STRING(50000)
}, {
        timestamps: false,
        freezeTableName: true,
        tableName: "trackedentitydatavalue"
    });

module.exports = {
    DataValue
}

