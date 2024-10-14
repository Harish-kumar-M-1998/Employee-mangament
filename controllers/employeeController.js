// controllers/employeeController.js
const Employee = require('../models/Employee');

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update employee and store audit trail
// Update employee and store audit trail
exports.updateEmployee = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) return res.status(404).json({ message: 'Employee not found' });
  
      // Store audit trail
      employee.auditTrail.push({
        previousData: employee.toObject(),
        newData: req.body,
        updatedAt: new Date()
      });
  
      // Explicitly update fields to avoid overwriting auditTrail
      const { name, address, age, department, status } = req.body;
      employee.name = name || employee.name;
      employee.address = address || employee.address;
      employee.age = age || employee.age;
      employee.department = department || employee.department;
      employee.status = status || employee.status;
  
      await employee.save();
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
