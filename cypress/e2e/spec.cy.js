describe('Cadastro de Usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    // Acessa a página principal
    cy.visit('https://www.demoblaze.com/');
    
    cy.log('Iniciando cadastro de usuário'); // Adiciona um log para verificação
    
    // Usa o comando customizado para cadastrar o usuário
    const usuario = 'novoUsuario123';
    const senha = 'senhaSegura!2024';
    cy.cadastroUsuario(usuario, senha); // Chama o comando registrado em commands.js

    // Adiciona um tempo de espera explícito
    cy.wait(5000); // Espera 5 segundos

    // Valida a exibição da mensagem de sucesso
    cy.contains('Sign up', { timeout: 40000 }).should('be.visible');
  });
});

describe('Adição de Produto ao Carrinho', () => {
  it('Deve adicionar um produto ao carrinho com sucesso', () => {
    // Acessa a página principal
    cy.visit('https://www.demoblaze.com/');
    
    cy.log('Iniciando adição de produto ao carrinho'); // Adiciona um log para verificação
    
    // Usa o comando customizado para adicionar o produto ao carrinho
    const produto = 'Samsung galaxy s6';
    cy.adicionarProdutoAoCarrinho(produto); // Chama o comando registrado em commands.js

    // Acessa o carrinho
    cy.get('#cartur').click();
    
    // Valida a presença do produto no carrinho
    cy.contains(produto).should('be.visible');
  });
});