const Student = require("../models/student.model");
const Department = require("../models/department.model");
const Course = require("../models/course.model");

const createStudent = async (req, res) => {
  try {
    const { name, email, department } = req.body;

    const newStudent = new Student({
      name,
      email,
      department,
    });
    await newStudent.save();

    const populatedStudent = await Student.findById(newStudent._id).populate(
      "department"
    );

    res.status(201).json(populatedStudent);
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getStudents = async (_, res) => {
  const departmentsList = await Department.find();
  const students = await Student.find().populate("department");
  res.render("student.ejs", { departmentsList, students });
};
module.exports = { createStudent, getStudents };
