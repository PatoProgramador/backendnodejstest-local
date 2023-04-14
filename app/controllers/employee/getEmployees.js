const Empleado = require('../../models/empleado');

const getEmployees = async (req, res) => {
    const employees = await Empleado.findAll();
    res.json(employees)
};

module.exports = {getEmployees};