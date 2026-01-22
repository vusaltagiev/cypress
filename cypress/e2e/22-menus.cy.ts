describe("Menus hover", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}diseases-symptoms/infections`);
    cy.get(".modal-footer > .btn").click();
  });
  it("Menus Button hover", () => {
    cy.get("[data-bs-toggle=dropdown]");
    cy.get("a").contains("Infektioner").realHover();
  });
});
