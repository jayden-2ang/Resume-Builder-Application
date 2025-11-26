const express = require('express');
const Education = require('../models/Education');
const router = express.Router();

// GET all education
router.get('/', async (req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET education by ID
router.get('/:id', async (req, res) => {
    try {
        const edu = await Education.findById(req.params.id);
        res.json(edu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new education
router.post('/', async (req, res) => {
    const newEdu = new Education({
        institute: req.body.institute,
        address: req.body.address,
        enrollStart: req.body.enrollStart,
        enrollEnd: req.body.enrollEnd,
        study: req.body.study,
    });
    try {
        const savedEdu = await newEdu.save();
        res.status(201).json(savedEdu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a education
router.delete('/:id', async (req, res) => {
    try {
        await Education.findByIdAndDelete(req.params.id);
        res.json({ message: 'Education deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;