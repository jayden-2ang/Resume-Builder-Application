const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// GET all Project
router.get('/', async (req, res) => {
    try {
        const project = await Project.find();
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET Project by ID
router.get('/:id', async (req, res) => {
    try {
        const pro = await Project.findById(req.params.id);
        res.json(pro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new Project
router.post('/', async (req, res) => {
    const newPro = new Project({
        title: req.body.title,
        institute: req.body.institute,
        course: req.body.course,
        termStart: req.body.termStart,
        termEnd: req.body.termEnd,
        description: req.body.description,
    });
    try {
        const savedPro = await newPro.save();
        res.status(201).json(savedPro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a Project
router.delete('/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;