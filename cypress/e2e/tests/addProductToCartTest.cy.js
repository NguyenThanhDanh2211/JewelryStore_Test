import cartPage from '../../pages/addProductToCart';
import loginData from '../../fixtures/loginData.json';

describe('Add Product To The Cart Functionality', () => {
  beforeEach(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('TC13: should add a product to the cart from the product page', () => {
    cartPage.openProductPage();
    cartPage.addMultipleProduct([9]);
  });

  it('TC 15: should add multiple products to the cart from the product page', () => {
    cartPage.openProductPage();
    cartPage.addMultipleProduct([0, 1, 2, 3]);
  });

  it('TC 14: should add a product to the cart from the product details page', () => {
    const slug = 'smile-small-pendant';

    cartPage.openProductDetail(slug);
    cartPage.clickAddProduct();

    cy.contains(' has been added to the cart!').should('be.visible');
  });
});
