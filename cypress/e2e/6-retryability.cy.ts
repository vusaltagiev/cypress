describe("Retry ability demo", () => {
  it("Visit whit delay", () => {
    cy.visit("/diseases-symptoms/allergies", { timeout: 500 });
  });
});
