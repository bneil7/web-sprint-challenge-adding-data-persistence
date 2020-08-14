const express = require("express");

const db = require("../data/db-config.js");
const Projects = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(proj => {
      res.json(proj);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get resource" });
    });
});

router.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const body = req.body;

  Projects.addProjects(body)
    .then(created => {
      res.status(201).json({ created });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to post new project " });
    });
});

router.post("/resources", (req, res) => {
  const body = req.body;

  Projects.addResources(body)
    .then(created => {
      res.status(201).json({ created });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to post new resource " });
    });
});

router.post("/:id/tasks", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Projects.addTasks(id, body)
    .then(add => {
      res.status(201).json({ body });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to post new tasks " });
    });
});

module.exports = router;
