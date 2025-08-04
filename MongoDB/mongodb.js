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
