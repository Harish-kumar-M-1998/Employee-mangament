// models/Employee.js
const mongoose = require('mongoose');

const auditTrailSchema = new mongoose.Schema({
  previousData: Object,
  newData: Object,
  updatedAt: { type: Date, default: Date.now }
});

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  department: { type: String, required: true },
  status: { type: String, enum: ['Remote', 'Contract', 'Full-time'], required: true },
  auditTrail: [auditTrailSchema]
});

module.exports = mongoose.model('Employee', employeeSchema);
