import paymentPage from '../../pages/paymentPage';
import searchPage from '../../pages/searchPage';
import homePage from '../../pages/homePage';
import productDetailPage from '../../pages/productDetailPage';
import orderPage from '../../pages/orderPage';
import loginData from '../../fixtures/loginData.json';
import paymentData from '../../fixtures/paymentData.json';
import searchData from '../../fixtures/searchData.json';

describe('Checkout Payment Method Tests', () => {
  beforeEach(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('TC20: should place order and pay with momo', () => {
    homePage.clickSearchIcon();

    searchPage.typeSearch(searchData.validSearchKeyword);
    searchPage.verifySearch(searchData.validSearchKeyword);
    searchPage.clickOnProduct();

    productDetailPage.clickAddProduct();
    productDetailPage.verifyAddProduct(searchData.validSearchKeyword);

    homePage.openCartDrawer();
    homePage.clickBtnCheckout();

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

  it('TC19: should place order and pay with cash', () => {
    homePage.clickSearchIcon();

    searchPage.typeSearch(searchData.validSearchKeyword);
    searchPage.verifySearch(searchData.validSearchKeyword);
    searchPage.clickOnProduct();

    productDetailPage.clickAddProduct();
    productDetailPage.verifyAddProduct(searchData.validSearchKeyword);

    homePage.openCartDrawer();
    homePage.clickBtnCheckout();

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
});
