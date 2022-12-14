const employeeModel = require('../../models/employee.model')

module.exports = {
    getAllEmployee: async (req, res) => {
        const data = await employeeModel.find();
        return data;
    },
    addNewEmployee: async (data) => {
        const addEmployee = await employeeModel(data).save();
        return addEmployee;
    },
    getEmployeeById: async (id) => {
        const employeeDetail = await employeeModel.findById(id);
        return employeeDetail;
    },
    getEmployeeByEmail: async (email) => {
        const employeeData = await employeeModel.find({ email: email });
        return employeeData;
    },
    getAllHR: async () => {
        const hrData = await employeeModel.aggregate([
            {
                $match: {
                    userRole: "hr",
                },
            },
            {
                $addFields: {
                    label: {
                        $concat: ["$firstName", " ", "$lastName"],
                    },
                    code: "$_id",
                },
            },
            {
                $project: {
                    label: 1,
                    code: 1,
                    _id:0
                },
            },
        ]);
        return hrData;
    },
    getAllTL: async () => {
        const hrData = await employeeModel.aggregate([
            {
                $match: {
                    userRole: "tl",
                },
            },
            {
                $addFields: {
                    label: {
                        $concat: ["$firstName", " ", "$lastName"],
                    },
                    code: "$_id",
                },
            },
            {
                $project: {
                    label: 1,
                    code: 1,
                    _id:0
                },
            },
        ]);
        return hrData;
    },
};