import loginData from '../../fixtures/loginData.json';
import productDetail from '../../pages/productDetailPage';

describe('Customer Product Review Tests', () => {
  before(() => {
    cy.login(loginData.validUser.email, loginData.validUser.password);
  });

  it('should post a product review after login', () => {
    cy.visit('shop/rings/sixteen-stone-ring');

    cy.get('.reviews-section');

    const reviewText = 'Great product! I really enjoyed it.';
    const rating = 5;

    productDetail.postReview(reviewText, rating);
    productDetail.verifyReviewPosted(reviewText);
  });
});
