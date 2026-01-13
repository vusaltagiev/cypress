describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("Cy.Contains ex", () => {
    cy.contains("Mer information").should("contain", "Mer information");
  });
});
