const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String },
    institute: { type: String },
    course: { type: String },
    termStart: { type: String },
    termEnd: { type: String },
    description: { type: [String] },
});

module.exports = mongoose.model('Project', ProjectSchema);