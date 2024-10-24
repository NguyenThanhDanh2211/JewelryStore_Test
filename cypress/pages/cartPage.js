class cartPage {
  weblocators = {
    card: '.product-item-card',
    cartIcon: '.cart-icon',
    removeBtn: '.remove-product',
    increaseQuantityButton: (productName) =>
      `.product-row[data-product="${productName}"] .increase-qty`,
    decreaseQuantityButton: (productName) =>
      `.product-row[data-product="${productName}"] .decrease-qty`,
    productQuantity: '.product-quantity',
    totalPrice: '.total-price',
    productRow: (productName) => `.product-row[data-product="${productName}"]`,
  };

  openCartPage() {
    cy.visit('/cart');
  }

  addProductToCart(productName) {
    cy.visit('/shop');
    cy.get(this.weblocators.card)
      .contains(productName)
      .find(this.weblocators.cartIcon)
      .click();
    cy.contains(`${productName} has been added to the cart!`).should(
      'be.visible'
    );
  }

  increaseProductQuantity(productName, increaseBy) {
    for (let i = 0; i < increaseBy; i++) {
      cy.get(this.weblocators.increaseQuantityButton(productName)).click({
        force: true,
      });
    }

    cy.get(this.weblocators.productRow(productName))
      .find(this.weblocators.productQuantity)
      .should('have.text', `${increaseBy}`);
  }

  verifyProductQuantity(productName, expectedQuantity) {
    cy.get(this.weblocators.productRow(productName))
      .find(this.weblocators.productQuantity)
      .should('be.visible')
      .invoke('text')
      .then((quantityText) => {
        const quantity = quantityText.trim();
        expect(quantity).to.eq(`${expectedQuantity}`);
      });
  }

  setProductQuantity(productName, quantity) {
    cy.get(this.weblocators.productRow(productName))
      .find(this.weblocators.productQuantity)
      .clear()
      .type(quantity);
  }

  decreaseProductQuantity(productName, decreaseBy) {
    for (let i = 0; i < decreaseBy; i++) {
      cy.get(this.weblocators.decreaseQuantityButton(productName)).click({
        force: true,
      });
    }

    cy.get(this.weblocators.productRow(productName))
      .find(this.weblocators.productQuantity)
      .should('have.text', `${decreaseBy}`);
  }

  removeProductFromCart(productName) {
    cy.get(this.weblocators.productRow(productName))
      .find(this.weblocators.removeBtn)
      .click();

    cy.get(this.weblocators.productRow(productName)).should('not.exist');
  }

  verifyProductNotInCart(productName) {
    cy.get(this.weblocators.productRow(productName)).should('not.exist');
  }
}

export default new cartPage();
