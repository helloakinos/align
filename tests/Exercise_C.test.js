const Jedi = require("./Exercise_ABC.js").Jedi;
const Sith = require("./Exercise_ABC.js").Sith;
const duel = require("./Exercise_ABC.js").duel;

describe("starwars duel testing", () => {
  var fakeObiwan;
  var fakeAnakin;

  let spyFakeAnakinAttack;
  let spyFakeObiwanAttack;

  let spyFakeAnakinInjure;
  let spyFakeAnakinDead;

  beforeEach(() => {
    fakeObiwan = new Jedi("Obiwan Kenobi", 10, 111);
    fakeAnakin = new Sith("Anakin Skywalker", 10, 111);

    spyFakeAnakinAttack = jest
      .spyOn(fakeAnakin, "attack")
      .mockImplementation(() => {
        console.log("Mock Anakin Attack");
        return "hes been hit";
      });
    spyFakeObiwanAttack = jest
      .spyOn(fakeObiwan, "attack")
      .mockImplementation(() => {
        console.log("Mock Obiwan Attack");
      });

    spyFakeAnakinInjure = jest
      .spyOn(fakeAnakin, "injure")
      .mockImplementation(() => {
        console.log("Mocked Injure");
      });
    spyFakeAnakinDead = jest
      .spyOn(fakeAnakin, "dead")
      .mockImplementation(() => {
        console.log("Mocked Anakin death");
      });

    // C
    jest.useFakeTimers();
  });

  test("to see if the methods within the duel function have been called.", () => {
    duel(fakeObiwan, fakeAnakin);

    expect(spyFakeAnakinAttack).toHaveBeenCalledTimes(6);
    expect(spyFakeAnakinAttack).toHaveBeenCalledWith(
      fakeObiwan
    );

    expect(spyFakeObiwanAttack).toHaveBeenCalledTimes(6);
    expect(spyFakeObiwanAttack).toHaveBeenCalledWith(
      fakeAnakin
    );
    expect(fakeAnakin.attack(fakeObiwan)).toBe(
      "hes been hit"
    );
  });

  test("The outcome should always be the same, anakin becoming injured.", () => {
    duel(fakeObiwan, fakeAnakin);

    expect(spyFakeAnakinInjure).toHaveBeenCalled();
    expect(spyFakeAnakinDead).toHaveBeenCalledTimes(1);
    expect(fakeAnakin.dead).toBeTruthy();
  });

  //C
  test("Anakin should be rescued by Darth Sidiouc after 5000 milliseconds", () => {
    duel(fakeObiwan, fakeAnakin);
    jest.runTimersToTime(5001);
    expect(fakeAnakin.health).toEqual(800);
    expect(fakeAnakin.power).toEqual(90);
  });
});
