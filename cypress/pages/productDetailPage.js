class ProductDetailsPage {
  elements = {
    productImage: () => cy.get('.product-img'),
    productName: () => cy.get('.product-name'),
    productPrice: () => cy.get('.product-price'),
    productDescription: () => cy.get('.product-des'),
    reviewsSection: () => cy.get('.reviews-section'),
    reviewItems: () => cy.get('.review-item'),
    postReviewBtn: () => cy.get('#submit-review-button'),
    reviewInput: () => cy.get('#review-input'),
    ratingStars: (rating) => cy.get(`.rating-star[data-value="${rating}"]`),
    submitReviewButton: () => cy.get('#submit-review-button'),

    addProductBtn: () => cy.get('#add-product-btn'),
  };

  visitProductPage(slug) {
    cy.visit(`/shop/bracelets/${slug}`);
  }

  clickAddProduct() {
    this.elements.addProductBtn().click();
  }

  verifyProductDetails(expectedName, expectedPrice) {
    this.elements.productImage().should('be.visible');
    this.elements.productName().should('contain.text', expectedName);
    this.elements.productPrice().should('contain.text', expectedPrice);
    this.elements.productDescription().should('be.visible');
  }

  verifyProductReviews() {
    this.elements.reviewsSection().should('be.visible');
    this.elements.reviewItems().first().should('be.visible');
  }

  postReview(reviewText, rating) {
    this.elements.postReviewBtn().click();
    this.elements.reviewInput().type(reviewText);
    this.elements.ratingStars(rating).click();
    this.elements.submitReviewButton().click();
  }

  verifyReviewPosted(reviewText) {
    cy.contains(reviewText).should('be.visible');
  }
}

export default new ProductDetailsPage();
