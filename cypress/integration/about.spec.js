/* globals context, cy */
context('About', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/about');
  });

  describe('Header', () => {
    it('should have 2 navigation links', () => {
      cy.get('header a').should('have.length', 2);
    });

    it('should have _Game_ link', () => {
      cy.get('header a')
        .first()
        .should('have.text', 'Game')
        .should('have.attr', 'href')
        .and('include', '/');
    });

    it('should have _Pattern Reference_ link', () => {
      cy.get('header a:last')
        .first()
        .should('have.text', 'Pattern Reference')
        .should('have.attr', 'href')
        .and('include', '/patterns');
    });

    it('should have the current page title in a span', () => {
      cy.get('header span')
        .should('exist')
        .should('have.text', 'About');
    });

    it('should have the MODE switch', () => {
      cy.get('header button[data-cy=mode]').should('exist');
      cy.get('header button[data-cy=mode]').should('be.visible');
    });

    it('should NOT have the JS switch', () => {
      cy.get('header button[data-cy=js]').should('not.exist');
    });
  });

  describe('Content', () => {
    it('should have 2 section headers', () => {
      cy.get('h3').should('have.length', 2);

      cy.get('h3:first').should('have.text', 'The Game');
      cy.get('h3:last').should('have.text', 'References');
    });
  });

  describe('Behavior', () => {
    it('should switch the mode', () => {
      cy.get('body').should('have.css', 'background-color', 'rgb(34, 34, 34)');
      cy.get('header button[data-cy=mode]').click();
      cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    });
  });
});
