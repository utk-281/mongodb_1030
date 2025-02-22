// let arr1 = ["html", "css", "js", "react", "node", "mongodb", ["string", true, 1234]];
// // let arr2 = new Array()
// console.log(arr1[2]);
// console.log(arr1[6][1]);

// //! object ==> it is a data structure in which we can store data in key value pair and each key value pair should be separated by comma

// //! student's name, age and phoneNumber

// let student = {
//   studentName: "abc",
//   age: 34,
//   phoneNumber: 1234567890,
//   skills: ["java", "sql"],
//   address: {
//     state: "UP",
//     city: "Noida",
//     pinCode: 201301,
//   },
//   1: "value",
//   age: 24,
//   key: true,
//   key1: null,
//   key2: undefined,
//   key3: function () {
//     console.log("greet");
//   },
//   key4: new Date(),
// };

// console.log(student[1]);

// // in order to display the object properties we can use dot notation
// console.log(student);

// //! difference between function and a method  ==> a function inside an object is called method
// let greet = () => {
//   console.log("greet");
// };

// //! json ==> javascript object notation. it is used to exchange data between client and server, server and server, because it is language independent. dates, undefined and functions are allowed in JSON.

// /*
// [
//     {
//         "studentName":"abc",
//         "age":12,
//         "phoneNumber":12345678
//     },

//     {
//         "studentName":"abc",
//         "age":12,
//         "phoneNumber":12345678
//     }
// ]
// */

// //https://github.com/utk-281/mongodb_1030
// db.users.insertOne({ name: "abc", email: "abc@gmail.com" });

// db.emp.insertMany([
//   {
//     name: "santanu",
//     city: "Chennai",
//     skills: ["html", "css", "js", "react"],
//     age: 26,
//     gender: "M",
//   },
//   {
//     name: "chetna",
//     city: "Banglore",
//     skills: ["java", "html", "css", "sql"],
//     age: 27,
//     gender: "F",
//   },
//   {
//     name: "sre",
//     city: "Noida",
//     skills: ["node", "js", "mongodb", "sql"],
//     age: 24,
//     gender: "M",
//   },
// ]);

// db.emp.insertOne({ name });

// db.emp.find({ job: "manager", sal: { $gt: 2500 } });

// db.emp.find({ job: { $eq: "manager" }, sal: { $gt: 2500 } });

// db.emp.find({ skills: { $in: ["sql", "react"] } });

// db.emp.find({
//   $and: [
//     { $or: [{ deptNo: 10 }, { deptNo: 30 }] },
//     { $or: [{ job: "manager" }, { job: "clerk" }] },
//   ],
// });

// db.emp.find({ $and: [{ sal: { $gt: 1200 } }, { sal: { $lt: 3000 } }] });

// db.emp.find({ sal: { $not: { $gt: 2500 } } });

// db.emp.find({ $and: [{ job: "clerk" }, { sal: { $gt: 1500 } }] });

// db.emp.findOne({ hireDate: new Date("31-12-1981") });

// db.emp.find({ hireDate: { $gt: new Date("31-12-1981") } });

// if (undefined) {
//   // " " ==> truthy --> true, ""--> false; false
//   console.log("hi");
// } else {
//   console.log("bye");
// }

emp = {
  _id: 1234,
  name: "abc",
  age: 12,
  address: {
    city: "Noida",
    state: "UP",
  },
  skills: ["html", "css"],
};
console.log(emp.name);
console.log(emp.address.city);
