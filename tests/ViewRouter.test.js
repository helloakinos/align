/**********************************************
 * Note Router Test
 * ==================================
 * The purpose of this class is to test the routes, and how that interacts with the database.
 ***********************************************/
const Router = require("../Routers/ViewRouter");

let noteService;
let response;
let router;

/**********************************************
 * Before each test, we should mock the list, add, remove and update function. It will always return true.
 * ==================================
 ***********************************************/
describe("Test the ViewRouter", () => {
  beforeEach(() => {
    noteService = {
      list: jest.fn().mockResolvedValue(true),
      add: jest.fn().mockResolvedValue(true),
      remove: jest.fn().mockResolvedValue(true),
      update: jest.fn().mockResolvedValue(true),
    };
    router = new Router(noteService);

    response = {
      status: jest.fn().mockResolvedValue(200),
      json: () => {
        return "Error?";
      },
    };
  });

  /**********************************************
   * The note route should call in response to request
   * ==================================
   ***********************************************/

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

  /**********************************************
   * The router should be able to call the post method
   * ==================================
   ***********************************************/
  test("the note router should call add in response to a POST", (done) => {
    Router
      .post(
        {
          auth: {
            user: "sam",
          },
          body: {
            note: "test",
          },
        },
        response
      )
      .then(() => {
        expect(noteService.add).toHaveBeenCalledWith("test", "sam");
        expect(noteService.list).toHaveBeenCalledWith("sam");
        expect(response.status).not.toHaveBeenCalled();
        done();
      })
      .catch((error) => {
        if (error) {
          console.log(error);
          throw new Error(error);
        }
      });
  });

  test("the note router should call update in response to a PUT", (done) => {
    Router
      .put(
        {
          auth: {
            user: "sam",
          },
          body: {
            note: "testing",
          },
          params: {
            id: 0,
          },
        },
        response
      )
      .then(() => {
        expect(noteService.update).toHaveBeenCalledWith(0, "testing", "sam");
        expect(noteService.list).toHaveBeenCalledWith("sam");
        expect(response.status).not.toHaveBeenCalled();
        done();
      });
  });

  test("the note router should call remove in response to a DELETE", (done) => {
    Router
      .delete(
        {
          auth: {
            user: "sam",
          },

          params: {
            id: 0,
          },
        },
        response
      )
      .then(() => {
        expect(noteService.remove).toHaveBeenCalledWith(0, "sam");
        expect(noteService.list).toHaveBeenCalledWith("sam");
        expect(response.status).not.toHaveBeenCalled();
        done();
      });
  });
});