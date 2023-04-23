/// <reference types="cypress" />

describe("httpbin tests - suite 3", () => {
  //Preparing data
  const requestMyHeader = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      myHeader: "myValue",
    },
    failOnStatusCode: false,
  };
  const requestStandardUserAgent = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "User-agent":
        "Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion",
    },
    failOnStatusCode: false,
  };
  const requestMyUserAgent = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "User-agent": "My UserAgent",
    },
    failOnStatusCode: false,
  };

  // Suite 3 - HEADERS, USER AGENT
  // Test 7 - Custom HEADER
  it("Tests if header is set correctly", () => {
    cy.request(requestMyHeader).then((response) => {
      assert.equal(200, response.status);
      assert.equal("myValue", response.requestHeaders.myHeader); // Checking if the headers value is set to a custom header
    });
  });

  // Test 8 - Standard USER AGENT (Mozilla)
  it("Test if USER AGENT is set to custom value", () => {
    cy.request(requestStandardUserAgent).then((response) => {
      assert.equal(200, response.status);
      assert.equal("Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion", response.requestHeaders["User-agent"]); // Checking if the UserAgent value is set to a custom value
    });
  });

  // Test 9 - Custom USER AGENT
  it("Test if USER AGENT is set to custom value", () => {
    cy.request(requestMyUserAgent).then((response) => {
      assert.equal(200, response.status);
      assert.equal("My UserAgent", response.requestHeaders["User-agent"]); // Checking if the UserAgent value is set to a custom value
    });
  });
});
