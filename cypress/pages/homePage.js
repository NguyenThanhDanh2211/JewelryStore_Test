class HomePage {
  element = {
    authIcon: () => cy.get('#auth'),
    searchIcon: () => cy.get('#search-icon'),
    userIcon: () => cy.get('.user-icon'),
  };

  openHomePage() {
    cy.visit('/');
  }

  clickSearchIcon() {
    this.element.searchIcon().click();
  }

  openLoginPage() {
    this.element.authIcon().click();
  }

  openMenuUser() {
    this.element.userIcon().click();
  }
}

export default new HomePage();
