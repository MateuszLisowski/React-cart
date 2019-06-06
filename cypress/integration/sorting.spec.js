context("Sorting by prices", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/");

    cy.get("#filtersWrapper")
      .find("select")
      .as("select");
  });

  it("'Descending' can be selected and display correct label", () => {
    cy.get("@select")
      .select("Descending")
      .should("have.value", "Descending");
  });

  it("'Descending' then 'Ascending' can be selected and display correct labels", () => {
    cy.get("@select")
      .select("Descending")
      .should("have.value", "Descending");

    cy.get("@select")
      .select("Ascending")
      .should("have.value", "Ascending");
  });

  it("'Descending' filtering correctly", () => {
    cy.fixture("productInformations").then(({ productInformations }) => {
      cy.get("@select").select("Descending");

      cy.get(".productsWrapper")
        .find(".singleProduct .productPrice")
        .each((product, index) => {
          cy.wrap(product).should("have.text", `${productInformations[11 - index].price} zł`);
        });
    });
  });

  it("'Ascending' filtering correctly", () => {
    cy.fixture("productInformations").then(({ productInformations }) => {
      cy.get("@select").select("Ascending");

      cy.get(".productsWrapper")
        .find(".singleProduct .productPrice")
        .each((product, index) => {
          cy.wrap(product).should("have.text", `${productInformations[index].price} zł`);
        });
    });
  });
});
