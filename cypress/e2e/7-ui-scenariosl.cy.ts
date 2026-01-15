describe.skip("Click challenge", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("class assertion", () => {
    cy.get(`div[class='modal fade drawer-modal']`)
      .should("have.class", "modal drawer-modal")
      .should("have.class", "fade");
  });
});

describe("Hover challenge", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("hover with real hover elements", () => {
    cy.get(".nav > :nth-child(2) > .btn").trigger("mouseover");
  });
  it("hover with real hover elements", () => {
    cy.get(".nav > :nth-child(2) > .btn").realHover;
  });
});
