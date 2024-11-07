import homePage from '../../pages/homePage';
import loginPage from '../../pages/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Customer Login Tests', () => {
  it('TC4: should allow login with valid email and password', () => {
    homePage.openHomePage();
    homePage.openLoginPage();

    loginPage.enterEmail(loginData.validUser.email);
    loginPage.enterPassword(loginData.validUser.password);
    loginPage.clickLoginButton();
    cy.contains('Log in successful!').should('be.visible');
  });

  it('TC5: should show error for invalid email and password', () => {
    homePage.openHomePage();
    homePage.openLoginPage();

    loginPage.enterEmail(loginData.invalidUser.email);
    loginPage.enterPassword(loginData.invalidUser.password);
    loginPage.clickLoginButton();
    cy.contains('Invalid email or password').should('be.visible');
  });
  it('TC6: should show error for valid email but wrong password', () => {
    homePage.openHomePage();
    homePage.openLoginPage();

    loginPage.enterEmail(loginData.wrongPassword.email);
    loginPage.enterPassword(loginData.wrongPassword.password);
    loginPage.clickLoginButton();
    cy.contains('Invalid email or password').should('be.visible');
  });

  it('TC7: should show error for valid password but wrong email', () => {
    homePage.openHomePage();
    homePage.openLoginPage();

    loginPage.enterEmail(loginData.wrongEmail.email);
    loginPage.enterPassword(loginData.wrongEmail.password);
    loginPage.clickLoginButton();
    cy.contains('Invalid email or password').should('be.visible');
  });
});
