const {getEmployees} = require('../controllers/employee/getEmployees');
const {createEmployee} = require('../controllers/employee/createEmployee');
const {deleteEmployee} = require('../controllers/employee/deleteEmployee');
const express = require('express');
const router = express.Router();

router.get('/empleado', getEmployees);
router.post('/empleado', createEmployee);
// router.put('/empleado', controller.version);
router.delete('/empleado', deleteEmployee);
// router.get('/empleado/:id', controller.version);

module.exports = router;