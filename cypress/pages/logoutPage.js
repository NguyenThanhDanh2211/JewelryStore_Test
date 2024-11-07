class LogoutPage {
  elements = {
    userIcon: () => cy.get('.user-icon'),
    logoutIcon: () => cy.get('.logout-icon'),
  };

  logout() {
    this.elements.userIcon().click();
    this.elements.logoutIcon().click();
  }

  verifyLoggedOut() {
    cy.url().should('include', '/login');
  }
}

export default new LogoutPage();
