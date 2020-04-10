const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

router.get('/', async (req, res) => {
    try {
        res.send(await Task.find({}));
    } catch (e) {
        res.status(400).send({error: e});
    }
});

router.get('/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(400).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500);
    }
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send();
    }
});

router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' });
    }

    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            res.status(404).send();
        }

        res.send(task);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        updates.forEach(udpate => task[update] = req.body[update]);
        await task.save();

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);
    } catch (error) {
        res.status(400).send(e);
    }
});

module.exports = router;