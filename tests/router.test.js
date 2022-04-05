const index = require("../index");

const request = require("supertest");
const express = require("express");
const app = express();

app.use("/", index);

test("the note router should call list in response to a get request", (done) => {
  Router
    .get(
      {
        auth: {
          user: "sam",
        },
      },
      response
    )
    .then(() => {
      expect(noteService.list).toHaveBeenCalledWith("sam");
      done();
    });
});

test("index route works", done => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ name: "frodo" })
    .expect(200, done);
});