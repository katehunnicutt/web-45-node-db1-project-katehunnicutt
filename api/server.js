const express = require("express");

const server = express();

server.use(express.json());

server.use("*", (req, res) => {
  res.status(404).json({message: 'not found oops'})
})

module.exports = server;
