describe("Click challenge", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("class assertion", () => {
    cy.get(`div[class='modal fade drawer-modal']`)
      .should("have.class", "modal drawer-modal")
      .should("have.class", "fade");
  });
});
