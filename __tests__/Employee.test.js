const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialize", () => {
    // should have a name
    it("should have a name, id, email", () => {
      // arrange/act
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");
      // assert
      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
    })
    // should not have a missing name and name should be equal to 
    it ("should not have a missing name", () => {
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");

      expect(employee.name).not.toEqual(undefined);
      expect(typeof employee.name).toEqual("string"); //name is a string
      expect(employee.name).toEqual("Angelina");
    });

    // should have an id assigned when they are created
    it("should have an number id assigned when they are created", () => {
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");

      expect(employee.id).not.toEqual(undefined); //has id
      expect(typeof employee.id).toEqual("number"); //id is a number
      expect(employee.id).toEqual(1);
    });
    // should have an email assigned when they created
    it("should have an email assigned when they created", () => {
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");
      //TODO type of email + using regex (number/letter + @ + number/letter + . + number/letter)
      expect(employee.email).toEqual("angelina890308@gmail.com")
    })
  });
  
  describe("getName", () => {
    it("should return the same name assigned to", () => {
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");
      expect(employee.getName()).toEqual(employee.name);
      expect(employee.getName()).toEqual('Angelina');
      //Technically we can also test if other properties have been changed but getter function is conventionally only return a value so omit here
    });
  });
  
  describe("getId", () => {
    it("should return the same id assigned to", () => {
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");
      expect(employee.getId()).toEqual(employee.id);
      expect(employee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the same email assigned to", () => {
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");
      expect(employee.getEmail()).toEqual(employee.email);
      expect(employee.getEmail()).toEqual("angelina890308@gmail.com");
    });
  });

  describe("getRole", () => {
    it("should return Employee", () => {
      const employee = new Employee("Angelina", 1 , "angelina890308@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
})
