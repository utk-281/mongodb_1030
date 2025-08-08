//! 4 types of NoSql databases ==> dynamic schema (which does not have fixed structure by default and can be updated)
//? 1) document based database ==> data is being stored in form of JS like objects. examples ==> mongodb, couchDB
/*
let emp1 = {
    name:"abc",
    age:23,
    address:{
        city:"Noida",
        state:"UP",
        pincode:123456
    }
}

let emp2 = {
    name:"def",
    age:23,
    isMarried:false,
}

let emp3 = {
    name:"xyz"
}
*/

//? 2) key-value pairs ==> in this data is stored in form of key-value pair. each key-value pair is a separate entity. example ==> redisDB, amazon Dynamo
/*
    entry1 ==> name : "abc"
    entry2 ==> age: 23
    entry3 ==> name: "def"
    entry4 ==> age: 25
    entry5 ==> address: {
        city: "Noida",
        state: "UP",
        pincode: 123456
    }
*/

//? 3) graph database ==> data is stored in nodes and are connected with the edges, example ==> neo4j DB

//? 4) dynamic column ==> data is stored in columns and rows, which are dynamically changing according to the data. example ==> cassandra DB

//~ https://github.com/utk-281/mongodb_1030

//& diff between sql and noSQL databases
//? sql
//! 1) sql databases stores data in form of rows and cols, also known as RDBMS
//! 2) they are having fixed schema
//! 3) they are vertically scalable
//! 4) using sql databases we can perform complex queries (joining two or more tables, having nested queries..)
//! 5) sql databases are used where relation between data is mandatory and data should be coming in fixed structure.
//! 6) examples ==> My Sql, oracle SQL, SQL Server, POSTGRESQL
//! 7) rollback is possible (undo)

//? nosql
//! 1) no sql databases stores data in form of document, key-value, graph, dynamic col, also know as non-RDBMS.
//! 2) they are having dynamic schema (by default)
//! 3) they are horizontally scalable
//! 4) using no-sql databases, performing complex queries can be difficult
//! 5) no-sql databases are used where relation between data is not mandatory and to store large amount of data
//! 6) examples ==> mongoDB, couchDB, redisDB, neo4jDB, cassandraDB
//! 7) rollback is not-possible (undo)

//~ scaling ==> altering the size, capacity or performance of something (servers/laptop)

// <<>> https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.0.12-signed.msi ==> server (mongod)
// <<>> https://downloads.mongodb.com/compass/mongodb-compass-1.46.6-win32-x64.exe ==> compass
// <<>> https://downloads.mongodb.com/compass/mongosh-2.5.6-x64.msi ==> mongosh

//~~ NO-SQL ==> no-sql databases are databases which stores data in non-tabular format like document, graph, wide cols, key-value pair. And all no-sql databases are dynamic in nature.

//! mongodb ==> it is a type of no-sql database, which stores data in JSON like format (BSON --> binary JSON). it is open source, cross-platform, dynamic database
//? open source ==> means it is free to use and source code is publicly available
//? cross-platform ==> it can be used across multiple platforms (windows, linux, mac, etc..)

// sql
// database (name) >> table (name) >> enter data in rows, col

// nosql (mongodb)
// database (name) >> collections (name) >> documents ({})
/*
        {
            name:"abc",
            age:23
        },
        {
            name:"abc",
            age:23
        },
        {
            name:"abc",
            age:23
        },
        {
            name:"abc",
            age:23
        },
*/

//& document : it is like js object, which stores data in key-value pairs. each key-value pair is separated by a comma

//& collection : it is group of documents. ==> (table)

//& database : it is group of collections. ==> (database)

//! steps to install mongod (server)
// next >> next >> complete >> next >> next >> install
// mongodb://localhost:27017 ==> domain name
// mongodb://127.0.0.1:27017 ==> i/p address

// http://localhost:9000

//! steps to install mongosh --> (mongo shell) (cli) ==> command line interface
// next >> next >> install

