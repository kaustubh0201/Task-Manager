const {response} = require("express");
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper( async (request, response) => {
    const tasks = await Task.find({});
    response.status(200).json({ tasks: tasks });
});

const createTask = asyncWrapper( async (request, response) => {
    const task = await Task.create(request.body);
    response.status(201).json({ task });
});

const getTask = asyncWrapper( async (request, response, next) => {
    const {id: taskId} = request.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
        return next(`No task with id: ${taskId}`, 404);
    }

    response.status(200).json({ task });
});

const updateTask = asyncWrapper( async (request, response, next) => {
    const { id: taskId } = request.params;

    const task = await Task.findOneAndUpdate({ _id: taskId },
        request.body,
        {
            new: true,
            runValidators: true
        });

    if (!task) {
        return next(`No task with id: ${taskId}`, 404);
    }

    response.status(200).json({ id: taskId, data: request.body });
});

const deleteTask = asyncWrapper( async (request, response, next) => {
    const {id: taskId} = request.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
        return next(`No task with id: ${taskId}`, 404);
    }

    response.status(200).json({ task });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};