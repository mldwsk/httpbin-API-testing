/// <reference types="cypress" />


describe("httpbin tests - suite 1", () => {
  //Suite 1 - happy path testing (GET, POST, DELETE)
  //Preparing data for test 1
  const requestGET = {
    url: "https://httpbin.org/get",
    failOnStatusCode: false,
  };
  //Test 1 - Basic GET, response 200
  it("Tests basic GET", () => {
    cy.request(requestGET).then((response) => {
      assert.equal(200, response.status); // response code should be 200
    });
  });
   //Preparing data for test 2
   const requestPOST = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    failOnStatusCode: false
  };
  // Test 2 - Basic POST
  it("Tests basic POST", () => {
    cy.request(requestPOST).then((response) => {
      assert.equal(200, response.status); // response code should be 200
    });
  });
   //Preparing data for test 3
   const bodyData = {
    bodyKey: "bodyValue"
  };
  const requestPOSTWithBody = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    body: bodyData,
    failOnStatusCode: false
  };
  // Test 3 - Complex POST
  it("Tests complex POST (with body)", () => {
    cy.request(requestPOSTWithBody).then((response) => {
      assert.equal(200, response.status);
      assert.notStrictEqual(bodyData, response.body.data);
    });
  });

   //Preparing data for test 4
   const requestDELETE = {
    method: 'DELETE',
    url: 'https://httpbin.org/delete',
    body: bodyData,
    failOnStatusCode: false
  };
  // Test 4 - DELETE
  it("Tests DELETE", () => {
    cy.request(requestDELETE).then((response) => {
      assert.equal(200, response.status);
    }); 
  });
});