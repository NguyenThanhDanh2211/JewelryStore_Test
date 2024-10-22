import registerPage from '../../pages/registerPage';
import registerData from '../../fixtures/authData.json';

describe('Customer Registration Tests', () => {
  it('should allow registration with valid email and password', () => {
    registerPage.openHomePage();

    registerPage.clickAuthIcon();

    registerPage.clickRegisterLink();

    registerPage.enterFullName(registerData.fullName);
    registerPage.enterEmail(registerData.email);
    registerPage.enterPassword(registerData.password);

    registerPage.clickRegisterButton();

    cy.contains('Registration successful!').should('be.visible');
  });

  it('should not allow registration with an email that already exists', () => {
    registerPage.openHomePage();

    registerPage.clickAuthIcon();

    registerPage.clickRegisterLink();

    registerPage.enterFullName(registerData.fullName);
    registerPage.enterEmail(registerData.email);
    registerPage.enterPassword(registerData.password);

    registerPage.clickRegisterButton();

    cy.contains('User with given email already exist!').should('be.visible');
  });

  it.only('should show an error message when password is less than 6 characters', () => {
    registerPage.openHomePage();

    registerPage.clickAuthIcon();

    registerPage.clickRegisterLink();

    registerPage.enterFullName(registerData.fullName);
    registerPage.enterEmail(registerData.email);
    registerPage.enterPassword(registerData.errorPassword);

    registerPage.clickRegisterButton();

    cy.contains('Password must be at least 6 characters long.').should(
      'be.visible'
    );
  });
});
