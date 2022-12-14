const Joi = require("@hapi/joi");

const addLeave = {
    body: Joi.object().keys({
        employeeId: Joi.string().required(),
        fromDate: Joi.string().required(),
        toData: Joi.string().required(),
        isAdhocLeave: Joi.boolean().required(),
        adhocLeaveStatus: Joi.string().required(),
        leaveReason: Joi.string().required(),
        totalDays: Joi.number().required(),
        hrId: Joi.string().required(),
        tlId: Joi.string().required(),
        status: Joi.string(),
    }),
};

module.exports = {
    addLeave
};


