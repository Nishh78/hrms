const Joi = require("@hapi/joi");

const addEmployee = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        userName: Joi.string().required(),
        phone: Joi.number().required(),
        gender: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
        degree: Joi.string().required(),
        empNo: Joi.number().required(),
        address: Joi.string().required(),
        contactNo: Joi.number().required(),
        userRole: Joi.string().required(),
        designation: Joi.string().required(),
        status: Joi.string().required(),
        position: Joi.string().required(),
        department: Joi.string().required(),
        joiningDate: Joi.string().required(),
        currentProject: Joi.string().required(),
        company: Joi.string().required(),
        totalLeaves: Joi.number().required(),
        pendingLeaves: Joi.number().required(),
        accountNumber: Joi.number().required(),
        previousCompany: Joi.string().required(),
        previousDesignation: Joi.string().required(),
        birthDate: Joi.string().required(),
        previousPosition: Joi.string().required(),
        yoe: Joi.number().required(),
        skill: Joi.array().required()
    }),
};

module.exports = {
    addEmployee,
};