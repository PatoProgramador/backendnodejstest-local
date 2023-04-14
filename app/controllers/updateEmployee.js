const Empleado = require('../models/empleado');

const updateEmployee = async (req, res) => {
    const { nif, nombre, apellido1, apellido2 } = req.body;
    try {
        const newEmployee = await Empleado.create({
            nif,
            nombre,
            apellido1,
            apellido2
        });
    
        res.json(newEmployee)
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {updateEmployee};