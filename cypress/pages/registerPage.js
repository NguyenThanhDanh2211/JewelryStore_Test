class registerPage {
  weblocators = {
    authIcon: '#auth',
    register: '#register',
    fullName: '#name',
    email: '#email',
    password: '#password',
    registerBtn: '#btn-register',
  };

  openHomePage() {
    cy.visit('/');
  }

  clickAuthIcon() {
    cy.get(this.weblocators.authIcon).click();
  }

  clickRegisterLink() {
    cy.get(this.weblocators.register).click();
  }

  enterFullName(fullName) {
    cy.get(this.weblocators.fullName).type(fullName);
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).type(email);
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).type(password);
  }

  clickRegisterButton() {
    cy.get(this.weblocators.registerBtn).click();
  }
}

export default new registerPage();
