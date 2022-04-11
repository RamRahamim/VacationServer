const express = require("express");
const cors = require('cors');

const usersController = require("./controllers/users-controller");

const server = express();

server.use(cors({ origin: "http://localhost:3000"}));
server.use(express.json());
server.use("/users", usersController);

server.listen(3001, () => console.log("Listening on http://localhost:3001"));