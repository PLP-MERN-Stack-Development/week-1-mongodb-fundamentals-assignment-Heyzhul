# MongoDB Bookstore Project

## 📌 Project Overview
This project uses MongoDB to manage a bookstore database. It includes basic and advanced MongoDB operations such as CRUD, sorting, filtering, pagination, aggregation pipelines, and indexing.

## 🛠️ Setup Instructions

### Option 1: MongoDB Atlas (Recommended)
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a database named `plp_bookstore` and a collection named `books`.
3. Use the **“Connect”** button in Atlas to connect using `mongosh` or MongoDB Compass.
4. Run the `insert_books.js` script using MongoDB Shell (instructions below).

### Option 2: Local MongoDB
1. Install MongoDB Community Edition from [MongoDB Download Center](https://www.mongodb.com/try/download/community).
2. Start the MongoDB server.
3. Open `mongosh` and run the `insert_books.js` script.

## 🚀 Files Included

- `insert_books.js`: Script to insert 10 sample book documents.
- `queries.js`: MongoDB queries for CRUD operations, advanced filtering, aggregation, and indexing.
- `screenshot.png`: Screenshot showing the books collection and data in MongoDB Compass or Atlas.

## 📂 How to Run `insert_books.js` (Shell Example)

```bash
mongosh "your_connection_string"
