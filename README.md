# 🧠 Day 1

- JavaScript Arrays and Objects
- JSON basics
- Key differences
- SQL basics and data storage
- 3-tier architecture overview

---

## 📘 JavaScript Arrays & Objects

### ✅ Arrays

- JavaScript arrays hold multiple values in a single variable.

let arr = [10, 20, 39, 89, 65];
console.log(arr[2]); // 39
console.log(arr[9]); // undefined (out of range)

```

Array of Objects

let arr2 = [
  {
    name: "varun",
    age: 34,
    hobbies: ["guitar", "books"],
    skills: {
      fE: ["css", "html"],
      bE: ["nodejs"],
      dB: ["mongodb"],
    },
  },
  {
    name: "ashwini",
    age: 32,
    hobbies: ["cooking", "music"],
    skills: {
      fE: ["html", "css", "react"],
      bE: ["java", "python"],
      dB: ["sql", "mongodb"],
    },
  },
];
console.log(arr2[1].skills.bE); // ["java", "python"]
```

---

## 🔹 JavaScript Object - Real Example

```js
let object = {
  userName: "xyz", // Last duplicate key will be used
  age: 23,
  isMarried: false,
  skills: ["html", "css", "js"],
  address: {
    city: "Noida",
    state: "UP",
    pincode: 123456,
  },
  1: "numberKey",
  "1-username": "def",
  "user age": 34,
  key4: null,
  key5: undefined, // ❌ JSON doesn’t support undefined
  key6: new Date(), // ❌ Not valid in JSON
  key7: function () {}, // ❌ Not valid in JSON
};
```

### ⚠️ Object Notes

- Keys can be strings or numbers (internally converted to strings).
- Duplicate keys: Only the last one is retained.
- Access with dot (`object.age`) or bracket (`object["age"]`) notation.

---

## 🌐 JSON (JavaScript Object Notation)

### ✅ What is JSON?

- Lightweight format for **data exchange**
- Human-readable & machine-parsable
- Language-independent
- Used in APIs, configs, and web development

### ✅ Rules

- Data is in key-value pairs.
- Keys must be **strings (double quotes)**
- No functions, `undefined`, or special objects like `Date`
- Valid values: `string`, `number`, `object`, `array`, `boolean`, `null`

### ✅ JSON Example

```json
[
  {
    "name": "abc",
    "age": 33,
    "id": 123.345,
    "email": "abc@gmail.com",
    "key4": true,
    "key5": null
  },
  {
    "name": "def",
    "age": 33,
    "id": "u7654"
  }
]
```

### 🔁 JSON Serialization/Deserialization

- `JSON.stringify(obj)` → Convert JS Object to JSON string
- `JSON.parse(jsonStr)` → Convert JSON string to JS Object

---

## 🗃️ SQL Database Introduction

### ✅ What is SQL?

- **Structured Query Language**
- Used for **RDBMS (Relational Database Management Systems)** like MySQL, PostgreSQL, SQL Server, etc.
- Stores data in **tables** (rows and columns)

### ✅ Sample Table: Users

| id  | name  | email                                   | age |
| --- | ----- | --------------------------------------- | --- |
| 1   | John  | [john@mail.com](mailto:john@mail.com)   | 25  |
| 2   | Alice | [alice@mail.com](mailto:alice@mail.com) | 28  |

### ✅ SQL Data Types

- `INT`, `VARCHAR(n)`, `BOOLEAN`, `DATE`, `DECIMAL`, `TEXT`

### ✅ SQL Basic Operations (CRUD)

- `CREATE TABLE`, `INSERT INTO`
- `SELECT`, `UPDATE`, `DELETE`

---

## 🏛️ 3-Tier Architecture Overview

### ✅ What is 3-Tier Architecture?

A software design pattern that separates the application into **three layers**:

1. **Presentation Layer (Frontend/UI)**

   - HTML, CSS, JS, React, etc.
   - Handles user interface and interactions

2. **Application Layer (Business Logic)**

   - Backend frameworks (Node.js, Java, Python)
   - Processes requests, applies logic

3. **Data Layer (Database)**

   - SQL (MySQL, PostgreSQL) or NoSQL (MongoDB)
   - Responsible for storing and retrieving data

### 🧩 Flow Diagram

```plaintext
[ User ]
   ↓
[ Frontend - HTML/CSS/JS ]
   ↓ (API Calls)
[ Backend - Node.js/Express ]
   ↓ (DB Query)
[ Database - SQL/MongoDB ]
```

---

## 🧠 Summary

| Topic               | Key Points                             |
| ------------------- | -------------------------------------- |
| JS Arrays & Objects | Dynamic structures, easy manipulation  |
| JSON                | Lightweight format for data exchange   |
| SQL                 | Structured, table-based data           |
| 3-Tier Arch         | Separation of concern, scalable design |

---

## 🍃 Introduction to MongoDB

### ✅ What is MongoDB?

- **NoSQL** document-oriented database
- Stores data in flexible, JSON-like **documents**
- Schema-less = different documents can have different structures
- Uses BSON (Binary JSON) under the hood

---

## 🧭 MongoDB Compass

### ✅ What is Compass?

- Official MongoDB GUI tool (Graphical User Interface)
- Easy to visualize databases, collections, and documents
- Supports:
  - Create/Read/Update/Delete documents
  - Query builder
  - Aggregation pipeline builder

### 🔍 How Compass Looks

- **Cluster** → Set of databases
- **Database** → Set of collections
- **Collection** → Set of documents
- **Document** → JSON-like data (similar to a row in SQL)

