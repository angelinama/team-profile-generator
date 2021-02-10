class Employee {
  constructor(name, id, email) {
    this.name = name.trim();
    this.id = id;
    this.email = email.trim().toLowerCase();
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;