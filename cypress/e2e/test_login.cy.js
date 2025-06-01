/// <reference types="cypress" />

describe('Testes de Login', () => {
  
  const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  const selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    errorMessage: '.oxd-input-field-error-message',
    invalidCredentialsAlert: '.oxd-alert-content-text',
    dashboardTitle: 'h6'
  };

  beforeEach(() => {
    cy.visit(URL);
  });

  it('Deve Realizar Login com Sucesso', () => {
    cy.get(selectors.usernameInput).type('Admin');
    cy.get(selectors.passwordInput).type('admin123');
    cy.get(selectors.submitButton).click();

    cy.get(selectors.dashboardTitle).should('contain.text', 'Dashboard');
  });

  it('Deve exibir Mensagem de Erro ao tentar Logar sem Usuário e Senha', () => {
    cy.get(selectors.submitButton).click();
    cy.get(selectors.errorMessage)
      .should('contain.text', 'Required')
  });

  it('Deve exibir Erro ao Logar com Credenciais Inválidas', () => {
    cy.get(selectors.usernameInput).type('usuarioInvalido');
    cy.get(selectors.passwordInput).type('senhaInvalida');
    cy.get(selectors.submitButton).click();
    cy.get(selectors.invalidCredentialsAlert)
      .should('contain.text', 'Invalid credentials');
  });

});
