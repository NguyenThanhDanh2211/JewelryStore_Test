import cartPage from '../../pages/addProductToCart';
import loginData from '../../fixtures/loginData.json';

describe('Add Product To The Cart Functionality', () => {
  before(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('should add a product to the cart from the product page', () => {
    cartPage.openProductPage();
    cartPage.addMultipleProduct([5]);
  });

  it('should add multiple products to the cart from the product page', () => {
    cartPage.openProductPage();
    cartPage.addMultipleProduct([0, 1, 2, 3]);
  });

  it.only('should add a product to the cart from the product details page', () => {
    const slug = 'smile-small-pendant';

    cartPage.openProductDetail(slug);
    cartPage.clickAddProduct();

    cy.contains(' has been added to the cart!').should('be.visible');
  });
});
