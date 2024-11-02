it('test', () => {
  cy.visit('/');
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#auth > svg').click();
  cy.get('#email').type('danhdanhdanh02@gmail.com');
  cy.get('#password').type('123');
  cy.get('#btn-login').click();
  cy.get('.MuiBadge-root > svg > path').click();
  cy.get('[href="/checkout"] > .MuiButtonBase-root').click();
  cy.get('#name').type('John Doe');
  cy.get('#phone').type('0123456789');
  cy.get('#address').type('VL');
  cy.get('#next-btn').click();
  cy.get('#payment-method-momo > .MuiTypography-root').click();
  cy.get('#open-url-momo').click();
  /* ==== End Cypress Studio ==== */
});
