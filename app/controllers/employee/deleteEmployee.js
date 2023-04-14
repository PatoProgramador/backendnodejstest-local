const Empleado = require('../../models/empleado');

const deleteEmployee = async (req, res) => {
    const { id } = req.params;


        await Empleado.destroy({
            where: {codigo: id},
        });
        res.sendStatus(204)

};

module.exports = {deleteEmployee};