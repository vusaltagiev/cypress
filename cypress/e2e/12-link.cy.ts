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
    // cy.get(".modal-body").find("a").should("have.attr", "target", "_blank");
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
    cy.get(".modal-body").find("a").invoke("removeAttr", "target", "_blank");
    // cy.url().then((url) => {
    //   expect(url).to.be.equal(
    //     "https://www.1177.se/Stockholm/undersokning-behandling/behandling-med-lakemedel/behandlingar-med-lakemedel/allergen-immunterapi/#vaccin-mot-pollen",
    //   );
    // });
  });
  it("First approach, not click on the link", () => {
    cy.get("button.btn.btn-primary.py-2.px-4").first().click();
    cy.get(".modal-body")
      .find("a")
      .should(
        "have.attr",
        "href",
        "https://www.1177.se/Stockholm/undersokning-behandling/behandling-med-lakemedel/behandlingar-med-lakemedel/allergen-immunterapi/#vaccin-mot-pollen",
      );
    cy.get(".modal-body").find("a").invoke("removeAttr", "target", "_blank");
    cy.intercept("GET");
  });
});

describe.only("Links", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}diseases-symptoms/allergies`);
    cy.get(".modal-footer > .btn").click();
    cy.intercept(
      "GET",
      `https://www.1177.se/Stockholm/undersokning-behandling/behandling-med-lakemedel/behandlingar-med-lakemedel/allergen-immunterapi/#vaccin-mot-pollen`,
    ).as("linkStatus");
  });
  it("First approach, not click on the link", () => {
    cy.get("button.btn.btn-primary.py-2.px-4").first().click();

    cy.get(".modal-body")
      .find("a")
      .should(
        "have.attr",
        "href",
        "https://www.1177.se/Stockholm/undersokning-behandling/behandling-med-lakemedel/behandlingar-med-lakemedel/allergen-immunterapi/#vaccin-mot-pollen",
      );
    // .intercept("GET");
    cy.wait("@linkStatus").then((request) => {
      cy.log("This is the request", request);
      expect(request.response?.statusCode).to.be.equal(200);
    });
  });
});
