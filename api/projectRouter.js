const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/projects", (req, res) => {
    db("projects")
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/resources", (req, res) => {
    db("resources")
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        res.json(err);
    })
})

router.post("/projects", (req, res) => {
    db("projects")
    .insert(req.body)
    .then(id => {
        console.log(id);
        db("projects").where({id: id[0] })
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.json(err);
        })
    })
    .catch(err => {
        res.json(err);
    })
})

router.post("/resources", (req, res) => {
    db("resources")
    .insert(req.body)
    .then(id => {
        console.log(id);
        db("resources").where({id: id[0] })
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.json(err);
        })
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/projects/tasks", (req, res) => {
    db("tasks as t")
    .join("projects as p", "t.projectID", "=", "p.id")
    .select("t.id", "t.description", "t.notes", "p.name as projectName", "p.description as projectDesc")
    .then(tasks => {
        res.json(tasks);
    })
    .catch(err => {
        res.json(err);
    })
})


router.post("/projects/tasks", (req, res) => {
    db("tasks")
    .insert(req.body)
    .then(id => {
        console.log(id);
        db("tasks").where({id: id[0] })
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err => {
            res.json(err);
        })
    })
    .catch(err => {
        res.json(err);
    })
})


module.exports = router;