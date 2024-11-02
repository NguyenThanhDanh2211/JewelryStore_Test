import orderPage from '../../pages/orderPage';
import loginData from '../../fixtures/loginData.json';

describe('Orders Functionality Tests', () => {
  let currentOrderId;

  beforeEach(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
    orderPage.openOrderPage();
  });

  it('TC21: should display the list of placed orders and get first orderId', () => {
    orderPage.elements.ordersList().should('be.visible');

    // Lấy `orderId` của đơn hàng đầu tiên và gán cho `currentOrderId`
    cy.get('.order-item')
      .first()
      .invoke('attr', 'data-id')
      .then((id) => {
        currentOrderId = id;
        expect(currentOrderId).to.exist;
      });
  });

  it('TC22: should display the order details when clicked on the order', () => {
    cy.wrap(currentOrderId).should('exist');

    orderPage.viewOrderDetail(currentOrderId);
  });

  it('TC23: should cancel the order and verify it in the cancelled orders tab', () => {
    cy.wrap(currentOrderId).should('exist');

    orderPage.cancelOrder(currentOrderId);
    orderPage.switchToCancelTab();
    orderPage.verifyOrderCanceled(currentOrderId);
  });
});
