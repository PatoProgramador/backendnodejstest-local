const Empleado = require('../../models/empleado');
const {Op} = require("sequelize");

const getEmployees = async (req, res) => {
    try {
        let employees;
        // busqueda por nombre
        if(req.query) {
            const {name} = req.query;
            employees = await Empleado.findAll({
                where: {
                    nombre: {[Op.iLike]: `%${name}%`},
                }
            });
        }
        // busqueda de todos los objetos
        employees = await Empleado.findAll();
        // validacion de si existen
        if(employees.length === 0) {
            throw new Error("No hay empleados registrados")
        }
        
        res.status(200).json(employees) 
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {getEmployees};