const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("./projects/project-router.js");
const db = require("../data/db-config.js");

const server = express();
server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);

module.exports = server;
