/// <reference types="cypress" />

describe('Testes Modolo PIM', () => {
  
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  beforeEach(() => {
    // Acessa a página antes de cada teste
    cy.visit(url);
  });
   it('Pesquisar Módulo PIM', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-main-menu-search').type('PIM');
 });
  it('Pesquisar Módulo Dashboard', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-main-menu-search').type('Dashboard');
 });
   it('Pesquisar Módulo Admin', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-main-menu-search').type('Admin');
    cy.get('.oxd-input').clear();
 });
 it('Acessar Módulo PIM', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-main-menu-search').type('PIM');
    cy.get('.oxd-main-menu-item > .oxd-text').click();
 });
});