describe("Download a file", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("VT")}`);
  });
  it("Download file test", () => {
    cy.get("div > .text-base.text-white.hover\\:text-gray-200")

      .eq(1)
      .click({ force: true });
    cy.verifyDownload("Vüsal_Alexander_Tagiev_CV.pdf");
  });
});
