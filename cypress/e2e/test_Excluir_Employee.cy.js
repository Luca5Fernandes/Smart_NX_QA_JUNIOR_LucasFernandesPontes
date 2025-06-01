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
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Teste')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Cancelar')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Exclusão')
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear('').type('9999')
    cy.get('.oxd-button--secondary').click()
    cy.wait(5000);
  });
  it('Cancelar Exclusão de Cadastro', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('9999')
    cy.wait(2000);
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.wait(4000);
    cy.get('.oxd-table-cell-actions > :nth-child(2)').click()
    cy.get('.orangehrm-modal-footer > .oxd-button--ghost').click()    
  });
   it('Exclusão de Cadastro', () => {
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('9999')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.wait(2000);
    cy.get('.oxd-table-cell-actions > :nth-child(2)').click()
    cy.get('.oxd-button--label-danger').click()
  });
});