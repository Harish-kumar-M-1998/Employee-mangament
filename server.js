// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.use(express.json());
const corsOptions = {
  origin: 'https://emp-manage-fe.netlify.app', // Allow your Netlify frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  credentials: true, // Allow credentials (if needed)
};
// Middleware
app.use(cors(corsOptions));

// MongoDB connection
mongoose.connect('mongodb+srv://harishmano98:Harish%402024@harish-mongo.uf15eex.mongodb.net/EmployeeDB' );
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

app.use('/api/employees', employeeRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
