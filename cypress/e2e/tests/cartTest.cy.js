import loginData from '../../fixtures/loginData.json';
import cartPage from '../../pages/cartPage';

describe('Cart Functionality Tests', () => {
  beforeEach(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('TC16: should increase product quantity in the cart', () => {
    const productName = 'True Wide Ring';

    cartPage.addProductToCart(productName);
    cartPage.openCartPage();
    cartPage.increaseProductQuantity(productName, 3);
    cartPage.verifyProductQuantity(productName, 3);
  });

  it('TC17: should decrease product quantity in the cart', () => {
    const productName = 'True Wide Ring';

    cartPage.addProductToCart(productName);
    cartPage.openCartPage();

    cartPage.setProductQuantity(productName, 3);
    cartPage.decreaseProductQuantity(productName, 1);
    cartPage.verifyProductQuantity(productName, 1);
  });

  it('TC18: should remove a product from the cart', () => {
    const productName = 'True Wide Ring';

    cartPage.addProductToCart(productName);
    cartPage.openCartPage();

    cartPage.removeProductFromCart(productName);
    cartPage.verifyProductNotInCart(productName);
  });
});
