class ProductDetailsPage {
  elements = {
    productImage: () => cy.get('.product-img'),
    productName: () => cy.get('.product-name'),
    productPrice: () => cy.get('.product-price'),
    productDescription: () => cy.get('.product-des'),
    reviewsSection: () => cy.get('.reviews-section'),
    reviewItems: () => cy.get('.review-item'),

    postReviewBtn: () =>
      cy.get(
        '#root > div > div.MuiStack-root.css-1nsmvhe-MuiStack-root > div.reviews-section.MuiBox-root.css-yp8tjk > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-2.css-6odsi3-MuiGrid-root > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2.css-1o7apob-MuiGrid-root > div > div > div > button:nth-child(2)'
      ),

    reviewInput: () => cy.get('#review-input'),
    ratingStars: (rating) => cy.get(`.rating-star[data-value="${rating}"]`),
    submitReviewButton: () => cy.get('#submit-review-button'),
  };

  visitProductPage(slug) {
    cy.visit(`/shop/bracelets/${slug}`);
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
