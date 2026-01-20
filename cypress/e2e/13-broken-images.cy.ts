describe("Links", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}diseases-symptoms/allergies`);
    cy.get(".modal-footer > .btn").click();
  });
  it("Not Broken Image Assertion", () => {
    cy.get(
      'div > img[src="https://www.dinsskcms.vusaltagiev.se/media/hapdxa3c/allergy-sufferers.jpg"]',
    )
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});
