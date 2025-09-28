// Create new database named: FacultySystemV2. 
use FacultySystemV2

// Create student collection that has (FirstName, lastName, IsFired, FacultyID, array of objects, each object has CourseID, grade).
db.createCollection("Student", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["FirstName", "LastName", "IsFired", "FacultyID", "Courses"],
      properties: {
        FirstName: {
          bsonType: "string"
        },
        LastName: {
          bsonType: "string"
        },
        IsFired: {
          bsonType: "bool"
        },
        FacultyID: {
          bsonType: "objectId"
        },
        Courses: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["CourseID", "Grade"],
            properties: {
              CourseID: { bsonType: "objectId" },
              Grade: { bsonType: "int"}
            }
          }
        }
      }
    }
  }
})

// Create Faculty collection that has (Faculty Name, Address). 
db.createCollection("Faculty", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["FacultyName", "Address"],
      properties: {
        FacultyName: { bsonType: "string" },
        Address: { bsonType: "string" }
      }
    }
  }
})


// Create Course collection, which has (Course Name, Final Mark)
db.createCollection("Course", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["CourseName", "FinalMark"],
      properties: {
        CourseName: { bsonType: "string" },
        FinalMark: { bsonType: "int"}
      }
    }
  }
})


// Insert some data in previous collections.
// Faculty => ["FacultyName", "Address"]
db.Faculty.insertMany([
  {  FacultyName: "Computer Science", Address: "Matruh" },
  {FacultyName: "Engineering", Address: "Helwan" }
])

// Course => ["CourseName", "FinalMark"]
db.Course.insertMany([
  {  CourseName: "Databases", FinalMark: 100 },
  { CourseName: "Algorithms", FinalMark: 100 }
])

// Student => ["FirstName", "LastName", "IsFired", "FacultyID", "Courses :["CourseID", "Grade"] "]
db.Student.insertMany([
  {
    FirstName: "Abdelrahman",
    LastName: "Gamal",
    IsFired: false,
    FacultyID: ObjectId("68b811c8c483c0e949441537"),
    Courses: [
      { CourseID: ObjectId("68b811e9c483c0e949441539"), Grade: 80 },
      { CourseID: ObjectId("68b811e9c483c0e94944153a"), Grade: 79 }
    ]
  },
  {
    FirstName: "Bakr",
    LastName: "Abouhassiba",
    IsFired: false,
    FacultyID: ObjectId("68b811c8c483c0e949441538"),
    Courses: [
      { CourseID: ObjectId("68b811e9c483c0e949441539"), Grade: 90 },
      { CourseID: ObjectId("68b811e9c483c0e94944153a"), Grade: 88 }
    ]
  }
])

// 2. Display each student Full Name along with his average grade in all courses. $concat
db.Student.aggregate([
  {
    $project: {
      _id: 0,
      FullName: { $concat: ["$FirstName", " ", "$LastName"] },
      AverageGrade: { $avg: "$Courses.Grade" }
    }
  }
])

// 3. Using aggregation display the sum of final mark for all courses in Course collection.
db.Course.aggregate([
  {
    $group: {
      _id: "Courses Full Mark",
      TotalFinalMarks: { $sum: "$FinalMark" }
    }
  }
])

// 4-Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object. 
// • Select specific student with his name, and then display his courses. 
db.Student.aggregate([
  { 
    $match: { FirstName: "Abdelrahman" }
  },
  {
    $lookup: {
      from: "Course",
      localField: "Courses.CourseID",
      foreignField: "_id",
      as: "StudentCourses"
    }
  },
  {
    $project: {
      _id: 0,
      FullName: { $concat: ["$FirstName", " ", "$LastName"] },
      StudentCourses: {
        CourseName: 1,
        FinalMark: 1
      }
    }
  }
])

// 4.Implement relation between Student and faculty by adding the faculty object in the student using _id Relation using $Lookup. 
// • Select specific student with his name, and then display his faculty
db.Student.aggregate([
  { 
    $match: { FirstName: "Bakr" }
  },
  {
    $lookup: {
      from: "Faculty",
      localField: "FacultyID",
      foreignField: "_id",
      as: "FacultyInfo"
    }
  },
  {
    $project: {
      _id: 0,
      FullName: { $concat: ["$FirstName", " ", "$LastName"] },
      FacultyInfo: { FacultyName:1 }
    }
  }
])

// $count
db.Student.aggregate([
  { $group: { _id: "$Courses" },count: 1 },

]);


// COUNT(*) GROUP BY on SQL.
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 }
    }
  }
])



