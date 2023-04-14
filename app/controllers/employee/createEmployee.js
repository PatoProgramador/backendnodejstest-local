const Empleado = require('../../models/empleado');

const createEmployee = async (req, res) => {
    const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
    
        const newEmployee = await Empleado.create({
            nif,
            nombre,
            apellido1,
            apellido2,
            codigo_departamento
        });
    
        res.json(newEmployee)

};

module.exports = {createEmployee};