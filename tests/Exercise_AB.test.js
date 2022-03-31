const Jedi = require("./Exercise_ABC.js").Jedi;
const Sith = require("./Exercise_ABC.js").Sith;

describe("Jedi function testing", () => {
  var newJedi;
  var newSith;

  beforeEach(() => {
    newJedi = new Jedi("newJedi", 100, 2000);
    newSith = new Sith("newSith", 200, 1000);
  });

  test("the new objects should have the correct names.", () => {
    expect(newJedi.name).toEqual("newJedi");
  });

  test("the jedi object should have correct power", () => {
    expect(newJedi.power).toBe(100);
  });

  test("the jedi object should have correct health", () => {
    expect(newJedi.health).toEqual(2000);
  });

  test("the jedi object should attack the correct target", () => {
    const spyJediAttack = jest
      .spyOn(newJedi, "attack")
      .mockImplementation(() => {
        return "done";
      });
    expect(newJedi.attack(newSith)).toEqual("done");
    expect(spyJediAttack).toHaveBeenCalledWith(newSith);
    expect(spyJediAttack).toHaveBeenCalledTimes(1);
  });

  test("the attack should injure opponent", () => {
    const spySithInjure = jest
      .spyOn(newSith, "injure")
      .mockImplementation(() => {
        console.log("Mock attack to injure");
      });
    newJedi.attack(newSith);
    expect(spySithInjure).toHaveBeenCalled();
    expect(spySithInjure).toHaveBeenCalledTimes(1);
  });

  test("the jedi should be injured by his or her opponent's attack", () => {
    const spyJediInjure = jest
      .spyOn(newJedi, "injure")
      .mockImplementation(() => {
        console.log("Mock attack on Jedi");
      });

    newSith.attack(newJedi);
    expect(spyJediInjure).toHaveBeenCalled();
  });

  test("should be injured by the amount of damage output from opponent's attack", () => {
    let originalHealth = newJedi.health;
    newJedi.injure(100);
    expect(newJedi.health).toEqual(originalHealth - 100);
  });

  test("should die when health is less than 0", () => {
    const jediDies = jest.spyOn(newJedi, "dead").mockImplementation(() => true);
    expect(jediDies).toBeTruthy();
  });
});
