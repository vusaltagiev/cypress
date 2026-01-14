Cypress.config("defaultCommandTimeout", 15000);
describe("Retry ability demo", () => {
  it("Visit whit delay", () => {
    cy.visit("/diseases-symptoms/allergies", { timeout: 1000 });
  });
  it("Client delay button", () => {
    cy.visit("/diseases-symptoms/allergies");
    cy.get(
      ".modal.show > .modal-dialog > .modal-content > .modal-footer > .btn"
    ).click();
  });
});
