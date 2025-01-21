// cypress/support/commands.js

Cypress.Commands.add('cadastroUsuario', (usuario, senha) => {
  cy.get('#signin2').click(); // Clica no botão para abrir o modal de cadastro
  cy.get('#signInModalLabel').should('be.visible'); // Espera o modal aparecer
  cy.get('#sign-username').should('be.visible').type(usuario); // Preenche o nome de usuário
  cy.get('#sign-password').should('be.visible').type(senha); // Preenche a senha
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); // Submete o formulário
  cy.wait(5000); // Espera 5 segundos
  cy.contains('Sign up', { timeout: 40000 }).should('be.visible');
});

Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto) => {
  // Acessa a página do produto
  cy.contains(produto).click();
  
  // Clica no botão de adicionar ao carrinho
  cy.get('.btn-success').contains('Add to cart').click();
  
  // Valida a exibição da mensagem de sucesso
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Product added');
  });
  
  // Volta para a página inicial
  cy.get('.nav-link').contains('Home').click();
});
