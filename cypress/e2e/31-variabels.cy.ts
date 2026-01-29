let externalVariable: string = "test";
describe("dinSSK", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}diseases-symptoms/allergies`);
    cy.get(".modal-footer > .btn").click();
  });
  it("Find by text", function () {
    cy.contains("button", "Mer information")
      .invoke("text")
      .then((text) => {
        externalVariable = text;
        cy.wrap(externalVariable).as("textFromContains");
        cy.log(externalVariable);
      });
    cy.get("@textFromContains").then((text) => {
      cy.log("this is the contains text outside the closure:" + text);
    });
  });
  it("Sharing context by Alias", function () {
    externalVariable = this.textFromContains;
    cy.log(externalVariable);
  });
});
