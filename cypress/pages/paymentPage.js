class paymentPage {
  weblocators = {
    shippingInfo: {
      nameInput: '#name',
      phoneInput: '#phone',
      addressInput: '#address',
    },
    paymentMethod: {
      cashOption: '#payment-method-cash',
      momoOption: '#payment-method-momo',
      openUrl: '#open-url-momo',
    },
    submitButton: '#next-btn',
    success: '#text-order-success',
  };

  openCheckoutPage() {
    cy.visit('/checkout');
  }

  fillShippingInfo(name, phone, address) {
    cy.get(this.weblocators.shippingInfo.nameInput).type(name);
    cy.get(this.weblocators.shippingInfo.phoneInput).type(phone);
    cy.get(this.weblocators.shippingInfo.addressInput).type(address);

    cy.get(this.weblocators.submitButton).click();
  }

  selectedPaymentMethod(method) {
    if (method === 'cash') {
      cy.get(this.weblocators.paymentMethod.cashOption).click();
      cy.get(this.weblocators.submitButton).click();
    } else if (method === 'momo') {
      cy.get(this.weblocators.paymentMethod.momoOption).click();
      cy.get(this.weblocators.paymentMethod.openUrl).click();

      cy.get(this.weblocators.submitButton).click();
    }
  }

  submitOrder() {
    cy.get(this.weblocators.submitButton).click();
  }

  verifySuccessOrder() {
    cy.get(this.weblocators.success).should(
      'contain',
      'Thank you for your order!'
    );
  }
}

export default new paymentPage();
