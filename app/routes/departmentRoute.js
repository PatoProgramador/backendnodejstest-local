const express = require('express');
const router = express.Router();
const {getDepartments} = require('../controllers/department/getDepartments');
const {createDepartment} = require('../controllers/department/createDepartment');

router.get('/', getDepartments);
router.post('/', createDepartment);
// router.put('/', controller.version);
// router.delete('/', deleteDeparment);
// router.get('/:id', controller.version);

module.exports = router;