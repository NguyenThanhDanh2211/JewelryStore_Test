class Search {
  elements = {
    searchIcon: () => cy.get('#search-icon'),
    input: () => cy.get('input[placeholder="Search Products"]'),
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
}

export default new Search();
