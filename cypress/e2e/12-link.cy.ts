describe("Links", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}diseases-symptoms/allergies`);
    cy.get(".modal-footer > .btn").click();
  });
  it("First approach, not click on the link", () => {
    //   cy.get("button.btn.btn-primary.py-2.px-4").eq(0).click();
    cy.get("button.btn.btn-primary.py-2.px-4").first().click();
    cy.get(".modal-body")
      .find("a")
      .should(
        "have.attr",
        "href",
        "https://www.1177.se/Stockholm/undersokning-behandling/behandling-med-lakemedel/behandlingar-med-lakemedel/allergen-immunterapi/#vaccin-mot-pollen",
      );
    cy.get(".modal-body").find("a").should("have.attr", "target", "_blank");
  });
});
