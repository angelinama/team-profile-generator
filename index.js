// DEPENDENCIES
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { create } = require('domain');

// DATA
const employees = [];
// a list of questions
const questions = [
  {
    type: "input",
    name: "managerName",
  	message: "What is your team manager's name (First name)?"
  },
  {
    type: "input",
    name: "managerId",
  	message: "What is your team manager's Id?"
  },
  {
    type: "input",
    name: "managerEmail",
  	message: "What is your team manager's email?"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "what is your team manager's office number?"
  },
];

// USER INTERACTIONS
// prompt the user to get answers to our questions
inquirer.prompt(questions)
  .then(userResponse => {
    

   //create the manager object
    const manager = new Manager(userResponse.managerName, userResponse.managerId, userResponse.managerEmail, userResponse.officeNumber);

    employees.push(manager);
    getRole();
  })
  .catch(err => {
    console.error(err);
  })

// FUNCTIONS
// prompt employee options
function getRole() {
  inquirer.prompt([{
    type: "list",
    name: "role",
    choices: ["", "Engineer", "Intern"], //empty string is used to stop the program
  	message: "What role do you want to create?"
  }])
  .then(response => {
    if (!response.role) {
      {//user stop entering, generate html
        console.log(employees);
        return;
        //TODO logic of generate html
      }
    } else {
      createTeamMember(response.role);
    };
  })
  .catch(err => {
    console.error(err);
  });
}

// prompt questions to get name, id, email, and github for engineers or school for intern
function createTeamMember(role) {
  let newQuestion = [
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
  //role specific questions
  if (role === 'Engineer') {
    newQuestion.push({
      type: "input",
      name: "github",
      message: "what is your github username?"
    });
  } else if (role === 'Intern'){
    newQuestion.push({
      type: "input",
      name: "school",
      message: "what school are you attending?"
    });
  }

  inquirer.prompt(newQuestion)
    .then(response => {
      // for (const [key, value] of Object.entries(response)) {
      //   userResponse[key] = value;
      // };
      
      //create team member objects according to role, Engineer or Intern object and push to employees array
      if (role === 'Engineer') {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(engineer);
      } else {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employees.push(intern);
      }

      //prompt back to get role you want to create
      getRole();
    })
    .catch(err => {
      console.error(err);
    });

}


// writeHTML - takes user reponses and writes an html file
const writeHTML = (userResponses) => {
  console.log(userResponses);
  // fs.readFile("src/template.html",'utf8', (err, fileData) => {
  //   if (err) throw err;
  //   console.log(fileData);
  // });
  

  // fs.writeFileSync("index.html", content, "utf8");

}


