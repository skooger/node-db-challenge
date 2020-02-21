const express = require('express');

const projects = require('./projects-model');

const router = express.Router();

router.post('/projects', (req,res) => {

    const projectBody = req.body;

    projects.addProject(projectBody)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({message: "Could not add the project."})
        })

})

router.get('/projects', (req,res) => {


    projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json({message: "Could not get the projects."})
        })

})

router.post('/resources', (req,res) => {

    const resourceBody = req.body;

    projects.addResource(resourceBody)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(error => {
            res.status(500).json({message: "Could not add the resource."})
        })

})

router.get('/resources', (req,res) => {


    projects.getResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({message: "Could not get the projects."})
        })

})

router.post('/project/tasks', (req,res) => {

    const taskBody = req.body;

    projects.addTask(taskBody)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(error => {
        res.status(500).json({message: "Could not add the task."})
    })

})

router.get('/project/:id/tasks', (req,res) => {

   
    const {id} = req.params;

    projects.getProjectTasks(id)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(error => {
        res.status(500).json({message: `Could not add the task. Id ${id}`})
    })

})

router.delete('/project/:id', (req,res) => {

    const {id} = req.params;

    projects.deleteProject(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            res.status(500).json({message: `Could not delete the project. Id ${id}`})
        })

})

module.exports = router;