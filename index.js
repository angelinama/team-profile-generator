// DEPENDENCIES
const fs = require('fs');
const inquirer = require('inquirer');

// DATA
// a list of questions
const questions = [
  {
    type: "list",
    name: "role",
    choices: ["Manager","Engineer", "intern"],
  	message: "What role do you want to create?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your name(First name)?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "email",
    message: "what is your email?"
  }
];


// FUNCTIONS
// writeHTML - takes user reponses and writes an html file
const writeHTML = (userResponses) => {
  console.log(userResponses);
  // const content = renderAtTemplate("src/template.html", userResponses);
  // console.log(content);

  // fs.writeFileSync("index.html", content, "utf8");

}

// const renderAtTemplate = (file, data) => {
//   // get the contents of the template file
//   const templateContents = fs.readFileSync(`./${file}`, 'utf8');
//   let output = templateContents;
//   // go through the keys of our data object
//   // const dataKeys = Object.keys(data)
//   // console.log(dataKeys)
//   // for (const key of dataKeys) {
//   //   // replace placeholder that match those key names in our template contents
//   //   const itemToReplace = `@~${key}~@`;
//   //   console.log(itemToReplace);
//   //   output = output.replace(itemToReplace, data[key])
//   // }

//   for (const key in data) {
//     // replace placeholder that match those key names in our template contents
//     const itemToReplace = `@~${key}~@`;
//     console.log(itemToReplace);
//     output = output.replace(itemToReplace, data[key])
//   }
  
//   // return the updated page contents
//   return output;
// }

// USER INTERACTIONS
// prompt the user to get answers to our questions
inquirer.prompt(questions)
  .then(userResponse => {
    let newQuestion = [];
    if (userResponse.role === 'Engineer') {
      newQuestion.push({
        type: "input",
        name: "github",
        message: "what is your github?"
      });
    } else if (userResponse.role === 'Manager') {
      newQuestion.push({
        type: "input",
        name: "officeNumber",
        message: "what is your office number?"
      });
    } else {
      newQuestion.push({
        type: "input",
        name: "school",
        message: "what school are you attending?"
      });
    }
    
    inquirer.prompt(newQuestion)
    .then(response => {
      for (const [key, value] of Object.entries(response)) {
        userResponse[key] = value;
      };
      writeHTML(userResponse);

    });
  })
  .catch(err => {
    console.error(err);
  })
