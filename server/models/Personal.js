const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    link: { type: [String] },
});

module.exports = mongoose.model('Personal', PersonalSchema);