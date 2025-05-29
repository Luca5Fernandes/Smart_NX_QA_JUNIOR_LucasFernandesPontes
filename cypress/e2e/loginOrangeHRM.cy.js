/// <reference types="cypress" />

describe('Testes de Login no OrangeHRM', () => {
  
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  beforeEach(() => {
    // Acessa a página antes de cada teste
    cy.visit(url);
  });

  it('Login com sucesso', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Verifica se o painel foi carregado (login bem-sucedido)
    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain.text', 'Dashboard');
  });

  it('Login sem fornecer usuário e senha', () => {
    cy.get('button[type="submit"]').click();

    // Verifica as mensagens de erro para campos obrigatórios
    cy.get('.oxd-input-field-error-message')
      .should('contain.text', 'Required')
      .and('have.length.at.least', 1);
  });

  it('Login com credenciais inválidas', () => {
    cy.get('input[name="username"]').type('usuarioInvalido');
    cy.get('input[name="password"]').type('senhaInvalida');
    cy.get('button[type="submit"]').click();

    // Verifica mensagem de erro
    cy.get('.oxd-alert-content-text')
      .should('contain.text', 'Invalid credentials');
  });
});
