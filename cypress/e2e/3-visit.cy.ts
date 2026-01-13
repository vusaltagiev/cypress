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
    cy.get("input.form-control").type("feber");
    cy.get(
      "button.btn.border-0.icon-link.d-flex.align-items-center.gap-2"
    ).click();
    cy.get(
      "button.btn.border-0.icon-link.d-flex.align-items-center.gap-2"
    ).should("have.text", "Sök");
  });
});
