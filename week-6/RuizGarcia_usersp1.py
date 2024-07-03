"""
Title: pymongo_conn.py
Author: Professor Krasso
Date: 2 July 2024
Description: Hands-On 4.2: Python with MongoDB, Part I
"""

# Import the MongoClient
from pymongo import MongoClient

# Build a connection string to connect to
client = MongoClient("mongodb+srv://web335_user:s3cret@bellevueuniversity.z0kkzil.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")

# Configure a variable to access the web335DB
db = client['web335DB']

# Call the find function to display all of the users in the collection, 
# using projections to only show the first name, last name, and email address. 
print("= Display all documents in the user's collection =")
for user in db.users.find({}, {"firstName": 1, "lastName": 1, "email": 1, "_id": 0}): 
 print(user)

# Call the find_one function to display a user document by id
print("\n= Display a document where the employeeId is 1011 =")
print(db.users.find_one({"employeeId": "1011"}))

# Call the find_one function to display a user document by lastName
print("\n= Display a document where the lastName is Mozart =")
print(db.users.find_one({"lastName": "Mozart"}))