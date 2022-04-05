const request = require("supertest");
const app = require("../index.js")

//try to add dotenv config to see if it works

const tester = request(app);

describe("Routes", () => {
  jest.setTimeout(10000);
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 1000)); // avoid jest open handle error
  });

  test("GET / it should return 401 if you do not supply a username and password", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  test("GET /api/notes it should return 401 if you do not supply a username and password", (done) => {
    request(app)
      .get("/api/notes")
      .expect(401)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  test("POST /api/notes it should return 401 if you do not supply a username and password", (done) => {
    request(app)
      .post("/api/notes")
      .expect(401)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  test("PUT /api/notes/1 it should return 401 if you do not supply a username and password", (done) => {
    request(app)
      .put("/api/notes/1")
      .expect(401)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
  test("DELETE /api/notes/1 it should return 401 if you do not supply a username and password", (done) => {
    request(app)
      .delete("/api/notes/1")
      .expect(401)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });

  test("/random it should return 404 if try to go down a route that is not correct", (done) => {
    request(app)
      .get("/random")
      .auth("sam", "123456")
      .expect(404)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
    done();
  });

  test("/ should return 200 and the index page if the auth is correct", (done) => {
    request(app)
      .get("/")
      .auth("sam", "123456")
      .expect(200)
      .expect((response) => {
        console.log(response);
      })
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        done();
      });
    done();
  });
});

/*
https://www.npmjs.com/package/supertest

https://medium.com/@juha.a.hytonen/testing-authenticated-requests-with-supertest-325ccf47c2bb

https://stackoverflow.com/questions/42490579/supertest-not-working-with-routes-that-call-render

https://github.com/visionmedia/supertest/issues/520

https://stackoverflow.com/questions/52840873/getting-500-internal-server-error-while-using-supertest


http://visionmedia.github.io/superagent/#authentication
*/
