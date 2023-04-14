const Departamento = require('../../models/departamento');

const getDepartments = (req, res) => {
    try {
        
    } catch (error) {
        res.send(500).json({"error": error.message})
    }
};

module.exports = {getDepartments}