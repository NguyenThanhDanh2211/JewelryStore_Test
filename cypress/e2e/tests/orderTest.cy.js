import orderPage from '../../pages/orderPage';
import loginData from '../../fixtures/loginData.json';

describe('Orders Functionality Tests', () => {
  before(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('should display the list of placed orders', () => {
    orderPage.openOrderPage();

    cy.get(orderPage.weblocators.ordersList).should('be.visible');
    cy.get(orderPage.weblocators.orderItem('671a6367d6d2f9c9df48c0db')).should(
      'exist'
    );
  });

  it.only('should display the order details when clicked on the order', () => {
    orderPage.openOrderPage();

    orderPage.viewOrderDetail('671a489501ebf749d006b288');
  });

  it('should cancel the order and verify it in the cancelled orders tab', () => {
    orderPage.openOrderPage();

    orderPage.cancelOrder('671a6367d6d2f9c9df48c0db');
    orderPage.switchToCancelTab();
    orderPage.verifyOrderCanceled('671a6367d6d2f9c9df48c0db');
  });
});
