const Course = require("../models/course.model");
const Department = require("../models/department.model");

createCourse = async (req, res) => {
  try {
    let { name, code, department } = req.body;

    const newCourse = new Course({ name, code, department });
    await newCourse.save();

    await Department.findByIdAndUpdate(department, {
      $push: { courses: newCourse._id },
    });
    const populatedCourse = await Course.findById(newCourse._id).populate(
      "department"
    );
    res.status(201).json(populatedCourse);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getCourses = async (_, res) => {
  try {
    const departmentsList = await Department.find();
    const courseList = await Course.find().populate("department");
    res.render("course.ejs", { departmentsList, courseList });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = {createCourse,getCourses};