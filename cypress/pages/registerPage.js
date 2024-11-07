class RegisterPage {
  elements = {
    fullNameInput: () => cy.get('#name'),
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    registerButton: () => cy.get('#btn-register'),
  };

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
