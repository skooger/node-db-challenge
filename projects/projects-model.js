const database = require('../data/db-config')

module.exports = {

    addProject,
    getProjects,
    addResource,
    getResources,
    addTask,
    getProjectTasks,
    deleteProject

}

function addProject(project)
{
    return database('Projects')
        .insert(project);
}

function getProjects()
{
    return database('Projects');
        
}

function addResource(resource)
{
    return database('Resources')
        .insert(resource);
}

function getResources()
{
    return database('Resources');
        
}

function addTask(task)
{
    return database('Project_Tasks')
        .insert(task);
}

function getProjectTasks(id)
{
    return database('Project_Tasks')
        .where('project_id', '=', id)
}

function deleteProject(id)
{
    return database('Projects')
        .where({id})
        .del();
}