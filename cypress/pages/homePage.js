class HomePage {
  element = {
    authIcon: () => cy.get('#auth'),
    searchIcon: () => cy.get('#search-icon'),
    userIcon: () => cy.get('.user-icon'),
    cartIcon: () => cy.get('#cart-icon'),
    checkoutBtn: () => cy.get('#checkout-btn'),
  };

  openHomePage() {
    cy.visit('/');
  }

  clickSearchIcon() {
    this.element.searchIcon().click();
  }

  clickBtnCheckout() {
    this.element.checkoutBtn().click();
  }

  openCartDrawer() {
    this.element.cartIcon().click();
  }

  openLoginPage() {
    this.element.authIcon().click();
  }

  openMenuUser() {
    this.element.userIcon().click();
  }
}

export default new HomePage();
