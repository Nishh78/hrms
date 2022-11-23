const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const createResponse = require("../../utils/response");
const Messages = require("../../utils/messages");
const employeeService = require("./employee.services");

const getAllEmployee = catchAsync(async (req, res) => {
    const userArray = await employeeService.getAllEmployee();
    createResponse(res, httpStatus.OK, Messages.GET_USERS, userArray);
});

const addEmployee = catchAsync(async(req,res) => {
    const userData = await req.body;
    const addNewEmployee = await employeeService.addNewEmployee(userData);

    createResponse(res, httpStatus.OK, Messages.EMPLOYEE_ADDEDD, addNewEmployee);
});


module.exports = {
    getAllEmployee,
    addEmployee,
};
