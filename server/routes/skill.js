const express = require('express');
const Skill = require('../models/Skill');
const router = express.Router();

// GET all Skill
router.get('/', async (req, res) => {
    try {
        const skill = await Skill.find();
        res.json(skill);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET Skill by ID
router.get('/:id', async (req, res) => {
    try {
        const ski = await Skill.findById(req.params.id);
        res.json(ski);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE a new Skill
router.post('/', async (req, res) => {
    const newSkill = new Skill({
        skill: req.body.skill,
    });
    try {
        const savedSkill = await newSkill.save();
        res.status(201).json(savedSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a Skill
router.delete('/:id', async (req, res) => {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.json({ message: 'Skill deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;