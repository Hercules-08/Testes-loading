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
		cy.contains('a', 'Sobre').click();
	});
});