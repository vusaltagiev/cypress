describe("basics", () => {
  beforeEach(() => {
    cy.visit("textinput");
  });
  it("visit", () => {
    cy.visit("textinput");
  });
  it("visit", () => {
    cy.url().then((url) => {
      cy.log(`print url: ${url}`);
      expect(url).to.contains("textinput");
    });
  });
});
