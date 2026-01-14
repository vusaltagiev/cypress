describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("how to find a element by its text", () => {
    cy.xpath(`//*[text()='Allergier']`).should("contain.text", "Allergier");
  });
  it("find an element by its attribute using xpath", () => {
    cy.xpath(`//h1[@class='mb-3']`).should("contain.text", "Videoklipp");
  });
  it("find by class", () => {
    cy.xpath(`//button[@class='btn btn-primary py-2 px-4']`).should(
      "have.css",
      "background-color",
      "rgb(0, 102, 188)"
    );
  });
});
