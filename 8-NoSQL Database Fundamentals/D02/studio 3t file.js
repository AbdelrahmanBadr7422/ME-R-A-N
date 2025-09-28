// a- Display all documents in instructors collection
db.instructors.find({});

// b- Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.instructors.find(
    { salary: { $gt: 4000 } },
    { firstName: 1, salary: 1, _id: 0 }
);


// c- Display all instructors with ages less than or equal 25.
db.instructors.find(
    { age: { $lte: 25 } },
    { firstName: 1, age: 1, _id: 0 }
);
db.instructors.find({
    age: { $exists: true, $lte: 25 }},
    { firstName: 1, age: 1, _id: 0 }
);


// d- Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary)
db.instructors.find(
    {
        "address.city": "mansoura",
        $or: [{ "address.street": 10 }, { "address.street": 14 }]
    },
    { firstName: 1, address: 1, salary: 1, _id: 0 }
)

// e- Display all instructors who have js and jquery in their courses (both of them not one of them).
db.instructors.find({ courses: { $all: ["js", "jquery"] } })
// in  or
// all and


// f- Display number of courses for each instructor and display first name with number of courses. 
db.instructors.find(
    {
        { firstName: { $exists: true } },
    { courses: { $exists: true } }
    },
    { _id: 0, firstName: 1, courses: 1 }
).forEach(doc => {
    print(doc.firstName, " ", doc.courses ? doc.courses.length : 0);
});

// g- Write mongodb query to get all instructors that have firstName and 
//lastName properties , sort them by firstName ascending then by 
//lastName descending and finally display their data FullName and age 
//Note: use mongoDb sort method not javascript array method

let newCollection = [];
db.instructors.find(
    { firstName: { $exists: true }, lastName: { $exists: true } },
    { _id: 0, firstName: 1, lastName: 1, age: 1 }
).sort({ firstName: 1, lastName: -1 })
    .forEach(doc => {
        let fullName = doc.firstName + " " + doc.lastName;
        newCollection.push({ fullName: fullName, age: doc.age });
        print("Full Name:",fullName , ", Age:", doc.age);
});


//BONUS: create new collection with step g values data and name it instructorsData
db.createCollection("instructorsData", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fullName", "age"],
      properties: {
        fullName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be an integer >= 18"
        }
      }
    }
  }
})
db.instructorsData.insertMany(newCollection);
db.instructorsData.find();


//h- Find all instructors that have fullName that contains “mohammed”.
db.instructorsData.find(
  { fullName: { $regex: "mohammed", $options: "i" } }
)



// i- Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.instructors.deleteOne({firstName:'ebtesam',courses:{$size:5}});
db.instructors.find({firstName:'ebtesam'});

//j- Add active property to all instructors and set its value to true.
db.instructors.updateMany(
  {},
  { $set: { active: true } }
)


//k- Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index)
db.instructors.updateOne(
  { firstName: "mazen",lastName:"mohammed", courses: "EF" },
  { $set: { "courses.$": "jquery" } } // every
)

// I- Add jquery course for “noha hesham”
db.instructors.updateOne(
  { firstName: "noha",lastName:"hesham"},
  { $push: { courses: "jquery" } }
)
db.instructors.find({ firstName: "noha",lastName:"hesham" },{fullName: 1, courses: 1});


//m- Remove courses property for “ahmed mohammed ” instructor
db.instructors.updateOne(
  { firstName: "ahmed",lastName:"mohammed" },
  { $unset: { courses: "" } } 
)

//n- Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.instructors.find({courses: { $size: 3 }},{firstName:1,lastName:1,cousrse:1,salary:1})
db.instructors.updateMany(
  { courses: { $size: 3 } },
  { $inc: { salary: -500 } }
)
db.instructors.find({courses: { $size: 3 }},{firstName:1,lastName:1,cousrse:1,salary:1})

//o- Rename address field for all instructors to fullAddress.
db.instructors.updateMany(
  {},
  { $rename: { "address": "fullAddress" } }
)

//p- Change street number for noha hesham to 20
db.instructors.updateOne(
  { firstName: "noha",lastName:"hesham"  }, 
  { $set: { "fullAddress.street": 20 } }
)

db.instructors.find({ firstName: "noha",lastName:"hesham"  });
