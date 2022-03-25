// Before each time you run jest test: un the commands below in you CLI
// knex migrate:rollback --env testing
// knex migrate:latest --env testing
// knex seed:run --env testing
// This resets the testing database we want to use within this application

// run the test with: --forceExit

const NoteService = require("../NoteService/NoteService.js");
require("dotenv").config();

const knex = require("knex")({
  client: "postgresql",
  connection: {
    database: "noteapp",
    user: "postgres",
    password: "password",
  },
});

describe("Note Service with a properfile", () => {
  beforeEach(() => {
    jest.setTimeout(20000);

    noteService = new NoteService(knex);
  });

  test("At first it should list notes within the database seeds", () => {
    return noteService.list().then((notes) => {
      console.log(notes);
      expect(notes).toEqual({
        sam: [{ content: "one", id: 1 }],
        test: [{ content: "two", id: 2 }],
      });
    });
  });

  test("It should be able to return an empty array for a new user", () => {
    return noteService.list("sam").then((notes) => {
      expect(notes).toEqual([{ id: 1, content: "one" }]);
    });
  });

  test("It should be able to add a note from a users note array", () => {
    return noteService
      .add("first note", "sam")
      .then(() => noteService.list("sam"))
      .then((notes) => {
        expect(notes).toEqual([
          { id: 1, content: "one" },
          { id: 3, content: "first note" },
        ]);
      });
  });

  test("The service should be able to update a note", () => {
    return noteService
      .add("second note", "sam")
      .then(() => noteService.update(3, "second good note", "sam"))
      .then(() => noteService.list("sam"))
      .then((notes) => {
        expect(notes).toEqual([
          { id: 1, content: "one" },
          { id: 3, content: "second good note" },
          { id: 4, content: "second note" },
        ]);
      });
  });

  test("The service should be able to remove a note", () => {
    return noteService
      .remove(1, "sam")
      .then(() => noteService.list("sam"))
      .then((notes) => {
        expect(notes).toEqual([
          { id: 3, content: "second good note" },
          { id: 4, content: "second note" },
        ]);
      });
  });

  test("the service should throw and error for updating a non existing user.", () => {
    return noteService.update(1, "note", "john").catch((err) => {
      expect(err).toEqual(
        new Error("Cannot update a note if the user doesn't exist!")
      );
    });
  });

  test("the service should throw an error for trying to remove a note from a non-existing user", () => {
    return noteService.remove(1, "altaf").catch((err) => {
      expect(err).toEqual(
        new Error(`Cannot remove a note when the user doesn't exist!`)
      );
    });
  });
});
