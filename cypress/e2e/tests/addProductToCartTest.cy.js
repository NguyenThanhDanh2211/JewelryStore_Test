import categoryPage from '../../pages/categoryPage';
import productDetailPage from '../../pages/productDetailPage';
import loginData from '../../fixtures/loginData.json';

describe('Add Product To The Cart Functionality', () => {
  beforeEach(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('TC13: should add a product to the cart from the product page', () => {
    categoryPage.openProductPage();
    categoryPage.addMultipleProduct([9]);
  });

  it('TC 15: should add multiple products to the cart from the product page', () => {
    categoryPage.openProductPage();
    categoryPage.addMultipleProduct([0, 1, 2, 3]);
  });

  it('TC 14: should add a product to the cart from the product details page', () => {
    const slug = 'smile-small-pendant';

    categoryPage.openProductDetail(slug);
    productDetailPage.clickAddProduct();

    cy.contains(' has been added to the cart!').should('be.visible');
  });
});
