class Search {
  elements = {
    searchIcon: () => cy.get('#search-icon'),
    input: () => cy.get('input[placeholder="Search Products"]'),
    productItem: () => cy.get('.product-item'),
  };

  openHomePage() {
    cy.visit('/');
  }

  clickIconSearch() {
    this.elements.searchIcon().click();
  }

  typeSearch(product) {
    this.elements.input().type(product);
  }

  verifySearch(product) {
    this.elements.productItem().first().should('contain', product);
  }

  clickOnProduct() {
    this.elements.productItem().first().click();
  }
}

export default new Search();
