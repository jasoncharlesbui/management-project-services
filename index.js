const express = require("express");
const app = express();
const { port } = require("./src/config.js");

const eventService = require("./src/services/event");


app.get('/', (req, res) => {
    res.send('hello world');
});

app.use("/events", eventService);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))