const express = require("express");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
const studentRoutes = require("./src/routes/student.routes");
const departmentRoutes = require("./src/routes/department.routes");
const courseRoutes = require("./src/routes/course.routes");

app.use("/api/students", studentRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/courses", courseRoutes);

const Student = require("./src/models/student.model");
const Course = require("./src/models/course.model");
const Department = require("./src/models/department.model");

app.get("/", async (req, res) => {
  const departments = await Department.find();
  const courses = await Course.find();
  const students = await Student.find();
  res.render("index", { departments, courses, students });
});

module.exports = app;
