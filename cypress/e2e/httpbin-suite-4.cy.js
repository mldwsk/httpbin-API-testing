/// <reference types="cypress" />

describe("httpbin tests - suite 4", () => {
  // Suite 4 - Complex requests

  //Preparing data for test 10
  const requestGET = {
    method: "GET",
    url: "https://httpbin.org/get",
    failOnStatusCode: false,
  };
  // Test 10 - CHECK TIME of GET
  it("Tests if duration is shorter than 200ms", () => {
    cy.request(requestGET).then((response) => {
      assert.isTrue(response.duration <= 200);
    });
  });

  // Test 11 - POST randomized IDs
  it("Tests POST with randomized IDs", () => {
    for (let i = 0; i < 10; i++) {
      let randomID = Math.floor(Math.random() * 100);
      let requestWithID = {
        method: "GET",
        url: "https://httpbin.org/get",
        failOnStatusCode: false,
        body: {
            id: randomID
        }
      }
      cy.request(requestWithID).then((response) => {
        assert.equal(200, response.status);
      });
    }
  });
  //Preparing data for test 12
  let testNumber;
  let testString;
  function getRandomInt(maximumValue) {
    testNumber = Math.floor(Math.random() * maximumValue);
    return testNumber;
  }
  function getRandomString(stringLength) {
    testString = "";
    for (let i = 0; i < stringLength; i++) {
      testString = testString.concat(
        String.fromCharCode(getRandomInt(26) + 64)
      );
    }
    return testString;
  }
  const bodyData = {
    randomNumber: getRandomInt(1000),
    randomString: getRandomString(10),
  };
  const randomizedPost = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
    body: bodyData,
  };
  // Test 12 - Randomized complex POST
  it("Tests POST with randomized string and integer data", () => {
    cy.request(randomizedPost).then((response) => {
      assert.equal(200, response.status);
    });
  });
  //Preparing data for test 13
  const requestCookie = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      Cookie: "cookieName=cookieValue",
    },
    failOnStatusCode: false,
  };
  // Test 13 - cookies
  it("Tests sending a cookie", () => {
    cy.request(requestCookie).then((response) => {
      assert.equal(200, response.status);
      assert.equal("cookieName=cookieValue", response.requestHeaders["Cookie"]);
    });
  });
});
