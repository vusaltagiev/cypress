describe("basics", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("visit", () => {
    cy.url().then((url) => {
      cy.log(`print url: ${url}`);
      expect(url).to.contains("/diseases-symptoms/allergies");
    });
  });
  it("title validation", () => {
    cy.title().then((title) => {
      cy.log(title);
      expect(title).to.be.eq(
        "Din Sjuksköterska - Videoguider om sjukdomar och symtom | Legitimerad sjuksköterska"
      );
    });
  });
  it("span challenge", () => {
    cy.get("span.me-2 ");
  });
});
