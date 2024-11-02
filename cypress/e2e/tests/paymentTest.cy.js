import paymentPage from '../../pages/paymentPage';
import loginData from '../../fixtures/loginData.json';
import paymentData from '../../fixtures/paymentData.json';

describe('Checkout Payment Method Tests', () => {
  before(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it.only('TC19: should place order and pay with cash', () => {
    paymentPage.openCheckoutPage();
    paymentPage.fillShippingInfo(
      paymentData.name,
      paymentData.phone,
      paymentData.address
    );

    paymentPage.selectedPaymentMethod('cash');
    paymentPage.submitOrder();
    paymentPage.verifySuccessOrder();
  });

  it('TC20: should place order and pay with momo', () => {
    paymentPage.openCheckoutPage();

    paymentPage.fillShippingInfo(
      paymentData.name,
      paymentData.phone,
      paymentData.address
    );

    paymentPage.selectedPaymentMethod('momo');
    paymentPage.submitOrder();
    paymentPage.verifySuccessOrder();
  });
});
