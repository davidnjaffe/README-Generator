const inquirer = require("inquirer");
const fs = require('fs');
const generate = require("./utils/generateMarkdown")
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);


inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the project title?"
    },
    {
      type: "input",
      name: "description",
      message: "project description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Special installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage information:"
    },
    {
        type: "input",
        name: "test",
        message: "Test instructions:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Do you have any contribution guidelines?"
    },
    {
      type: "list",
      message: "What type of license is required?",
      name: "license",
      choices: [
        "MIT",
        "artistic-2.0",
        "afl-3.0",
        "apache-2.0",
        "osl-3.0"
      ]
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
      type: "input",
      name: "notes",
      message: "Notes to user:"
  },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
  ])
  .then(function(response) {
      console.log(response)
      var readmeContent = generate(response)
      writeToFile("README.md", readmeContent)

    
  });

// // array of questions for user
// const questions = [

// ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
        console.log("Success!");
        });

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
