// DEPENDENCIES
// something to write files - fs
const fs = require('fs');
// something to prompt users with questions - inquirer
const inquirer = require('inquirer');

// DATA
// a list of questions
const questions = [
//    What is your name
  {
    type: "input",
    name: "yourName",
    message: "What is your name?"
  },
//    What is your location
  {
    type: "input",
    name: "location",
    message: "What is your location?"
  },
//    Tell us about yourself
  {
    type: "input",
    name: "bio",
    message: "Tell us about yourself"
  },
//    LinkedIn URL
  {
    type: "input",
    name: "linkedIn",
    message: "Please enter your LinkedIn URL"
  },
//    Github URL
  {
    type: "input",
    name: "gitHub",
    message: "Please enter your gitHub URL"
  },
]


// FUNCTIONS
// writeHTML - takes user reponses and writes an html file
const writeHTML = (userResponses) => {
  // put user info into html code
  // filename
  // content
  const content = renderAtTemplate("template.html", userResponses);
  console.log(content);
  // write the html code into a file called index.html
  // we can use fs.writeFileSync here
  fs.writeFileSync("index.html", content, "utf8");

}

const renderAtTemplate = (file, data) => {
  // get the contents of the template file
  const templateContents = fs.readFileSync(`./${file}`, 'utf8');
  let output = templateContents;
  // go through the keys of our data object
  // const dataKeys = Object.keys(data)
  // console.log(dataKeys)
  // for (const key of dataKeys) {
  //   // replace placeholder that match those key names in our template contents
  //   const itemToReplace = `@~${key}~@`;
  //   console.log(itemToReplace);
  //   output = output.replace(itemToReplace, data[key])
  // }

  for (const key in data) {
    // replace placeholder that match those key names in our template contents
    const itemToReplace = `@~${key}~@`;
    console.log(itemToReplace);
    output = output.replace(itemToReplace, data[key])
  }
  
  // return the updated page contents
  return output;
}

// USER INTERACTIONS
// prompt the user to get answers to our questions
inquirer
  .prompt(questions)
  .then(userResponse => {
    //    Write a file with their answers
    writeHTML(userResponse);
  })
  .catch(err => {
    console.error(err);
  })
