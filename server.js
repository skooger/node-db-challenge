const express = require("express");

const projectRouter = require("./projects/projects-router.js");

const server = express();
server.use(express.json());

server.use("/api", projectRouter);

server.get("/", (req, res) => {
    res.status(200).json({message: "server running"})
})

module.exports = server 