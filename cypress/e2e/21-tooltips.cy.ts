describe("Tooltips describe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}diseases-symptoms/infections`);
    cy.get(".modal-footer > .btn").click();
  });
  it("Tooltips Button", () => {
    cy.get(".text-truncate").eq(2).realHover();
    cy.get("[data-bs-toggle=tooltip]");
    cy.get(".text-truncate")
      .eq(2)
      .should("have.text", "Så här lindrar du influensan");
  });
});
data-bs-toggle="dropdown"