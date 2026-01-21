describe("Download a file", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("VT")}`);
  });
  it("Not Broken Image Assertion", () => {
    cy.get(":nth-child(2) > .text-base").click();
  });
});
