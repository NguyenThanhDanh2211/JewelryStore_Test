class CartPage {
  weblocators = {
    cartIcon: '.cart-icon',
    addProductBtn: '#add-product-btn',
  };

  openProductDetail(slug) {
    cy.visit(`/shop/bracelets/${slug}`);
  }

  clickAddProduct() {
    cy.get(this.weblocators.addProductBtn).click();
  }

  openProductPage() {
    cy.visit('/shop');
  }

  addMultipleProduct(productIndexes) {
    productIndexes.forEach((index) => {
      cy.get(this.weblocators.cartIcon).eq(index).click();
      cy.contains(' has been added to the cart!').should('be.visible');
      cy.wait(4000);
    });
  }
}

export default new CartPage();
