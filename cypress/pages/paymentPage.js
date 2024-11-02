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
    momo: {
      atm: () =>
        cy.get('#body-payment-content > div > div > div:nth-child(3) > label'),
      nextBtn: () => cy.get('#nextBtn'),
      cardNumber: () => cy.get('#card-number'),
      cardExpire: () => cy.get('#card-expire'),
      numberPhone: () => cy.get('#number-phone'),
      cardName: () => cy.get('#card-name'),
      btnPayCard: () => cy.get('#btn-pay-card'),
      otp: () => cy.get('#napasOtpCode'),
      napasProcessBtn: () => cy.get('#napasProcessBtn1'),
    },
    submitButton: () => cy.get('#next-btn'),
    success: () => cy.get('#text-order-success'),
    goOrderBtn: () => cy.get('#go-order'),
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

  clickOnATM() {
    this.elements.momo.atm().click();
    this.elements.momo.nextBtn().click();
  }

  fillMoMoInfo(cardNumber, cardName, cardExpire, numberPhone) {
    this.elements.momo.cardNumber().type(cardNumber),
      this.elements.momo.cardName().type(cardName),
      this.elements.momo.cardExpire().type(cardExpire),
      this.elements.momo.numberPhone().type(numberPhone);
  }

  clickOnPay() {
    this.elements.momo.btnPayCard().click();
  }

  fillOpt() {
    this.elements.momo.otp().type('otp'),
      this.elements.momo.napasProcessBtn().click();
  }

  selectedPaymentMethod(method) {
    if (method === 'cash') {
      this.elements.paymentMethod.cashOption().click();
      this.elements.submitButton().click();
    } else if (method === 'momo') {
      this.elements.paymentMethod.momoOption().click();
      this.elements.paymentMethod.openUrl().click();

      // this.elements.submitButton().click();
    }
  }

  submitOrder() {
    this.elements.submitButton().click();
  }

  verifySuccessOrder() {
    this.elements.success().should('contain', 'Thank you for your order!');
  }

  goOrder() {
    this.elements.goOrderBtn().click();
  }
}

export default new PaymentPage();
