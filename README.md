`Day1_JavaScript_JSON_SQL`

- JavaScript Arrays and Objects
- JSON basics
- Key differences
- SQL basics and data storage
- 3-tier architecture overview

---

```markdown
# 🧠 Day 1 - JavaScript Objects, JSON, and SQL Basics

---

## 📘 JavaScript Arrays & Objects

### ✅ Arrays

- JavaScript arrays hold multiple values in a single variable.

let arr = [10, 20, 39, 89, 65];
console.log(arr[2]); // 39
console.log(arr[9]); // undefined (out of range)
```

### ✅ Array of Objects

```js
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
