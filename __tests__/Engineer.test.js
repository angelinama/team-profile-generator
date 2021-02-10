const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialize", () => {
    it("should have a name, id, email, github", () => {
      // arrange/act
      const engineer = new Engineer("Angelina", 1 , "angelina890308@gmail.com", "angelinama");
      // assert
      expect("name" in engineer).toEqual(true);
      expect("id" in engineer).toEqual(true);
      expect("email" in engineer).toEqual(true);
      expect("github" in engineer).toEqual(true);
    })
    // should not have a missing name and name should be equal to 
    it ("should not have a missing name", () => {
      const eng = new Engineer("Angelina", 1 , "angelina890308@gmail.com", "angelinama");
      //name is using employee class so here simply test if it's the same
      expect(eng.name).toEqual("Angelina");
    });

    // should have an id assigned when they are created
    it("should have an number id assigned when they are created", () => {
      const eng = new Engineer("Angelina", 1 , "angelina890308@gmail.com", "angelinama");
      expect(eng.id).toEqual(1);
    });
    // should have an email assigned when they created
    it("should have an email assigned when they created", () => {
      const eng = new Engineer("Angelina", 1 , "angelina890308@gmail.com", "angelinama");
      expect(eng.email).toEqual("angelina890308@gmail.com");
    });
    //should have github username assigned
    it("should have same github username as assigned", () => {
      const eng = new Engineer("Angelina", 1 , "angelina890308@gmail.com", "angelinama");
      expect(eng.github).toEqual("angelinama");
    });
  });

  describe("getRole", () => {
    it("should return Engineer", () => {
      const eng = new Engineer("Angelina", 1 , "angelina890308@gmail.com", "angelinama");
      expect(eng.getRole()).toEqual("Engineer");
    });
  });

  describe("getGithub", () => {
    it("should return the value of github property of the object", () => {
      const eng = new Engineer("Angelina", 1 , "angelina890308@gmail.com", "angelinama");
      expect(eng.getGithub()).toEqual(eng.github);
      expect(eng.getGithub()).toEqual("angelinama");
    });
  });
})
