const express = require('express');
const Work = require('../models/Work');
const router = express.Router();

// GET all Work
router.get('/', async (req, res) => {
    try {
        const work = await Work.find();
        res.json(work);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET Work by ID
router.get('/:id', async (req, res) => {
    try {
        const wor = await Work.findById(req.params.id);
        res.json(wor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new Work
router.post('/', async (req, res) => {
    const newWork = new Work({
        position: req.body.position,
        company: req.body.company,
        termStart: req.body.termStart,
        termEnd: req.body.termEnd,
        responsibilities: req.body.responsibilities,
    });
    try {
        const savedWork = await newWork.save();
        res.status(201).json(savedWork);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a Work
router.delete('/:id', async (req, res) => {
    try {
        await Work.findByIdAndDelete(req.params.id);
        res.json({ message: 'Work deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;