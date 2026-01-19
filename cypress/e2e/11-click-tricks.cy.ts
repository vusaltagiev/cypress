describe("Demo", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("dinSSK")}`);
    cy.get(".modal-footer > .btn").click();
  });
  it("Double click", () => {
    cy.get(`div.swiper-button-next`).scrollIntoView().dblclick();
  });
  it("Right click", () => {
    cy.get(".about-img > .img-fluid").rightclick();
  });
});
