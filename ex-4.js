const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
// วิธีที่ 1
// const newEmployee1 = {name: "Alicia",
//   age: 29,
//   hobbies: ["Shopping", "Reading novels"]
// };
// const newEmployee2 = {name: "Kody",
//   age: 19,
//   hobbies: ["Computer games", "Wakeboard"]
// };
// employees.push(newEmployee1);
// employees.push(newEmployee2);
// console.log(employees);
// วิธีที่ 2
employees.push({name: "Alicia", age: 29, hobbies: ["Shopping", "Reading novels"]}, {name: "Kody", age: 19, hobbies: ["Computer games", "Wakeboard"]})
console.log(employees);
