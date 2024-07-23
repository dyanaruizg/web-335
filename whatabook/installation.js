/**
	Title: installation.js
    Author: Diana Ruiz Garcia, Kylie Struhs, & Dustin Craven
    Date: 7/21/2024
    Description: MongoDB Shell Scripts for the customers, books, and wishlist items collections.
 */

// Delete the customers and books collections.
db.customers.drop()
db.books.drop()
db.wishlistItems.drop()

db.createCollection("customers", {
  validator: { $jsonSchema: {
    bsonType: "object",
    properties: {
      customerId: {
          bsonType: "string"
      },
      firstName: {
          bsonType: "string"
      },
      lastName: {
          bsonType: "string"
      },
      email: {
          bsonType: "string"
      },
      password: {
          bsonType: "string"
      },
      phoneNumber: {
          bsonType: "string"
      },
      address: {
          bsonType: "string"
      },
      dateOfBirth: {
          bsonType: "string"
      },
      optInForEmails: {
          bsonType: "bool"
      }
    }
  }}
})

db.createCollection("books", {
  validator: { $jsonSchema: {
    bsonType: "object",
    properties: {
      bookId: {
        bsonType: "string"
      },
      title: {
        bsonType: "string"
      },
      author: {
        bsonType: "string"
      },
      genre: {
        bsonType: "string"
      },
      description: {
        bsonType: "string"
      },
      condition: {
        bsonType: "string"
      },
      storeLocation: {
        bsonType: "string"
      },
      price: {
        bsonType: "double"
      },
      ratingScore: {
        bsonType: "string"
      },
      numberOfRatings: {
        bsonType: "int"
      },
      onClearance: {
        bsonType: "bool"
      }
    }
  }}
})

db.createCollection("wishlistItems", {
  validator: { $jsonSchema: {
    bsonType: "object",
    properties: {
      wishlistItemId: {
        bsonType: "string"
      },
      customerId: {
        bsonType: "string"
      },
      bookId: {
        bsonType: "string"
      }
    }
  }}
})

//Customers
exampleCustomer1 = {
  "customerId": "c301",
  "firstName" : "Matthew",
  "lastName" : "Grabinger",
  "email" : "mattgrabiner@myschool.edu",
  "password": "cybersecure",
  "phoneNumber": "6021039317",
  "address": "9342 N 107 Ln, Phoenix, Az 85345",
  "dateOfBirth": "10/05/2005",
  "optInForEmails": true
}

exampleCustomer2 = {
  "customerId": "c302",
  "firstName": "Harold",
  "lastName" : "Barnes",
  "email" : "barnes.harold@aol.me",
  "password" : "donotreadmypersonalinformation",
  "phoneNumber": "5208561006",
  "address": "Local to WhatABook",
  "dateOfBirth": "04/25/1972",
  "optInForEmails": false
}

exampleCustomer3 = {
  "customerId": "c303",
  "firstName" : "Susan",
  "lastName" : "Wilkins",
  "email" : "susan.wilkins@gmail.com",
  "password": "orangepancakes",
  "phoneNumber": "5204823649",
  "address": "Local to WhatABook",
  "dateOfBirth": "01/30/1970",
  "optInForEmails": false
}

//Inserts for example customer data
db.customers.insertOne(exampleCustomer1)
db.customers.insertOne(exampleCustomer2)
db.customers.insertOne(exampleCustomer3)

//Books
exampleBook1 = {
  "bookId" : "b51",
  "title" : "The Lightning Thief",
  "author" : "Rick Riordan",
  "genre" : "fantasy",
  "description" : "Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus’ master bolt. Along the way, he must face a host of mythological enemies determined to stop him. Most of all, he must come to terms with a father he has never known, and an Oracle that has warned him of betrayal by a friend.",
  "condition" : "fair",
  "inStoreLocation" : "YA2",
  "price": 7.19,
  "ratingScore": "4.9",
  "numberOfRatings": 3291,
  "onClearance" : false
}

exampleBook2 = {
  "bookId" : "b52",
  "title" : "A Court of Thorns and Roses",
  "author" : "Sarah J. Maas",
  "genre" : "fantasy",
  "description" : "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.",
  "condition" : "good",
  "inStoreLocation" : "A4",
  "price": 10.37,
  "ratingScore": "4.7",
  "numberOfRatings": 2681,
  "onClearance" : false
}

exampleBook3 = {
  "bookId" : "b53",
  "title" : "MongoDB: The Definitive Guide",
  "author" : "Kristina Chodorow",
  "genre" : "non-fiction",
  "description" : "Manage your data with a system designed to support modern application development. Updated for MongoDB 4.2, the third edition of this authoritative and accessible guide shows you the advantages of using document-oriented databases. You’ll learn how this secure, high-performance system enables flexible data models, high availability, and horizontal scalability.",
  "condition" : "fair",
  "inStoreLocation" : "G4",
  "price": 4.79,
  "ratingScore": "4.6",
  "numberOfRatings": 860,
  "onClearance" : true
}

exampleBook4 = {
  "bookId" : "b54",
  "title" : "Pride and Prejudice",
  "author" : "Jane Austen",
  "genre" : "classic",
  "description" : "Elizabeth Bennet first meets eligible bachelor Fitzwilliam Darcy, she thinks him arrogant and conceited; he is indifferent to her good looks and lively mind. When she later discovers that Darcy has involved himself in the troubled relationship between his friend Bingley and her beloved sister Jane, she is determined to dislike him more than ever. ",
  "condition" : "very good",
  "inStoreLocation" : "B7",
  "price": 5.40,
  "ratingScore": "4.3",
  "numberOfRatings": 1048,
  "onClearance" : true
}

