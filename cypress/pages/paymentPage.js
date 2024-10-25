class PaymentPage {
  elements = {
    shippingInfo: {
      nameInput: () => cy.get('#name'),
      phoneInput: () => cy.get('#phone'),
      addressInput: () => cy.get('#address'),
    },
    paymentMethod: {
      cashOption: () => cy.get('#payment-method-cash'),
      momoOption: () => cy.get('#payment-method-momo'),
      openUrl: () => cy.get('#open-url-momo'),
    },
    submitButton: () => cy.get('#next-btn'),
    success: () => cy.get('#text-order-success'),
  };

  openCheckoutPage() {
    cy.visit('/checkout');
  }

  fillShippingInfo(name, phone, address) {
    this.elements.shippingInfo.nameInput().type(name);
    this.elements.shippingInfo.phoneInput().type(phone);
    this.elements.shippingInfo.addressInput().type(address);

    this.elements.submitButton().click();
  }

  selectedPaymentMethod(method) {
    if (method === 'cash') {
      this.elements.paymentMethod.cashOption().click();
      this.elements.submitButton().click();
    } else if (method === 'momo') {
      this.elements.paymentMethod.momoOption().click();
      this.elements.paymentMethod.openUrl().click();

      this.elements.submitButton().click();
    }
  }

  submitOrder() {
    this.elements.submitButton().click();
  }

  verifySuccessOrder() {
    this.elements.success().should('contain', 'Thank you for your order!');
  }
}

export default new PaymentPage();
