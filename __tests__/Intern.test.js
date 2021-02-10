const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialize", () => {
    it("should have a name, id, email, school", () => {
      // arrange/act
      const intern = new Intern("Angelina", 1 , "angelina890308@gmail.com", "Cornell");
      // assert
      expect("name" in intern).toEqual(true);
      expect("id" in intern).toEqual(true);
      expect("email" in intern).toEqual(true);
      expect("school" in intern).toEqual(true);
    })
    // should not have a missing name and name should be equal to 
    it ("should not have a missing name", () => {
      const intern = new Intern("Angelina", 1 , "angelina890308@gmail.com", "Cornell");
      //name is using employee class so here simply test if it's the same
      expect(intern.name).toEqual("Angelina");
    });

    // should have an id assigned when they are created
    it("should have an number id assigned when they are created", () => {
      const intern = new Intern("Angelina", 1 , "angelina890308@gmail.com", "Cornell");
      expect(intern.id).toEqual(1);
    });
    // should have an email assigned when they created
    it("should have an email assigned when they created", () => {
      const intern = new Intern("Angelina", 1 , "angelina890308@gmail.com", "Cornell");
      expect(intern.email).toEqual("angelina890308@gmail.com");
    });
    //should have same school assigned
    it("should have same school as assigned", () => {
      const intern = new Intern("Angelina", 1 , "angelina890308@gmail.com", "Cornell");
      expect(intern.school).toEqual("Cornell");
    });
  });

  describe("getRole", () => {
    it("should return Intern", () => {
      const intern = new Intern("Angelina", 1 , "angelina890308@gmail.com", "Cornell");
      expect(intern.getRole()).toEqual("Intern");
    });
  });

  describe("getSchool", () => {
    it("should return the value of school property of the object", () => {
      const intern = new Intern("Angelina", 1 , "angelina890308@gmail.com", "Cornell");
      expect(intern.getSchool()).toEqual(intern.school);
      expect(intern.getSchool()).toEqual("Cornell");
    });
  });
})
