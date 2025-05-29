/// <reference types="cypress" />

describe('Testes de Cadastro', () => {
  
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  beforeEach(() => {
    // Acessa a página antes de cada teste
    cy.visit(url);
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-main-menu-search').type('PIM');
    cy.get('.oxd-main-menu-item > .oxd-text').click();
  });
  it('Pesquisar Módulo PIM', () => {
     cy.get('.orangehrm-header-container > .oxd-button').should('be.visible')
 });
});