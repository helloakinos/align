const Sith = require("./Exercise_ABC.js").Sith;
const Jedi = require("./Exercise_ABC.js").Jedi;
describe("Sith functions testing", () => {
  var newSith;
  var newJedi;

  let spyAttackSith;
  let spyDeadJedi;
  let spyInjureJedi;
  let spyDeadSith;
  let spyInjureSith;

  beforeEach(() => {
    newSith = new Sith("ken", 200, 1000);
    newJedi = new Jedi("ryu", 100, 2000);

    spyAttackSith = jest.spyOn(newSith, "attack");
    // .mockImplementation(()=>{console.log('Mock ken attack')}) -
    // if mocked function is running then you wont actually test the class.

    spyInjureJedi = jest.spyOn(newJedi, "injure");
    //.mockImplementation(()=>{console.log('Mock Jedi Injury')})- if mocked function is running then you wont actually test the class.

    spyDeadSith = jest.spyOn(newSith, "dead").mockImplementation(() => true);
    spyInjureSith = jest.spyOn(newSith, "injure");
    //.mockImplementation(()=>{console.log('Mock Sith Injury')})- if mocked function is running then you wont actually test the class.
  });

  test("should have a correct name", () => {
    expect(newSith.name).toEqual("ken");
  });

  test("should have correct power", () => {
    expect(newSith.power).toEqual(200);
  });

  test("should have correct health", () => {
    expect(newSith.health).toEqual(1000);
  });

  test("should attack the correct target", () => {
    newSith.attack(newJedi);
    expect(spyAttackSith).toHaveBeenCalledWith(newJedi);
  });

  test("attack should injure opponent", () => {
    newSith.attack(newJedi);
    expect(spyInjureJedi).toHaveBeenCalled();
  });

  test("should be injured by opponent's attack", () => {
    newJedi.attack(newSith);
    expect(spyInjureSith).toHaveBeenCalled();
  });

  test("should be injured by the amount of damage output from opponent's attack", () => {
    let originalHealth = newSith.health;
    newSith.injure(100);
    expect(newSith.health).toEqual(originalHealth - 100);
  });

  test("should die when health is less than 0", () => {
    newSith.injure(10000);
    expect(spyDeadSith).toBeTruthy();
  });
});
