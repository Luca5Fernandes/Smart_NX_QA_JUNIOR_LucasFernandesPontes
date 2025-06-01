/// <reference types="cypress" />

describe('Testes Modolu PIM', () => {
  
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
    cy.get(selectors.usernameInput).type('Admin');
    cy.get(selectors.passwordInput).type('admin123');
    cy.get(selectors.submitButton).click();
  });

  it('Pesquisar Módulo Dashboard', () => {
    cy.get('.oxd-main-menu-search').type('Dashboard');
 });

  it('Pesquisar Módulo Admin', () => {
    cy.get('.oxd-main-menu-search').type('Admin');
    cy.get('.oxd-input').clear();
 });

  it('Acessar Módulo PIM', () => {
    cy.get('.oxd-main-menu-search').type('PIM');
    cy.get('.oxd-main-menu-item > .oxd-text').click();
 });
});