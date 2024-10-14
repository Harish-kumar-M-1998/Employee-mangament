// routes/employeeRoutes.js
const express = require('express');
const { createEmployee, updateEmployee, getAllEmployees, getEmployeeById } = require('../controllers/employeeController');

const router = express.Router();

router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);

module.exports = router;
