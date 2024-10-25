import logoutPage from '../../pages/logoutPage';
import loginData from '../../fixtures/loginData.json';

describe('Logout Functionality Tests', () => {
  before(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
    logoutPage.openHomePage();
  });

  it('should log out from the system', () => {
    logoutPage.logout();

    logoutPage.verifyLoggedOut();
  });

  it.only('should automatically log out after 1h of inactivity', () => {
    cy.clock();
    cy.tick(3600 * 1000);

    logoutPage.verifyLoggedOut();
  });
});
