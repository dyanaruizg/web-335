/**
 * Title: RuizGarcia-MongoDBShell.js
 * Author: Diana Ruiz Garcia
 * Date: 18 June 2024
 * Description: Queries I wrote in hands-on project 4.2 using the MongoDB Shell.
 */

// Query that displays all users in the users collection.
db.users.find();

// Query that displays the user with the email address jbach@me.com.
db.users.findOne({email:'jbach@me.com'});

// Query that displays the user with the last name Mozart.
db.users.findOne({lastName: 'Mozart'});

// Query that displays the user with the first name Richard.
db.users.findOne({firstName: 'Richard'});

// Query that displays the user with employeeId 1010. 
db.users.findOne({employeeId: '1010'});