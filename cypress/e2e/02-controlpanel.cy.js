import { slateBeforeEachControlpanel, slateAfterEach } from '../support/e2e';

describe('Blocks Tests', () => {
  beforeEach(slateBeforeEachControlpanel);
  afterEach(slateAfterEach);

  it('renders the VersionOverview component', () => {
    // Check if the component is rendered on the page
    cy.contains('Version Overview');
  });

  it('renders the VersionOverview component', () => {
    // Check if the component is rendered on the page
    cy.get('.ui.raised.segments').should('be.visible');
  });

  it('displays the frontend version', () => {
    cy.get('.ui.raised.segments')
      .eq(1)
      .find('.column')
      .first()
      .find('.ui.header span')
      .should('contain', 'Frontend');
  });

  it('displays the backend version', () => {
    cy.get('.ui.raised.segments')
      .eq(1)
      .find('.column')
      .first()
      .find('.ui.header')
      .should('contain', 'Backend');
  });

  it('displays the Volto version', () => {
    cy.get('.ui.raised.segments')
      .eq(1)
      .find('.column')
      .first()
      .find('ul li')
      .should('contain', 'Volto');
  });

  it('displays the addons information', () => {
    cy.get('.ui.raised.segments')
      .eq(1)
      .find('.column')
      .first()
      .find('ul li')
      .should('have.length.greaterThan', 1);
  });

  it('displays the backend version details', () => {
    cy.get('.ui.raised.segments')
      .eq(1)
      .find('.column')
      .first()
      .find('ul li')
      .should('contain', 'Plone')
      .and('contain', 'plone.restapi')
      .and('contain', 'CMF')
      .and('contain', 'Zope')
      .and('contain', 'Python')
      .and('contain', 'PIL');
  });

  it('displays the eggs information', () => {
    cy.get('.ui.raised.segments')
      .eq(1)
      .find('.column')
      .eq(1)
      .find('ul li')
      .should('have.length.greaterThan', 1);
  });
});
