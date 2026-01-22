describe("19-autocomplete.cy", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}kontakt-samarbete/tipsa-oss`);
    cy.get(".modal-footer > .btn").click();
  });
  it("Autocomplete demo", () => {
    cy.get("#firstName").type("y");
  });
  // id = "firstName";
});
