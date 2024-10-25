class CartPage {
  elements = {
    cartIcon: () => cy.get('.cart-icon'),
    addProductBtn: () => cy.get('#add-product-btn'),
  };

  openProductDetail(slug) {
    cy.visit(`/shop/bracelets/${slug}`);
  }

  clickAddProduct() {
    this.elements.addProductBtn().click();
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

export default new CartPage();
