import registerPage from '../../pages/registerPage';
import registerData from '../../fixtures/authData.json';

describe('Test Register Functionality', () => {
  it('should allow user to register a new account', () => {
    registerPage.openHomePage();

    registerPage.clickAuthIcon();

    registerPage.clickRegisterLink();

    registerPage.enterFullName(registerData.fullName);
    registerPage.enterEmail(registerData.email);
    registerPage.enterPassword(registerData.password);

    registerPage.clickRegisterButton();

    cy.contains('Registration successful!').should('be.visible');
  });
});
