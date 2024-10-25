class LoginPage {
  elements = {
    authIcon: () => cy.get('#auth'),
    email: () => cy.get('#email'),
    password: () => cy.get('#password'),
    loginBtn: () => cy.get('#btn-login'),
  };

  openHomePage() {
    cy.visit('/');
  }

  clickAuthIcon() {
    this.elements.authIcon().click();
  }

  enterEmail(email) {
    this.elements.email().type(email);
  }

  enterPassword(password) {
    this.elements.password().type(password);
  }

  clickLoginButton() {
    this.elements.loginBtn().click();
  }
}

export default new LoginPage();
