class loginPage {
  elements = {
    email: () => cy.get('#email'),
    password: () => cy.get('#password'),
    loginBtn: () => cy.get('#btn-login'),
    registerLink: () => cy.get('#register'),
    message: () => cy.get('.message'),
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

  verifyLoginMessage(expectedMessage) {
    this.elements
      .message()
      .invoke('text')
      .then((actualMessage) => {
        expect(actualMessage.trim()).to.eq(expectedMessage);
      });
  }
}

export default new loginPage();
