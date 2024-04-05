const mongoose = require('mongoose');

const DamageReportSchema = new mongoose.Schema({
  disasterType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  severityLevel: {
    type: String,
    default: 'Unknown',
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('DamageReport', DamageReportSchema);
