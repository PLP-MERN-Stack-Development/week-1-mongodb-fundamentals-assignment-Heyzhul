// 🌟 Task 2: Basic CRUD Operations

// 1. Find all books in a specific genre (e.g., "Self-Help")
db.books.find({ genre: "Self-Help" });

// 2. Find books published after a certain year (e.g., after 2010)
db.books.find({ published_year: { $gt: 2010 } });

// 3. Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book (e.g., "The Hobbit")
db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 13.99 } });

// 5. Delete a book by its title (e.g., "Rich Dad Poor Dad")
db.books.deleteOne({ title: "Rich Dad Poor Dad" });


// 🌟 Task 3: Advanced Queries

// 6. Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 7. Use projection to return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 8. Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// 9. Sort books by price (descending)
db.books.find().sort({ price: -1 });

// 10. Pagination - page 1 (first 5 books)
db.books.find().limit(5);

// 11. Pagination - page 2 (skip 5 books, show next 5)
db.books.find().skip(5).limit(5);


// 🌟 Task 4: Aggregation Pipelines

// 12. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
]);

// 13. Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 14. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [ { $toString: { $multiply: ["$_id", 10] } }, "s" ] },
      count: 1,
      _id: 0
    }
  }
]);


// 🌟 Task 5: Indexing

// 15. Create index on title
db.books.createIndex({ title: 1 });

// 16. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 17. Explain query performance using index
db.books.find({ title: "The Alchemist" }).explain("executionStats");
