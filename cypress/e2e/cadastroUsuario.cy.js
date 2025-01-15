
describe('Cadastro de Usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    // Acessa a página principal
    cy.visit('https://www.demoblaze.com/');
    
    cy.log('Iniciando cadastro de usuário'); // Adiciona um log para verificação
    
    // Usa o comando customizado para cadastrar o usuário
    const usuario = 'novoUsuario123';
    const senha = 'senhaSegura!2024';
    cy.cadastroUsuario(usuario, senha); // Chama o comando registrado em commands.js

    // Valida a exibição da mensagem de sucesso
    cy.contains('Sign up successful.').should('be.visible');
  });
});
