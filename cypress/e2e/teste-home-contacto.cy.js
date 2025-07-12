describe('testes na home da loading', () => {
	beforeEach(() => {
		//cy.viewport('iphone-6'); //teste para telemovel
		// Ignora o erro de jQuery undefined
		Cypress.on('uncaught:exception', (err, runnable) => {
			if (err.message.includes('jQuery is not defined')) {
				return false; // Impede que o erro quebre o teste
			}
		});

		// Visita o site com failOnStatusCode falso, para evitar quebra por erros de status
		cy.visit('https://loadingsoftware.pt/', {
			failOnStatusCode: false,
			timeout: 90000 // timeout estendido se necessário
		});
	});

	it('testando todos os caminhos na pagina home e verificando', () => {
		cy.contains('a', 'Contacto').click();
		cy.get('#wpforms-4742-field_1').type('Harry Potter')
		cy.get('#wpforms-4742-field_2').type('Harry')
		cy.get('#wpforms-4742-field_3').type('Harry@email.com')
		cy.get('#wpforms-4742-field_5').type('13 9314351')
		cy.get('#wpforms-4742-field_10').type('Sou Harry só Harry')
	});
});
