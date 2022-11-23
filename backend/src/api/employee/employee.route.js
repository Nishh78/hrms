const express = require("express");
const employeeController = require("./employee.controller");
const employeeValidator = require('./employee.validation');
const validate = require("../../middlewares/validate");
const router = express.Router();

router.get("/", employeeController.getAllEmployee);
router.post('/add',validate(employeeValidator.addEmployee),employeeController.addEmployee);

module.exports = router;
