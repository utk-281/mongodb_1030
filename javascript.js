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

/* {
    name: string,
    age : number
    isMarried: boolean
} */

db.createCollection("demo2", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "isMarried"],
      properties: {
        name: {
          bsonType: "string",
        },
        age: {
          bsonType: "int",
        },
        isMarried: {
          bsonType: "bool",
        },
      },
    },
  },
});

db.demo2.insertOne({
  name: "abc",
  age: 23,
  isMarried: false,
});

db.demo2.insertOne({
  name: "abc",
  age: 23,
  isMarried: false,
  phoneNumber: 1234567890,
});

db.createCollection("demo3", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "skills"],
      properties: {
        name: {
          bsonType: "string",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
      },
    },
  },
});

db.demo3.insertOne({
  name: "abc",
  skills: ["html"],
});

/* {
  name:"string",
  email:"string",
  password:"string",
  phoneNumber:"int",
  address:{
      city:"string",
      state:"string",
      pincode:"int"
  },
  skills:["string"],
} */

db.createCollection("demo4", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "phoneNumber", "address", "skills"],
      properties: {
        name: {
          bsonType: "string",
          description: "name should be string",
        },
        email: {
          bsonType: "string",
          description: "name should be string",
        },
        password: {
          bsonType: "string",
          description: "name should be string",
        },
        phoneNumber: {
          bsonType: "int",
        },
        address: {
          bsonType: "object",
          required: ["city", "state", "pincode"],
          properties: {
            city: { bsonType: "string" },
            state: { bsonType: "string" },
            pincode: { bsonType: "int" },
          },
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
        },
      },
    },
  },
});

db.demo4.insertOne({
  name: "av",
  email: "abc",
  password: "abc",
  phoneNumber: 1234567890,
  address: {
    city: "Noida",
    pincode: 201301,
  },
  skills: ["html", "css"],
});

/* {
        skills:[{ fe:["html"] }, { fe: ["css"] }, ........]
      } */

db.createCollection("demo5", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["skills"],
      properties: {
        bsonType: "array",
        items: {
          bsonType: "object",
          required: ["fe"],
          properties: {
            bsonType: "array",
            items: {
              bsonType: "string",
            },
          },
        },
      },
    },
  },
});

db.users.insertOne({
  name: "varun",
  age: 27,
  address: {
    city: "Noida",
    state: "UP",
  },
});

db.userDetails.insertOne({
  name: "varun",
  age: 27,
});

db.address.insertOne({
  city: "noida",
  state: "up",
});

db.userDetails.updateOne(
  { name: "varun" },
  { $set: { address: ObjectId("67b81db4bd4ce5090dcb0cef") } }
);
light;

db.emp.aggregate([{ $match: { job: "clerk" } }]);

