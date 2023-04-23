/// <reference types="cypress" />

describe("httpbin tests - suite 2", () => {
  // Suite 2 - negative path
  
  //Preparing data for test 5
  const requestFalsePOST = {
    method: 'POST',
    url: 'https://httpbin.org/get',
    failOnStatusCode: false
  };
  // Test 5 - POST instead of GET
  it("Sends POST request to GET endpoint", () => {
    cy.request(requestFalsePOST).then((response) => {
        assert.equal(405, response.status); // code should be 405
      });
  });
  
  //Preparing data for test 6
  const requestFalseDelete = {
    method: 'POST',
    url: 'https://httpbin.org/get',
    failOnStatusCode: false
  };
  // Test 6 - DELETE on GET endpoint
  it("Sends DELETE request to GET endpoint", () => {
    cy.request(requestFalseDelete).then((response) => {
        assert.equal(405, response.status); // code should be 405
      });
  });
});