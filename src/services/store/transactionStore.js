const { sequelize } = require("../../dal");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


const Transaction = sequelize.define("transaction", {
    transactionid: { type: Sequelize.STRING(11), primaryKey: true },
    transactionStatus: { type: Sequelize.STRING(1) },
    transactionItems: { type: Sequelize.STRING(50000) },
    transactionTotalQuantity: { type: Sequelize.STRING(50000) },
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
