console.log("Starting app");
// APIs --> https://nodejs.org/api/

// Third party modules
const fs = require("fs");
const _ = require("lodash");

// I created
const notes = require("./notes.js");

var command = process.argv[2]; //list
console.log(command);
// Access command line arguments
// console.log(process.argv);
if (command === "add") {
  console.log("Adding new note");
} else if (command === "list") {
  console.log("Show list");
} else if (command === "read") {
  console.log("Reading note");
} else if (command === "remove") {
  console.log("Removing Note");
} else {
  console.log("Command not recognized");
}
