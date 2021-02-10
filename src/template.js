const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

// TODO change hard-coded part to employees
const employees = [
  new Manager('Mike', 1, "mike@cornell.edu", 1),
  new Engineer('Angelina', 2, 'bm579@cornell.edu', 'angelinama'),
  new Intern('Dave', 4, 'dave@gmail.com', 'dave@gmail.com'),
  new Engineer('James',3 ,'jjj@cornell.edu', 'james')
];

const startFile = "./start.html";
const endFile = "./end.html";

let htmlString = "";

//---------------functions------------------//
/** readfile function that returns a prompt */
const readFilePromise = (...args) => {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      if (err) return reject(err)
      resolve(data);
    })
  })
}

/** main function to generate html string and call write file function to write to index.html */
const generateHTMLStr = (employees) => {
  //append the start html content(before card of Employee) to htmlString
  readFilePromise(startFile, 'utf8')
  .then(data => {
    htmlString = htmlString +  data;

    //generate card for each Employee in the employees list
    employees.forEach(empl => {
      let name, role, id, email, key, value;
      name = empl.getName();
      id = empl.getId();
      email = empl.getEmail();
      email = `<a href="mailto:${email}">${email}</a>`;
      if (empl.getRole() === 'Manager') {
        role = `<i class="fa fa-coffee" aria-hidden="true"></i> Manager`;
        //get the specific info for Manager, i.e. office number
        key = "Office Number";
        value = empl.getOfficeNumber();
      } else if (empl.getRole() === 'Engineer') {
        role = `<i class="fa fa-glasses" aria-hidden="true"></i> Engineer`;
        //get the specific info for Engineer, i.e. github link
        key = "Github";
        let github = empl.getGithub();
        value = `<a href="https://github.com/${github}">${github}</a>`;
      } else {//Intern
        role = `<i class="fa fa-user-graduate" aria-hidden="true"></i> Intern`;
        //get the specific info for Engineer, i.e. github link
        key = "School";
        value = empl.getSchool();
      }

      htmlString = htmlString + `
        <div class="card shadow-lg rounded mb-3" style="min-width: 30%;">
          <div class="card-header bg-primary text-white">
            <h5 class="card-title">${name}</h5>
            <h5 class="card-subtitle mb-2">${role}</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: ${email}</li>
              <li class="list-group-item">${key}: ${value}</li>
            </ul>
          </div>
        </div>
        `
      
    });
    return readFilePromise(endFile, 'utf8');
  })
  .then(data => {
    htmlString = htmlString +  data;
    // console.log(htmlString);
    fs.writeFileSync("../dist/index.html", htmlString, "utf8");
  })
  .catch(err => {
    console.error(err);
  });
}

generateHTMLStr(employees);