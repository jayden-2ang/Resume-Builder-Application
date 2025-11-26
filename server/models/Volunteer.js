const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    position: { type: String },
    organization: { type: String },
    termStart: { type: String },
    termEnd: { type: String },
    responsibilities: { type: [String] },
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);