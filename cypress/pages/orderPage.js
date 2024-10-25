class OrderPage {
  elements = {
    ordersList: () => cy.get('.orders-list'),
    orderItem: (orderId) => cy.get(`.order-item[data-id="${orderId}"]`),
    orderDetail: () => cy.get('.order-detail'),
    cancelOrderBtn: () => cy.get('.cancel-order'),
    closeDialog: () => cy.get('.close-dialog'),
    cancelledOrdersTab: () => cy.get('.cancelled-orders-tab'),
  };

  openOrderPage() {
    cy.visit('/order');
  }

  viewOrderDetail(orderId) {
    this.elements.orderItem(orderId).click();
    this.elements.orderDetail().should('be.visible');
  }

  cancelOrder(orderId) {
    this.elements.orderItem(orderId).click();
    this.elements.cancelOrderBtn().click();
    this.elements.closeDialog().click();
  }

  switchToCancelTab() {
    this.elements.cancelledOrdersTab().click();
  }

  verifyOrderCanceled(orderId) {
    this.elements
      .ordersList()
      .find(`.order-item[data-id="${orderId}"]`)
      .should('exist');
  }
}

export default new OrderPage();
