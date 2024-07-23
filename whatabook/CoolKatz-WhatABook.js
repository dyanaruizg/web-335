/*
Names: Diana Ruiz Garcia, Dustin Craven, Kylie Struhs
Date: July 19 2024
File Name: queries.js
Description: Queries for WhatABook Project
*/

// a query to display a list of books
db.books.find();

// a query to display a list of books by genre
db.books.find({"genre": "fantasy"});

// a query to display a list of books by author
db.books.find({"author": "Rick Riordan"});

// a query to display a book by bookId
db.books.findOne({"bookId" : "b53"});

/*
Work listed in WhatABook design requirements but not in Week 8 instructions
*/

// a query to display a wishlist by customerId
db.customers.aggregate([
  { $match: { firstName: "Matthew" } },
  {
    $lookup: {
      from: "wishlistItems",
      localField: "customerId",
      foreignField: "customerId",
      as: "matthew_wishlist",
    },
  },
]);

// a query to add books to a customer's wishlist
db.wishlistItems.insertOne({
  customerId: "c302",
  bookId: "b51",
})

// a query to remove books from a customer's wishlist
db.wishlistItems.deleteOne({
  customerId: "c302",
  bookId: "b51",
})