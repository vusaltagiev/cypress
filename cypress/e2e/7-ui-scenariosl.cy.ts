describe.skip("Click challenge", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("class assertion", () => {
    cy.get(`div[class='modal fade drawer-modal']`)
      .should("have.class", "modal drawer-modal")
      .should("have.class", "fade");
  });
});

describe.skip("Hover challenge", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("hover with real hover elements", () => {
    cy.get(".nav > :nth-child(2) > .btn").trigger("mouseover");
  });
  it("hover with real hover elements", () => {
    cy.get(".nav > :nth-child(2) > .btn").realHover;
  });
});

describe.skip("Hover challenge", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("hover with real hover elements", () => {
    cy.get(".nav > :nth-child(2) > .btn").trigger("mouseover");
  });
  it("hover with real hover elements", () => {
    cy.get(".nav > :nth-child(2) > .btn").realHover;
  });
});

describe("Dynamic table challenge", () => {
  beforeEach(() => {
    cy.visit("/diseases-symptoms/allergies");
  });
  it("Chrome CPU Test", () => {
    cy.get(":nth-child(1) > .property-item > .p-4").each(($button) => {
      if ($button.text().includes("Mer information")) {
        cy.log(`I have found the ${$button.text()} row!`);
        let chromeRowValues: string[] = [];
        chromeRowValues.push($button.next().text());
        chromeRowValues.push($button.next().next().text());
        chromeRowValues.push($button.next().next().next().text());
        chromeRowValues.push($button.next().next().next().next().text());
        cy.log("Chrome row values", chromeRowValues);
        chromeRowValues.forEach((chromeValue) => {
          if (chromeValue.includes("%")) {
            cy.log(chromeValue);
            cy.get(".bg-warning").should(
              "have.text",
              `Mer information: ${chromeValue}`
            );
          }
        });
      }
    });
  });
});
