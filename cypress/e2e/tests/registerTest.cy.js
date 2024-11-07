import homePage from '../../pages/homePage';
import loginPage from '../../pages/loginPage';
import registerPage from '../../pages/registerPage';
import registerData from '../../fixtures/registerData.json';

describe('Customer Registration Tests', () => {
  it('TC1: should allow registration with valid email and password', () => {
    homePage.openHomePage();
    homePage.openLoginPage();

    loginPage.clickRegisterLink();

    registerPage.enterFullName(registerData.fullName);
    registerPage.enterEmail(registerData.email);
    registerPage.enterPassword(registerData.password);

    registerPage.clickRegisterButton();

    cy.contains('Registration successful!').should('be.visible');
  });

  it('TC2: should not allow registration with an email that already exists', () => {
    homePage.openHomePage();
    homePage.openLoginPage();

    loginPage.clickRegisterLink();

    registerPage.enterFullName(registerData.fullName);
    registerPage.enterEmail(registerData.email);
    registerPage.enterPassword(registerData.password);

    registerPage.clickRegisterButton();

    cy.contains('User with given email already exist!').should('be.visible');
  });

  it('TC3: should show an error message when password is less than 6 characters', () => {
    homePage.openHomePage();
    homePage.openLoginPage();

    loginPage.clickRegisterLink();

    registerPage.enterFullName(registerData.fullName);
    registerPage.enterEmail(registerData.email);
    registerPage.enterPassword(registerData.errorPassword);

    registerPage.clickRegisterButton();

    cy.contains('Password must be at least 6 characters long.').should(
      'be.visible'
    );
  });
});
