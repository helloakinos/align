/**********************************************
 * Jest Testing
 * ==================================
 ***********************************************/
/** #
 * Create a new project, npm init, install Jest as a development dependency, 
 * add a spec.test.js file to your directory.
This is a continuing exercise from A, 
create one describe block and five test specifications in it. 
The first 4 specification tests should pass with the text 
‘I am in the test block <number>’, you can console.log within 
the test blocks and the final one should call and error, I am the test block <number> but I fail.  #
/*  ====================== */
/**  */
describe("testing the test suite Jest", function () {
  test("I am in the test block 1", function () {
    console.log("I am the test Block one: reporting in");
  });
  test("I am in the test block 2", function () {
    console.log("I am the test Block two: reporting in");
  });
  test("I am in the test block 3", function () {
    console.log("I am the test Block three: reporting in");
  });
  test("I am in the test block 4", function () {
    console.log("I am the test Block four: reporting in");
  });
  test("Supposed to fail - I am in the test block 5", function () {
    console.log("I am the test Block five but I fail");
    throw new Error();
  });
});
