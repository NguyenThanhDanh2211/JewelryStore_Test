import homePage from '../../pages/homePage';
import searchPage from '../../pages/searchPage';
import searchData from '../../fixtures/searchData.json';

describe('Product Search Functionality Tests', () => {
  it('TC8: should find products with a valid search keyword', () => {
    homePage.openHomePage();
    homePage.clickSearchIcon();

    searchPage.typeSearch(searchData.validSearchKeyword);
    searchPage.verifySearch(searchData.validSearchKeyword);
  });

  it('TC9: should show no results for an invalid search keyword', () => {
    homePage.openHomePage();
    homePage.clickSearchIcon();

    searchPage.typeSearch(searchData.invalidSearchKeyword);

    cy.contains('Sorry, no results matched your search.').should('be.visible');
  });
});
