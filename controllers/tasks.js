const {response} = require("express");
const Task = require('../models/Task');

const getAllTasks = async (request, response) => {
    try {
        const tasks = await Task.find({});
        response.status(200).json({ tasks: tasks });
    } catch (err) {
        response.status(500).json({ message: err });
    }
};

const createTask = async (request, response) => {
    try {
        const task = await Task.create(request.body);
        response.status(201).json({ task });
    } catch (err) {
        response.status(500).json({ message: err});
    }
};

const getTask = async (request, response) => {
    try {
        const {id: taskId} = request.params;
        const task = await Task.findOne({ _id: taskId });

        if (!task) {
            return response.status(404).json({ message: `No task with id: ${taskId}`});
        }

        response.status(200).json({ task });
    } catch (err) {
        response.status(500).json({ message: err});
    }
};

const updateTask = async (request, response) => {
    try {
        const { id: taskId } = request.params;

        const task = await Task.findOneAndUpdate({ _id: taskId },
            request.body,
            {
                new: true,
                runValidators: true
            });

        if (!task) {
            return response.status(404).json({ message: `No task with id: ${taskId}`});
        }

        response.status(200).json({ id: taskId, data: request.body });
    } catch (err) {
        response.status(500).json({ message: err});
    }
};

const deleteTask = async (request, response) => {
    try {
        const {id: taskId} = request.params;
        const task = await Task.findOneAndDelete({ _id: taskId });

        if (!task) {
            return response.status(404).json({ message: `No task with id: ${taskId}`});
        }

        response.status(200).json({ task });
    } catch (err) {
        response.status(500).json({ message: err});
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};