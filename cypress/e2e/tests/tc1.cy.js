import paymentPage from '../../pages/paymentPage';
import searchPage from '../../pages/search';
import cartPage from '../../pages/addProductToCart';
import orderPage from '../../pages/orderPage';
import loginData from '../../fixtures/loginData.json';
import paymentData from '../../fixtures/paymentData.json';
import searchData from '../../fixtures/searchData.json';

describe('Checkout Payment Method Tests', () => {
  before(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('should place order and pay with cash', () => {
    searchPage.clickIconSearch();
    searchPage.typeSearch(searchData.validSearchKeyword);
    searchPage.verifySearch(searchData.validSearchKeyword);
    searchPage.clickOnProduct();

    cartPage.clickAddProduct();
    cartPage.verifyAddProduct(searchData.validSearchKeyword);

    paymentPage.openCheckoutPage();
    paymentPage.fillShippingInfo(
      paymentData.name,
      paymentData.phone,
      paymentData.address
    );
    paymentPage.selectedPaymentMethod('cash');
    paymentPage.submitOrder();
    paymentPage.verifySuccessOrder();
    paymentPage.goOrder();

    orderPage.verifyOrderList();
    orderPage.verifyOrderDetail();
  });

  it('should place order and pay with momo', () => {
    searchPage.clickIconSearch();
    searchPage.typeSearch(searchData.validSearchKeyword);
    searchPage.verifySearch(searchData.validSearchKeyword);
    searchPage.clickOnProduct();

    cartPage.clickAddProduct();
    cartPage.verifyAddProduct(searchData.validSearchKeyword);

    paymentPage.openCheckoutPage();
    paymentPage.fillShippingInfo(
      paymentData.name,
      paymentData.phone,
      paymentData.address
    );
    paymentPage.selectedPaymentMethod('momo');
    paymentPage.clickOnATM();
    paymentPage.fillMoMoInfo(
      paymentData.cardNumber,
      paymentData.name,
      paymentData.cardExpire,
      paymentData.phone
    );
    paymentPage.clickOnPay();
    paymentPage.fillOpt();
    paymentPage.submitOrder();
    paymentPage.verifySuccessOrder();
    paymentPage.goOrder();

    orderPage.verifyOrderList();
    orderPage.verifyOrderDetail();
  });
});
