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
  it('Validar Botão + Add', () => {
     cy.get('.orangehrm-header-container > .oxd-button').should('be.visible')
 });
  it('Acessar Tela de Cadastro', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click()
 });
  it('Cadastrar um usuario sem Nomde', () =>{
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Fernandes')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Pontes')
    cy.get('.oxd-button--secondary').click()
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('be.visible')
  });
  it('Tentar Cadastro de Usuario Existente', () =>{
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Lucas')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Fernandes')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Pontes')
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear('')
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('0416')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  });
  it('Cadastrar sem Dados de Login', () =>{
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('be.visible')
});
});