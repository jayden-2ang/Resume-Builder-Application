const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    position: { type: String },
    company: { type: String },
    termStart: { type: String },
    termEnd: { type: String },
    responsibilities: { type: [String] },
});

module.exports = mongoose.model('Work', WorkSchema);