"""
Title: CoolKatz-WhatABook.py
Author: Diana Ruiz Garcia, Dustin Craven, Kylie Struhs
Date: 28 July 2024
Description: WhatABook Project in Python with MongoDB
"""

# Import the MongoClient
from pymongo import MongoClient

# Build a connection string to connect to
client = MongoClient("mongodb+srv://whatabook_user:s3cret@bellevueuniversity.z0kkzil.mongodb.net/?retryWrites=true&w=majority&appName=BellevueUniversity")

# Configure a variable to access the WhatABookDB
db = client['WhatABookDB']

# Display the title of the requirement
print("= Display a list of all books =")

# Call the find function to display a list of books, 
# using projections to only show the title, author, and genre. 
books = db.books.find({}, {"title": 1, "author": 1, "genre": 1, "_id": 0})
for book in books: 
  print("Book Title: " + book["title"] + "\nAuthor: " + book["author"] + " | Genre: " + book["genre"] + "\n")

# Display the title of the requirement
print("\n= Display a list of books by requested genre =")

#function to return books with a specified genre
def get_books_by_genre(genre):
  try: 
    # Search for books by genre
    booksByGenre = db.books.find({"genre" : genre}, {"title": 1, "author": 1, "ratingScore": 1, "_id": 0})
    # If no books are found, throw an error message; if found, 
    # return the books 
    if booksByGenre is None:
      raise Exception("No books were found under the genre: " + genre)
    else:
      # Return booksByGenre
      return booksByGenre
  except Exception as error:
    # Display the error
    print(error)

# Get the list of unique genres from books collection and
# create a formatted output string with them
genres = db.books.distinct("genre")
genreOutStr = ""
for genre in genres:
  genreOutStr += genre + ", "
genreOutStr = genreOutStr[:-2]
print("The available genres are:\n" + genreOutStr)

# Prompt the user to enter a genre
genreInput = input("\nEnter a genre from the above options: ")

# Call the get_books_by_genre function to get the list of all books with that genre
booksByGenreOutput = get_books_by_genre(genreInput)


if booksByGenreOutput is not None:
  for book in booksByGenreOutput:
    print("Book Title: " + book["title"] + "\nAuthor: " + book["author"] + " | Rating: " + book["ratingScore"])

# Display the title of the requirement
print("\n= Display a customers wishlist by customerId =")

# Call the find function to display a list of customers, 
# using projections to only show the customerId, firstName, and lastName. 
customers = db.customers.find({}, {"customerId": 1, "firstName": 1, "lastName": 1, "_id": 0})
print("- List of customers -")
for customer in customers: 
  print("Customer: " + customer["firstName"] + customer["lastName"] + " | Customer ID: " + customer["customerId"])

# function to get wishlist based on customerId checking for valid customerId
def get_customer_wishlist(customerId):
  try: 
    # Search for customer by id
    customer = db.customers.find_one({"customerId" : customerId})
    # If the customer is not found, throw an error message; if found, 
    # return the customer wishlist
    if customer is None:
      raise Exception("CustomerId not found")
    else:
      # Call the aggregate function to get a customers wishlist by customerId
      customer_wishlist =  db.wishlistItems.aggregate([
        { "$match": { "customerId": customerId } },
        {
          "$lookup": {
            "from": "customers",
            "localField": "customerId",
            "foreignField": "customerId",
            "as": "customer",
          }
        },
        {
          "$lookup": {
            "from": "books",
            "localField": "bookId",
            "foreignField": "bookId",
            "as": "book",
          }
        },
        { "$unwind": "$customer" },
        { "$unwind": "$book"},
        { "$group" : {
          "_id" : "$customer.customerId",
          "wishlistItems" : {
            "$push" : {
              "bookId" : "$book.bookId",
              "title": "$book.title",
              "author": "$book.author",
              "genre": "$book.genre",
              "description": "$book.description"
            }
          }
        } },
        { "$project" : {
          "_id" : 0,
          "wishlistItems" : "$wishlistItems",
        } },
        { "$sort" : { "bookId" : 1 } }
      ])

      # Return customer wishlist
      return customer_wishlist
  except Exception as error:
    # Display the error
    print(error)

# Prompt the user to enter a customerId
customerId = input("Enter a customerId: ")

# Call the get_customer_wishlist function to get the wishlist of the entered customer
wishlist = get_customer_wishlist(customerId)

# Checks that the entered customer's wishlist has been found
if wishlist is not None:
  print("Books on the wishlist for the customer with CustomerId: " + customerId + "\n")
  # Display the appropriate wishlist
  for books in wishlist: 
    for book in books["wishlistItems"]:
      print("Book Title: " + book["title"] + "\nAuthor: " + book["author"] + " | Genre: " + book["genre"] + "\nDescription: " + book["description"] + "\n")