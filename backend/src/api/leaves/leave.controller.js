const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const createResponse = require("../../utils/response");
const Messages = require("../../utils/messages");
const leaveService = require("./leave.service");
const taskService = require("../task/task.service");
const employeeService = require('../employee/employee.services');
const moment = require('moment');

const getAllLeave = catchAsync(async (req, res) => {
    try {
        const leaveData = await leaveService.getAllLeave();
        createResponse(res, httpStatus.OK, Messages.GET_ALL_LEAVES, leaveData);
    } catch (error) {
        console.log(error);
    }
});

const getTeamLeave = catchAsync(async (req, res) => {
    try {
        // HR id
        const id = req.params.id;
        const leaveData = await leaveService.getTeamLeave(id);
        createResponse(res, httpStatus.OK, Messages.GET_ALL_LEAVES, leaveData);
    } catch (error) {
        console.log(error);
    }
});

const getThisMonthLeaves = catchAsync(async (req, res) => {
    try { 
         const currentDate = moment().subtract(1, "d").toISOString();
         const futureDate = moment().add(1, "M").toISOString();

        const leaveData = await leaveService.getThisMonthLeaves(currentDate,futureDate);
        createResponse(res, httpStatus.OK, Messages.GET_ALL_LEAVES, leaveData);
    } catch (error) {
        console.log(error);
    }
});

const getThisMonthLeavesOfTeam = catchAsync(async (req, res) => {
    try {
        // HR id
        const id = req.params.id
        const currentDate = moment().subtract(1, "d").toISOString();
        const futureDate = moment().add(1, "M").toISOString();

        const leaveData = await leaveService.getThisMonthLeavesOfTeam(id, currentDate, futureDate);
        createResponse(res, httpStatus.OK, Messages.GET_ALL_LEAVES, leaveData);
    } catch (error) {
        console.log(error);
    }
});

const addLeave = catchAsync(async (req, res) => {
    try {
        // HR id
        const data = req.body;
        data.fromDate = moment(req.body.fromDate).toISOString();
        data.toDate = moment(req.body.toDate).toISOString();

        const leaveData = await leaveService.addLeave(data);

        // after adding leave will notify HR and add task for HR if userRole is EMPLOYEE or TL.
        const employeeDetail = await employeeService.getEmployeeById(req.body.employeeId);
        
        if (employeeDetail.userRole !== 'hr') {
            
            const taskData = {
                employeeId: employeeDetail.teamHr,
                status: "created",
                details: `${employeeDetail.firstName} ${employeeDetail.lastName} from your team with employeeNo ${employeeDetail.empNo} is on Leave from ${moment(req.body.fromDate).format('DD/MM/YYYY')} to ${moment(req.body.toData).format('DD/MM/YYYY')}`,
                leaveId: leaveData._id
            };
            const addTaskForHR = await taskService.addTask(taskData);
        }

        createResponse(res, httpStatus.OK, Messages.LEAVE_ADDED, leaveData);
    } catch (error) {
        console.log(error);
    }
});


module.exports = {
    getAllLeave,
    getTeamLeave,
    getThisMonthLeaves,
    getThisMonthLeavesOfTeam,
    addLeave,
};