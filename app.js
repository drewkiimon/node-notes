console.log("Starting app");
// APIs --> https://nodejs.org/api/

const fs = require("fs");
const os = require("os");
// How to import different files into our code... Why not use "import"?
const notes = require("./notes.js");

// var res = notes.addNote();
// console.log(res);
notes.add(1, 2);

// var user = os.userInfo();
// console.log(user.username);
// fs.appendFileSync(
//   "greetings.txt",
//   `I love my cat, and my name is ${user.username} and I am ${notes.age}`
// );
