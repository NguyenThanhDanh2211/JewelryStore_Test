import loginData from '../../fixtures/loginData.json';
import cartPage from '../../pages/cartPage';

describe('Cart Functionality Tests', () => {
  before(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('should increase product quantity in the cart', () => {
    const productName = 'True Wide Ring';

    cartPage.addProductToCart(productName);
    cartPage.openCartPage();
    cartPage.increaseProductQuantity(productName, 3);
    cartPage.verifyProductQuantity(productName, 3);
  });

  it('should decrease product quantity in the cart', () => {
    const productName = 'True Wide Ring';

    cartPage.addProductToCart(productName);
    cartPage.openCartPage();

    cartPage.setProductQuantity(productName, 3);
    cartPage.decreaseProductQuantity(productName, 1);
    cartPage.verifyProductQuantity(productName, 1);
  });

  it.only('should remove a product from the cart', () => {
    const productName = 'True Wide Ring';

    cartPage.addProductToCart(productName);
    cartPage.openCartPage();

    cartPage.removeProductFromCart(productName);
    cartPage.verifyProductNotInCart(productName);
  });
});
