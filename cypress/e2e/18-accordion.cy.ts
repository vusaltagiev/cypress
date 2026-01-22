describe("accordion", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}support-info/vanliga-fragor-faq`);
    cy.get(".modal-footer > .btn").click();
  });
  it("Default Accordion validation example", () => {
    cy.get(".accordion-header").click();
    //Checking if the first descriptions was hidden correctly
    cy.get(".accordion-header").next().should("have.css", "display", "none");
    //Checking if the second description is displayed
    cy.get(".accordion-header")
      .next()
      .should("have.css", "display", "block")
      .and("have.class", "show");
  });
});
