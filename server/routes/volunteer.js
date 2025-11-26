const express = require('express');
const Volunteer = require('../models/Volunteer');
const router = express.Router();

// GET all Volunteer
router.get('/', async (req, res) => {
    try {
        const volunteer = await Volunteer.find();
        res.json(volunteer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET Volunteer by ID
router.get('/:id', async (req, res) => {
    try {
        const vol = await Volunteer.findById(req.params.id);
        res.json(vol);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new Volunteer
router.post('/', async (req, res) => {
    const newVol = new Volunteer({
        position: req.body.position,
        organization: req.body.organization,
        termStart: req.body.termStart,
        termEnd: req.body.termEnd,
        responsibilities: req.body.responsibilities,
    });
    try {
        const savedVol = await newVol.save();
        res.status(201).json(savedVol);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a Volunteer
router.delete('/:id', async (req, res) => {
    try {
        await Volunteer.findByIdAndDelete(req.params.id);
        res.json({ message: 'Volunteer deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;