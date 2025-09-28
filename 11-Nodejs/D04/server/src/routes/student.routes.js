const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
} = require("../controllers/student.controller");

const validate = require("../middlewares/validations");
const { studentSchema } = require("../utils/schemas");

router.post("/", validate(studentSchema), createStudent);
router.get("/", getStudents);

module.exports = router;
