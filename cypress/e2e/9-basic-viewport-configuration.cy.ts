describe("cy.viewport() demo", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}diseases-symptoms/allergies`);
    cy.viewport("iphone-6");
  });
  it("device name", () => {
    cy.viewport("iphone-7");
  });
  it("specific viewport", () => {
    cy.viewport(500, 700);
  });
});
