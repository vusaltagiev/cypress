describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("Cy.Contains ex", () => {
    cy.contains("Mer information").should("contain", "Mer information");
  });

  it("Cy.get + cy.find ex", () => {
    cy.get("div").find("button").should("contain", "Mer information");
  });
  it("Css selector using an attribute", () => {
    cy.get('button[class="btn btn-primary py-2 px-4"]').should(
      "contain",
      "Mer information"
    );
  });
  it("Css selector using a class", () => {
    cy.get(".btn-primary.py-2.px-4").should("contain", "Mer information");
  });
});
