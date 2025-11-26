const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    institute: { type: String },
    address: { type: String },
    enrollStart: { type: String },
    enrollEnd: { type: String },
    study: { type: String },
});

module.exports = mongoose.model('Education', EducationSchema);