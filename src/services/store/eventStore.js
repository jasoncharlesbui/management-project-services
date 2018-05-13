const { sequelize } = require("../../dal");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


const { DataValue } = require("./eventDataValueStore");
const { DataElement } = require("./dataElementStore");

const Event = sequelize.define("programstageinstance", {
    programstageinstanceid: { type: Sequelize.INTEGER, primaryKey: true },
    uid: Sequelize.STRING(11)
}, {
        timestamps: false,
        freezeTableName: true,
        tableName: "programstageinstance"
    });

Event.hasMany(DataValue, { foreignKey: 'programstageinstanceid', as: "dataValue" });
DataValue.belongsTo(DataElement, { foreignKey: 'dataelementid', as: "dataElement" });

Event
    .findAll({
        include: [{
            all: true,
            model: DataValue,
            as: "dataValue",
            attributes: ["value"],
            include: [{
                as: "dataElement",
                model: DataElement,
                attributes: ["uid"]
            }]
        }],
        attributes: [["uid", "event"]]
    })
    .then(result => {
        console.log(JSON.stringify(result));
    })




// sequelize.sync({ force: true });
