const Empleado = require('../../models/empleado');

const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Task.findOne({
            where: {id}
        })
        res.json(employee);
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {getEmployees};