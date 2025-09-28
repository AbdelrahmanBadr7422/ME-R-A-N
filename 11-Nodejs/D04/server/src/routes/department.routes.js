const express = require("express");
const router = express.Router();

const {
  createDepartment,
  getDepartments,
} = require("../controllers/department.controller");

const validate = require("../middlewares/validations");
const { departmentSchema } = require("../utils/schemas");

router.post("/", validate(departmentSchema), createDepartment);
router.get("/", getDepartments);

module.exports = router;
