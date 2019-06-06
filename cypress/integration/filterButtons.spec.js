context("Filter buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/");

    cy.get("#filtersWrapper")
      .find(".sizeFilter")
      .as("filterButtons");
  });

  it("contains correct filter size buttons", () => {
    cy.get("@filterButtons").each((filterButton, index) => {
      cy.wrap(filterButton).should("have.text", `${index + 1}`);
    });
  });

  it("filter size can be selected", () => {
    cy.get("@filterButtons")
      .first()
      .click()
      .should("have.class", "clickedButton");
  });

  it("filter size can be selected then unselected", () => {
    cy.get("@filterButtons")
      .first()
      .click()
      .should("have.class", "clickedButton")
      .click()
      .should("not.have.class", "clickedButton");
  });

  it("multiple filters sizes can be selected", () => {
    cy.get("@filterButtons")
      .first()
      .click()
      .should("have.class", "clickedButton");

    cy.get("@filterButtons")
      .last()
      .click()
      .should("have.class", "clickedButton");
  });
});
