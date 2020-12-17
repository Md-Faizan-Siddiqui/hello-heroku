var express = require("express");

var server = express();
const PORT = process.env.PORT || 5000

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? Food or Water");
})

server.get("/water", (req, res, next) => {
    console.log("some one is asking water");
    res.send("Here is Water");
})

server.get("/food", (req, res, next) => {
    console.log("some one is asking food");
    res.send("Here is food");
})

server.listen(PORT, () => {
    console.log("server is runing" + PORT);
})