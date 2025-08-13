let object = {
  userName: "abc",
  age: 23,
  isMarried: false,
  skills: ["html", "css", "js"],
  address: {
    city: "Noida",
    state: "UP",
    pincode: 123456,
  },
  key4: null,
  key5: undefined,
  key6: new Date(),
  key7: function () {},
  1: "numberKey",
  "1-username": "def",
  "user age": 34,
  userName: "def",
  userName: "xyz",
  userage: 12,
};

// console.log(object.age); // 23
// console.log(object["age"]);
// console.log(object.skills[2]); // js
// console.log("object.address.state"); // UP
// // console.log(object.1)
// console.log(object[1]);
// console.log(object["1 - username"]);
// // console.log(object.user age)
// console.log(object["userName"]);
// console.log(object["address"]["pincode"]);

// console.log(object);
// we can use duplicate keys but it is not recommended, as it overrides the data
//! we can store all the datatypes in js objects

let a = -0;

if (a) {
  console.log(a, ": is truthy");
} else {
  console.log("falsy");
}
