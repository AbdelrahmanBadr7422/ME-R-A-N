const Department = require("../models/department.model");

createDepartment = async (req, res) => {
  try {
    let { name } = req.body;
    const existingDepartment = await Department.findOne({ name });
    if (existingDepartment) {
      return res.status(400).json({ message: "Department already exists" });
    }
    const newDepartment = new Department({ name });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err });
  }
};

const getDepartments = async (_, res) => {
  const departments = await Department.find().populate("courses");
  res.render("department.ejs", { departments });
};

module.exports = { createDepartment, getDepartments };
