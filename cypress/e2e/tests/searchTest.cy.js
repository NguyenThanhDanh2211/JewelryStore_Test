import search from '../../pages/search';
import searchData from '../../fixtures/searchData.json';

describe('Product Search Functionality Tests', () => {
  it('TC8: should find products with a valid search keyword', () => {
    search.openHomePage();

    search.clickIconSearch();
    search.typeSearch(searchData.validSearchKeyword);

    cy.get('.product-item')
      .first()
      .should('contain', searchData.validSearchKeyword);
  });

  it('TC9: should show no results for an invalid search keyword', () => {
    search.openHomePage();

    search.clickIconSearch();
    search.typeSearch(searchData.invalidSearchKeyword);

    cy.contains('Sorry, no results matched your search.').should('be.visible');
  });
});
