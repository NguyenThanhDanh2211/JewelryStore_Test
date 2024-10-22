class search {
  weblocators = {
    search: '#search-icon',
    input: 'input[placeholder="Search Products"]',
  };

  openHomePage() {
    cy.visit('/');
  }

  clickIconSearch() {
    cy.get(this.weblocators.search).click();
  }

  typeSearch(product) {
    cy.get(this.weblocators.input).type(product);
  }
}

export default new search();
