class loginPage {
  elements = {
    email: () => cy.get('#email'),
    password: () => cy.get('#password'),
    loginBtn: () => cy.get('#btn-login'),
    registerLink: () => cy.get('#register'),
  };

  clickRegisterLink() {
    this.elements.registerLink().click();
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

export default new loginPage();
