class RegisterPage {
  elements = {
    authIcon: () => cy.get('#auth'),
    registerLink: () => cy.get('#register'),
    fullNameInput: () => cy.get('#name'),
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    registerButton: () => cy.get('#btn-register'),
  };

  openHomePage() {
    cy.visit('/');
  }

  clickAuthIcon() {
    this.elements.authIcon().click();
  }

  clickRegisterLink() {
    this.elements.registerLink().click();
  }

  enterFullName(fullName) {
    this.elements.fullNameInput().type(fullName);
  }

  enterEmail(email) {
    this.elements.emailInput().type(email);
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickRegisterButton() {
    this.elements.registerButton().click();
  }
}

export default new RegisterPage();
