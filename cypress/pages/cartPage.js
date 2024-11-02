class CartPage {
  elements = {
    card: () => cy.get('.product-item-card'),
    cartIcon: () => cy.get('.cart-icon'),
    removeBtn: () => cy.get('.remove-product'),
    increaseQuantityButton: (productName) =>
      cy.get(`.product-row[data-product="${productName}"] .increase-qty`),
    decreaseQuantityButton: (productName) =>
      cy.get(`.product-row[data-product="${productName}"] .decrease-qty`),
    productQuantity: () => cy.get('.product-quantity'),
    totalPrice: () => cy.get('.total-price'),
    productRow: (productName) =>
      cy.get(`.product-row[data-product="${productName}"]`),
  };

  openCartPage() {
    cy.visit('/cart');
  }

  addProductToCart(productName) {
    cy.visit('/shop');
    this.elements.card().contains(productName).find('.cart-icon').click();
    cy.contains(`${productName} has been added to the cart!`).should(
      'be.visible'
    );
  }

  increaseProductQuantity(productName, increaseBy) {
    for (let i = 0; i < increaseBy; i++) {
      this.elements.increaseQuantityButton(productName).click({ force: true });
    }

    this.elements
      .productRow(productName)
      .find('.product-quantity')
      .should('have.text', `${increaseBy}`);
  }

  verifyProductQuantity(productName, expectedQuantity) {
    this.elements
      .productRow(productName)
      .find('.product-quantity')
      .should('be.visible')
      .invoke('text')
      .then((quantityText) => {
        const quantity = quantityText.trim();
        expect(quantity).to.eq(`${expectedQuantity}`);
      });
  }

  setProductQuantity(productName, quantity) {
    this.elements
      .productRow(productName)
      .find('.product-quantity')
      .clear()
      .type(quantity);
  }

  decreaseProductQuantity(productName, decreaseBy) {
    for (let i = 0; i < decreaseBy; i++) {
      this.elements.decreaseQuantityButton(productName).click({ force: true });
    }

    this.elements
      .productRow(productName)
      .find('.product-quantity')
      .should('have.text', `${decreaseBy}`);
  }

  removeProductFromCart(productName) {
    this.elements.productRow(productName).find('.remove-product').click();

    this.elements.productRow(productName).should('not.exist');
  }

  verifyProductNotInCart(productName) {
    this.elements.productRow(productName).should('not.exist');
  }
}

export default new CartPage();
