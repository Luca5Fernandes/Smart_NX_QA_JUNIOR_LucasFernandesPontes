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

  it('Pesquisar um Employee pelo Nome', () => {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Usuario')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

  });

  it('Pesquisar um Employee pelo ID', () => {
    cy.get(':nth-child(2) > .oxd-input').type('0416')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  });
  
  it('Pesquisar um Employee Inexistente', () => {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('UsuarioFalha')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('.oxd-toast').should('be.visible')

});
it.only('Pesquisar um Employee pelo ID', () => {
  cy.get(':nth-child(2) > .oxd-input').type('000000')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('.oxd-toast').should('be.visible')
});
});