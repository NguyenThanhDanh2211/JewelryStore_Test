class orderPage {
  weblocators = {
    ordersList: '.orders-list',
    orderItem: (orderId) => `.order-item[data-id="${orderId}"]`,
    orderDetail: '.order-detail',
    cancelOrderBtn: '.cancel-order',
    closeDialog: '.close-dialog',
    cancelledOrdersTab: '.cancelled-orders-tab',
  };

  openOrderPage() {
    cy.visit('/order');
  }

  viewOrderDetail(orderId) {
    cy.get(this.weblocators.orderItem(orderId)).click();
    cy.get(this.weblocators.orderDetail).should('be.visible');
  }

  cancelOrder(orderId) {
    cy.get(this.weblocators.orderItem(orderId)).click();
    cy.get(this.weblocators.cancelOrderBtn).click();
    cy.get(this.weblocators.closeDialog).click();
  }

  switchToCancelTab() {
    cy.get(this.weblocators.cancelledOrdersTab).click();
  }

  verifyOrderCanceled(orderId) {
    cy.get(this.weblocators.ordersList)
      .find(this.weblocators.orderItem(orderId))
      .should('exist');
  }
}

export default new orderPage();
