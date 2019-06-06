context("Cart", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("http://localhost:3002/");

    cy.get(".productsWrapper")
      .find(".singleProduct")
      .as("productPanes");
  });

  it("Product is not added to cart when size is not selected", () => {
    cy.get("@productPanes")
      .first()
      .find(".addProduct")
      .click();

    cy.get(".cartIcon").trigger("mouseover");

    cy.get(".addItemToCart").should("have.text", "Add item to cart!");
  });

  it("Product is added to cart with chosen size", () => {
    cy.get("@productPanes")
      .find(".sizes button")
      .first()
      .click();

    cy.get("@productPanes")
      .first()
      .find(".addProduct")
      .click();

    cy.get(".cartIcon").trigger("mouseover");

    cy.get(".addItemToCart").should("not.have.text", "Add item to cart!");
    cy.fixture("productInformations").then(({ productInformations }) => {
      cy.get(".cartItemName").should("have.text", productInformations[0].name);
      cy.get(".cartItemPrice").should(
        "have.text",
        `${productInformations[0].price} zł`
      );
      cy.get(".cartItemSize").should("have.text", "chosen size: 1");
    });
  });

  it("Product is added to cart then can be removed", () => {
    cy.get("@productPanes")
      .find(".sizes button")
      .last()
      .click();

    cy.get("@productPanes")
      .last()
      .find(".addProduct")
      .click();

    cy.get(".cartIcon").trigger("mouseover");

    cy.get(".addItemToCart").should("not.have.text", "Add item to cart!");
    cy.get(".cartItemName").should("have.text", "nike 12");
    cy.get(".cartItemPrice").should("have.text", "743 zł");
    cy.get(".cartItemSize").should("have.text", "chosen size: 4");

    cy.get(".removeItem").click();

    cy.get(".addItemToCart").should("have.text", "Add item to cart!");
  });
  it("Multiple items can be added then buy button clears cart", () => {
    cy.get("@productPanes")
      .find(".sizes button")
      .last()
      .click();

    cy.get("@productPanes")
      .last()
      .find(".addProduct")
      .click();

    cy.get("@productPanes")
      .find(".sizes button")
      .first()
      .click();

    cy.get("@productPanes")
      .first()
      .find(".addProduct")
      .click();

    cy.get(".cartIcon").trigger("mouseover");

    cy.get(".addItemToCart").should("not.have.text", "Add item to cart!");
    cy.get(".cartItemName").should("have.length", 2);
    cy.get(".cartItemPrice").should("have.length", 2);
    cy.get(".cartItemSize").should("have.length", 2);

    cy.get(".buyButton").click();

    cy.get(".addItemToCart").should("have.text", "Add item to cart!");
  });
});
