const express = require("express");
const router = express.Router();

router.use("/employee", require("./employee/employee.route"));

module.exports = router;
