const Empleado = require('../../models/empleado');

const deleteEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        await Empleado.destroy({
            where: {codigo: id},
        });
        res.sendStatus(200).json({"message": "el empleado fue eliminado correctamente"});
    } catch (error) {
        res.status(500).json({"error": error.message});
    }
};

module.exports = {deleteEmployee};