/**
 * Title: RuizGarcia-Projections.js
 * Author: Diana Ruiz Garcia
 * Date: 2 July 2024
 * Description: Queries I wrote in hands-on project 6.1 using the MongoDB Shell.
 */

// Query that loads the houses.js script. 
load( "houses.js" );

// Query that displays all students.
db.students.find();

// Query that adds a new student to the students’s collection.
db.students.insertOne(
  {
    "firstName": "Hermione",
    "lastName": "Granger",
    "studentId": "s1019",
    "houseId": "h1007"
  }
);

// Query that proves the new student was added successfully. 
db.students.findOne({"firstName": "Hermione"});

// Query that updates the property "studentId" from the student I created.
db.students.updateOne(
  {"_id": ObjectId("668478cf422a954de64c4142")},
  {"$set": {"studentId" : "s1020"}}
);

// Query that proves the property was updated successfully. 
db.students.findOne({"firstName": "Hermione"});

// Query that deletes the student I created.
db.students.deleteOne(
  {
    "_id": ObjectId("668478cf422a954de64c4142")
  }
);

// Query that proves the student was removed successfully. 
db.students.findOne({"firstName": "Hermione"});

// Query that displays all students by house. 
db.houses.aggregate([ 
  { $lookup: { 
    from: "students", 
    localField: "houseId", 
    foreignField: "houseId", 
    as: "student" 
  } }, 
  { $unwind: "$student" }, 
  { $group: { 
    _id: { houseId: "$houseId" }, 
    founder: { $first: "$founder" }, 
    mascot: { $last: "$mascot" }, 
    students: { 
      $push: { 
        firstName: "$student.firstName", 
        lastName: "$student.lastName" 
      } 
    } 
  } }, 
  { $project: { 
    _id: 0, 
    "founder": 1, 
    "mascot": 1, 
    "houseId": "$_id.houseId",
    "students": "$students" 
  } }, 
  { $sort: { houseId: 1 } }
] );

// Query that displays all students in house Gryffindor. 
db.houses.aggregate([ 
  { $lookup: { 
    from: "students", 
    localField: "houseId", 
    foreignField: "houseId", 
    as: "student" 
  } }, 
  { $match: { "houseId": "h1007" } },
  { $unwind: "$student" }, 
  { $group: { 
    _id: { houseId: "$houseId" }, 
    founder: { $first: "$founder" }, 
    students: { 
      $push: { 
        firstName: "$student.firstName", 
        lastName: "$student.lastName" 
      } 
    } 
  } }, 
  { $project: { 
    _id: 0, 
    "founder": 1, 
    "students": "$students" 
  } }
] );

// Query that displays all students in the house with an Eagle mascot.
db.houses.aggregate([ 
  { $lookup: { 
    from: "students", 
    localField: "houseId", 
    foreignField: "houseId", 
    as: "student" 
  } }, 
  { $match: { "mascot": "Eagle" } }, 
  { $unwind: "$student" }, 
  { $group: { 
    _id: { houseId: "$houseId" }, 
    founder: { $first: "$founder" }, 
    mascot: { $last: "$mascot" }, 
    students: { 
      $push: { 
        firstName: "$student.firstName", 
        lastName: "$student.lastName" 
      } 
    } 
  } }, 
  { $project: { 
    _id: 0, 
    "founder": 1, 
    "mascot": 1, 
    "students": "$students" 
  } }
] );