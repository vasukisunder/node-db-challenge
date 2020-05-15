const express = require('express');
const router = require('./projectRouter');
const server = express();

server.use(express.json());

server.use("/api", router);

module.exports = server;