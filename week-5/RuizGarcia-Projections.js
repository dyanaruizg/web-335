/**
 * Title: RuizGarcia-Projections.js
 * Author: Diana Ruiz Garcia
 * Date: 24 June 2024
 * Description: Queries I wrote in hands-on project 5.1 using the MongoDB Shell.
 */

// Query that adds a new user to the user’s collection.
db.users.insertOne(
  { 
    "firstName": "Diana", 
    "lastName": "Ruiz Garcia", 
    "employeeId": "1013",
    "email": "druizgarcia@me.com", 
    "dateCreated": new Date()
  }
);

// Query that proves the new user was added successfully. 
db.users.findOne({"firstName": "Diana"});

// Query that finds data for the user with the last name Mozart.
db.users.findOne({"lastName": "Mozart"});

// Query that updates Mozart’s email address to mozart@me.com using the id.
db.users.updateOne(
  {"_id": ObjectId("667230971a5263c501385067")},
  {"$set": {"email" : "mozart@me.com"}}
);

// Query that proves the document was updated successfully. 
db.users.findOne({"lastName": "Mozart"});

// Query that displays all users in the collection, using projections to 
// only show the first name, last name, and email address. 
db.users.find({}, {"firstName": 1, "lastName": 1, "email": 1, "_id": 0});