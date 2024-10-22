class loginPage {
  weblocators = {
    authIcon: '#auth',
    email: '#email',
    password: '#password',
    loginBtn: '#btn-login',
  };

  openHomePage() {
    cy.visit('/');
  }

  clickAuthIcon() {
    cy.get(this.weblocators.authIcon).click();
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).type(email);
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).type(password);
  }

  clickLoginButton() {
    cy.get(this.weblocators.loginBtn).click();
  }
}

export default new loginPage();