---

## 💻 MongoDB Shell (mongosh)

### ✅ Basic Shell Commands

```bash
# Connect to MongoDB
mongosh

# Show all databases
show dbs

# Use/Create a database
use studentDB

# Show all collections in current DB
show collections

# Create and insert into a collection
db.students.insertOne({ name: "Rahul", age: 21 })

# Insert multiple documents
db.students.insertMany([
  { name: "Neha", age: 22 },
  { name: "Amit", age: 23 }
])

# Read (find)
db.students.find()
db.students.find({ age: 22 })

# Update
db.students.updateOne({ name: "Neha" }, { $set: { age: 25 } })

# Delete
db.students.deleteOne({ name: "Amit" })
```

---

## ⚙️ MongoDB CRUD Summary

| Operation | Method                    | Example                                   |
| --------- | ------------------------- | ----------------------------------------- |
| Create    | `insertOne`, `insertMany` | Add documents to a collection             |
| Read      | `find`, `findOne`         | Retrieve documents based on filters       |
| Update    | `updateOne`, `updateMany` | Modify fields using operators like `$set` |
| Delete    | `deleteOne`, `deleteMany` | Remove documents from the collection      |

---

## 🧮 MongoDB Operators (All Types - Detailed)

### 🟢 1. **Comparison Operators**

Used to filter documents based on comparisons.

| Operator | Meaning                    | Example                       |
| -------- | -------------------------- | ----------------------------- |
| `$eq`    | Equals                     | `{ age: { $eq: 21 } }`        |
| `$ne`    | Not equals                 | `{ age: { $ne: 25 } }`        |
| `$gt`    | Greater than               | `{ age: { $gt: 20 } }`        |
| `$gte`   | Greater than or equal to   | `{ age: { $gte: 18 } }`       |
| `$lt`    | Less than                  | `{ age: { $lt: 30 } }`        |
| `$lte`   | Less than or equal to      | `{ age: { $lte: 22 } }`       |
| `$in`    | Matches any value in array | `{ age: { $in: [21, 25] } }`  |
| `$nin`   | Not in array               | `{ age: { $nin: [18, 19] } }` |

---

### 🟠 2. **Logical Operators**

Used to combine multiple conditions.

| Operator | Meaning                             | Example                                                    |
| -------- | ----------------------------------- | ---------------------------------------------------------- |
| `$and`   | All conditions must be true         | `{ $and: [ { age: { $gt: 20 } }, { age: { $lt: 30 } } ] }` |
| `$or`    | At least one condition must be true | `{ $or: [ { name: "Rahul" }, { age: 25 } ] }`              |
| `$not`   | Negates a condition                 | `{ age: { $not: { $gt: 30 } } }`                           |
| `$nor`   | None of the conditions should match | `{ $nor: [ { age: 21 }, { name: "Neha" } ] }`              |

---

### 🔵 3. **Element Operators**

Used to check fields’ existence or data type.

| Operator  | Meaning                             | Example                        |
| --------- | ----------------------------------- | ------------------------------ |
| `$exists` | Checks if field exists (true/false) | `{ marks: { $exists: true } }` |
| `$type`   | Matches based on BSON type          | `{ age: { $type: "number" } }` |

---

### 🟣 4. **Evaluation Operators**

Used for advanced matching.

| Operator | Meaning                                    | Example                                       |
| -------- | ------------------------------------------ | --------------------------------------------- |
| `$expr`  | Use aggregation expressions in queries     | `{ $expr: { $gt: ["$score", 80] } }`          |
| `$regex` | Pattern matching using regular expressions | `{ name: { $regex: /^R/i } }` (starts with R) |
| `$mod`   | Modulo operation                           | `{ age: { $mod: [5, 0] } }` (multiple of 5)   |

---

### 🟤 5. **Array Operators**

Operate on fields that contain arrays.

| Operator     | Meaning                                | Example                                      |
| ------------ | -------------------------------------- | -------------------------------------------- |
| `$size`      | Matches array length                   | `{ hobbies: { $size: 2 } }`                  |
| `$all`       | Matches all values in an array         | `{ tags: { $all: ["js", "react"] } }`        |
| `$elemMatch` | Matches array elements using condition | `{ skills: { $elemMatch: { type: "js" } } }` |

---

### ⚪ 6. **Update Operators (used in update queries)**

| Operator | Use-case                | Example                             |
| -------- | ----------------------- | ----------------------------------- |
| `$set`   | Set new value           | `{ $set: { age: 25 } }`             |
| `$unset` | Remove a field          | `{ $unset: { marks: "" } }`         |
| `$inc`   | Increment a value       | `{ $inc: { score: 10 } }`           |
| `$push`  | Add value to array      | `{ $push: { hobbies: "travel" } }`  |
| `$pull`  | Remove value from array | `{ $pull: { hobbies: "cricket" } }` |

---

## 🧠 Summary Table: Operator Types

| Type       | Key Operators                              | Used For                    |
| ---------- | ------------------------------------------ | --------------------------- |
| Comparison | `$eq`, `$gt`, `$lt`, `$in`                 | Filtering fields by value   |
| Logical    | `$and`, `$or`, `$not`, `$nor`              | Combining conditions        |
| Element    | `$exists`, `$type`                         | Field existence/type checks |
| Evaluation | `$expr`, `$regex`, `$mod`                  | Advanced condition logic    |
| Array      | `$size`, `$all`, `$elemMatch`              | Working with array fields   |
| Update     | `$set`, `$unset`, `$inc`, `$push`, `$pull` | Updating document fields    |

---
