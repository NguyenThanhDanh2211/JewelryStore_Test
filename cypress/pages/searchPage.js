class SearchPage {
  elements = {
    searchIcon: () => cy.get('#search-icon'),
    input: () => cy.get('input[placeholder="Search Products"]'),
    productItem: () => cy.get('.product-item'),
  };

  typeSearch(product) {
    this.elements.input().type(product);
  }

  verifySearch(product) {
    this.elements.productItem().first().should('contain', product);
  }

  clickIconSearch() {
    this.elements.searchIcon().click();
  }

  clickOnProduct() {
    this.elements.productItem().first().click();
  }
}

export default new SearchPage();
