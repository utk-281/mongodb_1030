/*








 */
//~ JSON ==> java script object notation. it is used for data exchange. it is language independent.
//? serialization and  de-serialization --> stringify(), parse()

let json = [
  {
    name: "abc",
    age: 33,
    id: 123.345,
    email: "abc@gmail.com",
    key4: true,
    key5: null,
  },
  {
    name: "def",
    age: 33,
    id: "u7654",
  },
];

// in json ==> we cannot store undefined, functions and date objects
//? keys should be used in double quotes and after last key-value pair, no comma should be given
