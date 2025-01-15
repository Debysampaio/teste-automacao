// cypress/support/commands.js

Cypress.Commands.add('cadastroUsuario', (usuario, senha) => {
  cy.get('#signin2').click(); // Clica no botão para abrir o modal de cadastro
  cy.get('#signInModalLabel').should('be.visible'); // Espera o modal aparecer
  cy.get('#sign-username').should('be.visible').type(usuario); // Preenche o nome de usuário
  cy.get('#sign-password').should('be.visible').type(senha); // Preenche a senha
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Submete o formulário
});
