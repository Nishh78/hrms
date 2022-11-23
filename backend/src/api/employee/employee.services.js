const employeeModel = require('../../models/employee.model')

module.exports = {
    getAllEmployee: async (req, res) => {
        const data = await employeeModel.find();
        return data;
    },
    addNewEmployee: async(data) => {
        const addEmployee = await employeeModel(data).save();
        return addEmployee;
    },
};