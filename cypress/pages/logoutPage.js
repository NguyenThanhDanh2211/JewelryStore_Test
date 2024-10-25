class logoutPage {
  weblocators = {
    useIcon: '.user-icon',
    logoutIcon: '.logout-icon',
  };

  openHomePage() {
    cy.visit('/');
  }

  logout() {
    cy.get(this.weblocators.useIcon).click();
    cy.get(this.weblocators.logoutIcon).click();
  }

  verifyLoggedOut() {
    cy.url().should('include', '/login');
  }
}

export default new logoutPage();