exampleBook5 = {
  "bookId" : "b55",
  "title" : "The Exorcist: A Novel: A Terrifying Classic of American Horror",
  "author" : "William Peter Blatty",
  "genre" : "horror",
  "description" : "Georgetown, Washington D.C. Actress and divorced mother Chris MacNeil starts to experience 'difficulties' with her usually sweet-natured eleven-year-old daughter Regan. The child becomes afflicted by spasms, convulsions and unsettling amnesiac episodes; these abruptly worsen into violent fits of appalling foul-mouthed curses, accompanied by physical mutation.",
  "condition" : "good",
  "inStoreLocation" : "D2",
  "price": 14.73,
  "ratingScore": "4.20",
  "numberOfRatings": 1207,
  "onClearance" : false
}

exampleBook6 = {
  "bookId" : "b56",
  "title" : "The Wedding Date",
  "author" : "Jasmine Guillory",
  "genre" : "romance",
  "description" : "Elizabeth Bennet first meets eligible bachelor Fitzwilliam Darcy, she thinks him arrogant and conceited; he is indifferent to her good looks and lively mind. When she later discovers that Darcy has involved himself in the troubled relationship between his friend Bingley and her beloved sister Jane, she is determined to dislike him more than ever.",
  "condition" : "fine",
  "inStoreLocation" : "J9",
  "price": 10.40,
  "ratingScore": "4.1",
  "numberOfRatings": 1179,
  "onClearance" : false
}

exampleBook7 = {
  "bookId" : "b57",
  "title" : "Don't Turn Around: A Novel",
  "author" : "Jessica Barry",
  "genre" : "thriller",
  "description" : "Midnight. Cait Monaghan and Rebecca McRae are on a desolate road that slices through the New Mexican desert. They've never met before tonight.  Both have secrets to protect. Both of their lives are in danger.",
  "condition" : "very good",
  "inStoreLocation" : "F1",
  "price": 6.99,
  "ratingScore": "4.0",
  "numberOfRatings": 703,
  "onClearance" : false
}

exampleBook8 = {
  "bookId" : "b58",
  "title" : "Fix Me a Plate: Traditional and New School Soul Food Recipes from Scotty Scott of Cook Drank Eat",
  "author" : "Scotty Scott",
  "genre" : "cookbook",
  "description" : "Get ready to shake up your home cooking with the most soul-satisfying dishes you've ever encountered. From hilarious and beloved chef Scotty Scott comes a deep dive into the delicious world of soul food, showcasing traditional recipes as well as awe-inspiring remixes on the classics.",
  "condition" : "poor",
  "inStoreLocation" : "C5",
  "price": 4.19,
  "ratingScore": "4.8",
  "numberOfRatings": 266,
  "onClearance" : true
}

exampleBook9 = {
  "bookId" : "b59",
  "title" : "The Mother of Black Hollywood: A Memoir",
  "author" : "Jenifer Lewis",
  "genre" : "humor",
  "description" : "From her more than three hundred appearances for film and television, stage and cabaret, performing comedy or drama, as an unforgettable lead or a scene stealing supporting character, Jenifer Lewis has established herself as one of the most respected, admired, talented, and versatile entertainers working today.",
  "condition" : "like new",
  "inStoreLocation" : "E3",
  "price": 11.60,
  "ratingScore": "4.7",
  "numberOfRatings": 908,
  "onClearance" : false
}

//Inserts for example books
db.books.insertOne(exampleBook1)
db.books.insertOne(exampleBook2)
db.books.insertOne(exampleBook3)
db.books.insertOne(exampleBook4)
db.books.insertOne(exampleBook5)
db.books.insertOne(exampleBook6)
db.books.insertOne(exampleBook7)
db.books.insertOne(exampleBook8)
db.books.insertOne(exampleBook9)

//Wishlist Items
exampleWishlistItem1 = {
  "wishlistItemId" : "wl1004378",
  "bookId" : "b53",
  "customerId" : "c301"
}

exampleWishlistItem2 = {
  "wishlistItemId" : "wl1004379",
  "bookId" : "b51",
  "customerId" :"c302"
}

exampleWishlistItem3 = {
  "wishlistItemId" : "wl1004380",
  "bookId" : "b59",
  "customerId" :"c303"
}

exampleWishlistItem4 = {
  "wishlistItemId" : "wl1004381",
  "bookId" : "b56",
  "customerId" :"c302"
}

exampleWishlistItem5 = {
  "wishlistItemId" : "wl1004382",
  "bookId" : "b58",
  "customerId" :"c302"
}

exampleWishlistItem6 = {
  "wishlistItemId" : "wl1004383",
  "bookId" : "b57",
  "customerId" :"c301"
}

exampleWishlistItem7 = {
  "wishlistItemId" : "wl1004384",
  "bookId" : "b55",
  "customerId" :"c303"
}

exampleWishlistItem8 = {
  "wishlistItemId" : "wl1004385",
  "bookId" : "b52",
  "customerId" :"c303"
}

exampleWishlistItem9 = {
  "wishlistItemId" : "wl1004386",
  "bookId" : "b54",
  "customerId" :"c301"
}

//Inserts for example wishlist items
db.wishlistItems.insertOne(exampleWishlistItem1)
db.wishlistItems.insertOne(exampleWishlistItem2)
db.wishlistItems.insertOne(exampleWishlistItem3)
db.wishlistItems.insertOne(exampleWishlistItem4)
db.wishlistItems.insertOne(exampleWishlistItem5)
db.wishlistItems.insertOne(exampleWishlistItem6)
db.wishlistItems.insertOne(exampleWishlistItem7)
db.wishlistItems.insertOne(exampleWishlistItem8)
db.wishlistItems.insertOne(exampleWishlistItem9)