//! mongodb compass ==> it is a GUI (graphical user interface), using which we can interact with database visually without any single line of code.
//? interact means ==> CRUD, complex operation like aggregation, indexing....

//! mongodb shell (mongosh) ==> shell/interface. it a cli (command line interface) to interact with database. if i want to interact with database, i need to write commands in shell. this shell is build using javascript.
//~ to tap into the shell, open cmd ==> mongosh
//~ to get out of the shell ==> ctrl + c or .exit

//& ─── commands for shell ────────────────────────────────────────────────────────────────

//& 1) to list all the databases
// show dbs or show databases

//& 2) --> to create a new database
//& 2) --> to switch to a database
// use <databaseName>
// example ==> use school
//? if the database name is already present, then it will be switched otherwise it will be created.

//& 3) to create a new collection ==> createCollection()
// db.createCollection("collectionName")
// example ==> db.createCollection("students")

//! after every operation, refresh the compass to see the changes

//& 4) to display the list of all the collections present in a db
// show collections

//& 5) to delete a collection present in a db ==> drop()
// db.collectionName.drop()
// example ==> db.teachers.drop()

//& 6) to delete a database ==> dropDatabase()
// db.dropDatabase()
// example ==> db.dropDatabase()

//& ─── CRUD ────────────────────────────────────────────────────────────────

//& 7) to insert a single document --> {}
// db.collectionName.insertOne({})
// db.students.insertOne({name:"stu1", rollNo:123})
/*
{
  acknowledged: true, --> successfully inserted
  insertedId: ObjectId('6890506e5e9163383350eb67') --> inserted _id
}
 */

//! create a college db, inside this two collections (students and teachers)

//! BSON ==> binary JSON (javascript object notation). it binary representation of JSON. after converting to BSON, we are getting some extra datatypes like ObjectID, date, Regex, etc..
//! operations are faster than JSON because it stores data in binary format
//! it is not human readable

db.students.insertOne({
  name: "sirisha",
  rollNo: "ABC1237",
  skills: {
    fE: ["reactjs"],
    bE: ["nodejs", "express"],
    dB: ["dynamodb", "redisdb", "mongodb"],
  },
  address: { city: "noida", state: "up" },
  gender: "female",
  age: 25,
  hobbies: ["cooking", "football"],
  _id: 1234567890,
});

//! ObjectId ==>
// 1) it is a 12 bytes hexadecimal string.
// 2) it will be unique for every document.
// 3) it acts as unique identifier and generated by mongodb.
// 4) it is of type ObjectId.
// 5) every time a document is inserted, _id will be added to that document.
// 6) if user is providing _id, then the user's _id will be used.
// 7) this field is immutable (cannot be changed).
// example ==> 689196bcc0f735527450eb69

//! it is further divided into 3 parts
//? a) first 4 bytes (689196bc) ==> timestamp at which this document is created.

//? b) next 5 bytes (c0f7355274) ==> it is a combination of machine Identifier (3 bytes) and process ID (2 bytes).

//? c) last 3 bytes (50eb69) ==> it starts with random value, and increment each time by 1 when ever a document gets inserted (counter)

//& 8) to insert a multiple documents --> {}, {}, {}
// ==> method name --> insertMany([{}, {}, {}, .......])
// db.collectionName.insertMany([{}, {}, {}, .......])

db.students.insertMany([
  {
    name: "shree",
    rollNo: "ABC1238",
    skills: {
      fE: ["reactjs"],
      bE: ["nodejs", "express", "deno"],
      dB: ["mongodb"],
    },
    address: { city: "chennai", state: "tn" },
    gender: "female",
    age: 25,
    hobbies: ["gaming", "cricket"],
  },
  {
    name: "divya",
    rollNo: "ABC1239",
    skills: {
      fE: ["html", "css"],
      bE: ["java"],
      dB: ["mysql"],
    },
    address: { city: "banglore", state: "ka" },
    gender: "female",
    age: 25,
    hobbies: ["gaming", "music"],
  },
]);

