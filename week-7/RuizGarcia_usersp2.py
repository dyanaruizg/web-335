"""
Title: RuizGarcia_usersp2.py
Author: Diana Ruiz Garcia
Date: 9 July 2024
Description: Hands-On 5.2: Python with MongoDB, Part II
"""

# Import the MongoClient
from pymongo import MongoClient
# Import the datetime module
import datetime 

# Build a connection string to connect to
client = MongoClient("mongodb+srv://web335_user:s3cret@bellevueuniversity.z0kkzil.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")

# Configure a variable to access the web335DB
db = client['web335DB']

# Create a new user document
jenkins = {
 "firstName": "Jill",
 "lastName": "Jenkins",
 "employeeId": "1014",
 "email": "jjenkins@me.com",
 "dateCreated": datetime.datetime.now()
}

# Insert the document into the users collection
jenkins_user_id = db.users.insert_one(jenkins).inserted_id
print(jenkins_user_id)

# Prove the document was created by searching the collection for the user by employeeId
print("\n= Display a document where the employeeId is 1014 =")
print(db.users.find_one({"employeeId": "1014"}))

# Update the email address of the newly created document
db.users.update_one(
  {"employeeId": "1014"},
  {
    "$set": {
      "email": "jill_jenkins@me.com"
    }
  }
)

# Prove the document was updated by searching the collection for the user by employeeId
print("\n= Display a document where the employeeId is 1014 =")
print(db.users.find_one({"employeeId": "1014"}))

# Delete the newly created document
db.users.delete_one({"employeeId": "1014"})

# Prove the document was deleted by searching the collection for the user by employeeId
print("\n= Display a document where the employeeId is 1014 =")
print(db.users.find_one({"employeeId": "1014"}))