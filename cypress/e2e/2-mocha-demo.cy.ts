describe("template spec", () => {
  before(() => {
    cy.log("hello world before");
  });
  after(() => {
    cy.log("hello word after");
  });
  beforeEach(() => {
    cy.log(" before test");
  });
  afterEach(() => {
    cy.log("after test");
  });
  it("testcase 1", () => {
    cy.log("hello world 1");
  });
  it.skip("testcase 2", () => {
    cy.log("hello world 2");
  });
  it.only("testcase 2", () => {
    cy.log("hello world 2");
  });
  it("testcase 3", () => {
    cy.log("hello world 3");
  });
});
