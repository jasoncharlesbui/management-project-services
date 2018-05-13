const {
    dbHost,
    dbPort,
    dbName,
    dbUsername,
    dbPassword
} = require("./../config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(`postgres://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`);

module.exports = {
    sequelize
};