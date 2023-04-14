const {getEmployees} = require('../controllers/employee/getEmployees');
const {createEmployee} = require('../controllers/employee/createEmployee');
const {deleteEmployee} = require('../controllers/employee/deleteEmployee');
const express = require('express');
const router = express.Router();

router.get('/', getEmployees);
router.post('/', createEmployee);
// router.put('/empleado', controller.version);
router.delete('/', deleteEmployee);
// router.get('/empleado/:id', controller.version);

module.exports = router;