db.emp.aggregate([
  {
    $addFields: {
      annualSal: { $multiply: ["$sal", 12] },
    },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      annualSalary: { $multiply: ["$sal", 12] },
    },
  },
  {
    $match: {
      $and: [{ deptNo: { $in: [10, 20] } }, { job: "clerk" }, { annualSalary: { $gt: 25000 } }],
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      $and: [{ deptNo: { $in: [10, 30] } }, { hireDate: { $gt: new Date("31-dec-1981") } }],
    },
  },
  {
    $project: { empName: 1 },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      year: { $year: "$hireDate" },
    },
  },
  {
    $match: {
      $and: [{ year: { $gt: 1981 } }, { deptNo: { $in: [10, 30] } }],
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
      avgSal: { $avg: "$sal" },
      maxSal: { $max: "$sal" },
      minSal: { $min: "$sal" },
      sumSal: { $sum: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      numberOfEmp: { $sum: 1 },
      maxSal: { $max: "$sal" },
      minSal: { $min: "$sal" },
      totalSal: { $sum: "$sal" },
      avgSal: { $avg: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      empName: { $regex: /a/ },
    },
  },
  {
    $group: {
      _id: "$job",
      totalEmp: { $sum: 1 },
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      totalSalary: { $sum: "$sal" },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      job: { $in: ["clerk", "manager"] },
    },
  },
  {
    $project: {
      empName: 1,
      dateOfJoining: "$hireDate",
      deptNo: 1,
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      empName: { $regex: /a/ },
    },
  },
  {
    $group: {
      _id: "$job",
      totalNumberOfEmp: { $sum: 1 },
      employeeName: { $push: "$empName" },
    },
  },
  {
    $project: {
      totalNumberOfEmp: 1,
      employeeName: 1,
      job: "$_id",
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $addFields: {
      midTermSal: { $multiply: ["$sal", 6] },
    },
  },
  {
    $match: {
      midTermSal: { $gt: 30000 },
    },
  },
  {
    $project: {
      empName: 1,
      hireDate: 1,
      midTermSal: 1,
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$job",
      count: { $sum: 1 },
    },
  },
  {
    $match: {
      count: { $gt: 3 },
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      totalSal: { $sum: "$sal" },
      count: { $sum: 1 },
    },
  },
  {
    $match: {
      totalSal: { $gt: 10000 },
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$deptNo",
      maximum_salary: { $max: "$sal" },
      emp_name: { $push: "$empName" },
      jobs: { $push: "$job" },
      designation: { $addToSet: "$job" },
    },
  },
  {
    $match: {
      maximum_salary: { $gt: 5000 },
    },
  },
  {
    $project: {
      designation: 1,
      emp_name: 1,
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      $expr: {
        $gt: ["$comm", "$sal"],
      },
    },
  },
  {
    $project: {
      empName: 1,
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $sort: {
      empName: -1,
    },
  },
  {
    $project: {
      empName: 1,
      _id: 0,
    },
  },
]);

db.emp.aggregate([
  {
    $sort: {
      sal: -1,
      count: { $sum: 1 },
    },
  },
  { $limit: 1 },
]);

db.emp.aggregate([
  {
    $group: {
      _id: "$sal",
      avgSal: { $avg: "$sal" },
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      avgSal: 1,
      _id: 0,
      sal: "$_id",
    },
  },
]);

db.emp.aggregate([
  {
    $group: {
      _id: null,
      avgSal: { $avg: "$sal" },
      count: { $sum: 1 },
    },
  },
]);

db.emp.aggregate([
  {
    $match: {
      empName: { $regex: /a/ },
    },
  },
  {
    $group: {
      _id: null,
      count: { $sum: 1 },
    },
  },
  {
    $project: {
      count: 1,
      _id: 0,
    },
  },
]);

db.addressInfo.insertMany([
  { pincode: 20301, city: "Noida", state: "UP" },
  {
    pincode: 562157,
    city: "Banglore",
    state: "KA",
  },
]);

db.emp.aggregate([
  {
    $lookup: {
      from: "addressInfo",
      foreignField: "_id",
      localField: "address",
      as: "address",
    },
  },
]);

db.usersInfo.aggregate([
  {
    $lookup: {
      from: "addressInfo",
      foreignField: "_id",
      localField: "address",
      as: "locationInfo",
    },
  },
]);

db.emp.aggregate([
  {
    $lookup: {
      from: "dept",
      foreignField: "deptNo",
      localField: "deptNo",
      as: "dept_details",
    },
  },
  {
    $unwind: "$dept_details",
  },
  {
    $project: {
      employeeName: "$empName",
      _id: 0,
      location: "$dept_details.loc",
    },
  },
]);

db.dept.aggregate([
  {
    $lookup: {
      from: "emp",
      foreignField: "deptNo",
      localField: "deptNo",
      as: "emp_details",
    },
  },
]);

db.emp.aggregate([
  {
    $lookup: {
      from: "dept",
      foreignField: "deptNo",
      localField: "deptNo",
      as: "dept",
    },
  },
  {
    $unwind: "$dept",
  },
  {
    $match: {
      " dept.dName": "accounting",
    },
  },
  {
    $project: {
      sal: 1,
      "dept.dName": 1,
    },
  },
]);

db.contactInfo.insertMany([
  { city: "Noida", phone: 12345678, email: "value1", gitHub: "github.com/something" },
  { city: "Banglore", phone: 9876543, email: "value2", gitHub: "github.com/something12" },
]);

db.usersInfo.aggregate([
  {
    $lookup: {
      from: "addressInfo",
      foreignField: "_id",
      localField: "address",
      as: "addressInfo",
    },
  },
  {
    $unwind: "$addressInfo",
  },
  {
    $lookup: {
      from: "contactInfo",
      foreignField: "_id",
      localField: "addressInfo.contact",
      as: "contactInfo",
    },
  },
  {
    $unwind: "$contactInfo",
  },
]);

// Q3) display the emp details whose job is same as miller

db.emp.aggregate([
  {
    $match: {
      empName: "miller",
    },
  },
  {
    $lookup: {
      from: "emp",
      let: { mJob: "$job" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$job", "$$mJob"],
            },
          },
        },
      ],
      as: "sameJOb",
    },
  },
]);
