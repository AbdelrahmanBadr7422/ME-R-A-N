const express = require("express");
const router = express.Router();

const {
  createCourse,
  getCourses,
} = require("../controllers/course.controller");

const { courseSchema } = require("../utils/schemas");
const validate = require("../middlewares/validations");

router.post("/", validate(courseSchema), createCourse);
router.get("/", getCourses);

module.exports = router;
