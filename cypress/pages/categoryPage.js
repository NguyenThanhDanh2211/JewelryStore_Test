class CategoryPage {
  elements = {
    cartIcon: () => cy.get('.cart-icon'),
  };

  openProductDetail(slug) {
    cy.visit(`/shop/bracelets/${slug}`);
  }

  verifyAddProduct(product) {
    cy.contains(`${product} has been added to the cart!`).should('be.visible');
  }

  openProductPage() {
    cy.visit('/shop');
  }

  addMultipleProduct(productIndexes) {
    productIndexes.forEach((index) => {
      this.elements.cartIcon().eq(index).click();
      cy.contains(' has been added to the cart!').should('be.visible');
      cy.wait(4000);
    });
  }
}

export default new CategoryPage();
