const express = require('express');
const Personal = require('../models/Personal');
const router = express.Router();

// GET personal
router.get('/', async (req, res) => {
    try {
        const personal = await Personal.find();
        res.json(personal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new personal
router.post('/', async (req, res) => {
    const newPer = new Personal({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        link: req.body.link,
    });
    try {
        const savedPer = await newPer.save();
        res.status(201).json(savedPer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a personal
router.delete('/:id', async (req, res) => {
    try {
        await Personal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Personal deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;