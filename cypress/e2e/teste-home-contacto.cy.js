describe('testes na home da loading', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('jQuery is not defined')) {
        return false;
      }
    });

    cy.visit('https://loadingsoftware.pt/', {
      failOnStatusCode: false,
      timeout: 90000,
    });
  });

  it('testando todos os caminhos na pagina home e verificando', () => {
    // Clica no link de Contacto e espera a navegação
    cy.contains('a', 'Contacto').click();

    // Espera o formulário estar visível
    cy.get('#wpforms-4742-field_1', { timeout: 10000 })
      .should('be.visible')
      .type('Harry Potter');

    cy.get('#wpforms-4742-field_2')
      .should('be.visible')
      .type('Harry');

    cy.get('#wpforms-4742-field_3')
      .should('be.visible')
      .type('Harry@email.com');

    cy.get('#wpforms-4742-field_5')
      .should('be.visible')
      .type('13 9314351');

    cy.get('#wpforms-4742-field_10')
      .should('be.visible')
      .type('Sou Harry só Harry');
  });
});
