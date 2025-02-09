const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hashSchema = new Schema({
  hashKey: { type: String, required: true },
}, {
  timestamps: true,
});

const Hash = mongoose.model('Hash', hashSchema);

module.exports = Hash;