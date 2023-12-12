const {response} = require("express");
const getAllTasks = (request, response) => {
    response.send('All items');
};

const createTask = (request, response) => {
    response.send('create items');
};

const getTask = (request, response) => {
    response.send('get items');
};

const updateTask = (request, response) => {
    response.send('update items');
};

const deleteTask = (request, response) => {
    response.send('delete items');
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};