//! 9) to fetch/read single document -->
// method name ==> findOne(), if no condition is provided, it will fetch the first document. and in case of condition, it will fetch the first document that matches the condition
// db.collectionName.findOne({filter}, {projections}, {options})
//TODO: options ==> sort, skip, limit

//? {filter} ==> if you want to fetch based on some condition
//! find the details of the student whose name is "sirisha"
db.students.findOne({ name: "sirisha" });

db.students.findOne({ gender: "male" });

//? {projections} ==> it is used to display/hide particular fields of the fetched document.
//       { keyName: 1 } ==> displaying
//       { keyName: 0 } ==> hiding
//! find the name and address of the student whose name is "sirisha"
db.students.findOne({ name: "sirisha" }, { name: 1, address: 1, _id: 0 });

//! NOTE:================
//  when ever projection is used by default _id is set to 1.

//! 9) to fetch/read multiple documents -->
// method name ==> find()
// db.collectionName.find({filter}, {projections}, {options})

//! find the details of all female students
db.students.find({ gender: "female" });

db.students.find({}); // if not passing any conditions, then all documents will be fetched.
db.students.find();

//! show the name and gender of all female students
db.students.find({ gender: "female" }, { name: 1, gender: 1, _id: 0 });

// db.students.find({ age: { $gt: 24 } });

//! 10) to update single document -->
// method name ==> updateOne()
// db.collectionName.updateOne({filter}, {updation value}, {options})

//! 11) to update multiple documents -->
// method name ==> updateMany()
// db.collectionName.updateMany({filter}, {updation value}, {options})

//! 12) to delete single document
// method name ==> deleteOne({filter})
// method name ==> deleteOne({}) // in case of no condition, passing empty object is mandatory

// db.collectionName.deleteOne({name:"abc"})
// db.collectionName.deleteOne({})
db.students.deleteOne({ name: "ashwin" });

//! 13) to delete multiple documents
// method name ==> deleteMany({filter})
db.students.deleteMany({ gender: "male" });

db.students.deleteMany({}); // all documents will get deleted
// employees --> locationId --> location collection
// employees --> locationId --> location collection
// employees --> contactId --> contact collection

//& ───────────────────────────────────────────────────────────────────

//& ─── OPERATORS ────────────────────────────────────────────────────────────────
//! query operators
// ==> comparison operators (greater than, less than etc..)
// ==> logical operators (logical and, or, etc..)
// ==> array operators (size, all, elemMatch)
// ==> evaluation operators (regex, expr, mod, etc..)
// ==> element operators (exists, type)
//! update operators
// ==> field update op (set, unset, rename)
// ==> arithmetic update op (inc, mul, max, etc)
// ==> array update op (push, pull, etc)
//! aggregation operators
// ==> pipeline stages op (match, group, etc..)
// ==> accumulator op (sum, avg, etc..)
// ==> arithmetic and date op (add, subtract, month, year, etc..)
//! projection operators ($, $slice... )
//! geospatial operators (will not be covered)

db.emp.find({ dept: { $eq: 20 } });

db.emp.find({ sal: { $gt: 3500 } }, { empName: 1, sal: 1, _id: 0, dept: 0 });

db.emp.find({ deptNo: 10, deptNo: 20 }, { empName: 1, sal: 1, deptNo: 1, _id: 0 });

db.emp.find(
  {
    sal: { $lte: 2500 },
    sal: { $gte: 1200 },
  },
  { empName: 1, _id: 0, sal: 1 }
);

db.emp.find(
  {
    $and: [
      { sal: { $gt: 1200 } }, // condition1
      { sal: { $lt: 2500 } }, // condition2
    ],
  },
  { empName: 1, sal: 1, _id: 0 }
);

db.emp.find(
  {
    $nor: [
      { deptNo: 20 }, // c2
      { deptNo: { $eq: 10 } }, // c1
    ],
  },
  {
    deptNo: 1,
    _id: 0,
  }
);
// .count(); --> cursor

// https://excalidraw.com/#json=WuuWaG4Oif6NPOaRhO23z,3PPYh4OFTc35c9c4QJ5osQ
