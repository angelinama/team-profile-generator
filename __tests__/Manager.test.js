const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialize", () => {
    it("should have a name, id, email, github", () => {
      // arrange/act
      const mg = new Manager("Angelina", 1 , "angelina890308@gmail.com", 509);
      // assert
      expect("name" in mg).toEqual(true);
      expect("id" in mg).toEqual(true);
      expect("email" in mg).toEqual(true);
      expect("officeNumber" in mg).toEqual(true);
    })
    // should not have a missing name and name should be equal to 
    it ("should not have a missing name", () => {
      const mg = new Manager("Angelina", 1 , "angelina890308@gmail.com", 509);
      //name is using employee class so here simply test if it's the same
      expect(mg.name).toEqual("Angelina");
    });

    // should have an id assigned when they are created
    it("should have an number id assigned when they are created", () => {
      const mg = new Manager("Angelina", 1 , "angelina890308@gmail.com", 509);
      expect(mg.id).toEqual(1);
    });
    // should have an email assigned when they created
    it("should have an email assigned when they created", () => {
      const mg = new Manager("Angelina", 1 , "angelina890308@gmail.com", 509);
      expect(mg.email).toEqual("angelina890308@gmail.com");
    });
    //should have office number assigned
    it("should have same office number as assigned", () => {
      const mg = new Manager("Angelina", 1 , "angelina890308@gmail.com", 509);
      expect(mg.officeNumber).toEqual(509);
    });
  });

  describe("getRole", () => {
    it("should return Manager", () => {
      const mg = new Manager("Angelina", 1 , "angelina890308@gmail.com", 509);
      expect(mg.getRole()).toEqual("Manager");
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the value of officeNumber property of the object", () => {
      const mg = new Manager("Angelina", 1 , "angelina890308@gmail.com", 509);
      expect(mg.getOfficeNumber()).toEqual(mg.officeNumber);
      expect(mg.getOfficeNumber()).toEqual(509);
    });
  });
})
