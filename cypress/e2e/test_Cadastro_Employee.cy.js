/// <reference types="cypress" />

describe('Testes de Cadastro', () => {
  const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  const selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    menuSearch: '.oxd-main-menu-search',
    pimMenuItem: '.oxd-main-menu-item > .oxd-text',
    nameInput: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input',
    idInput: ':nth-child(2) > .oxd-input',
    searchButton: 'button:contains("Search")',
    toastMessage: '.oxd-toast'
  };

  beforeEach(() => {
    cy.visit(URL);
    cy.get(selectors.usernameInput).type('Admin');
    cy.get(selectors.passwordInput).type('admin123');
    cy.get(selectors.submitButton).click();
    cy.get(selectors.menuSearch).type('PIM');
    cy.contains(selectors.pimMenuItem, 'PIM').click();
  });

  it('Pesquisar um Employee pelo Nome', () => {
    cy.get(selectors.nameInput).type('Usuario');
    cy.contains('button', 'Search').click();
  });

  it('Pesquisar um Employee pelo ID', () => {
    cy.get(selectors.idInput).type('0416');
    cy.contains('button', 'Search').click();
  });

  it('Pesquisar um Employee Inexistente', () => {
    cy.get(selectors.nameInput).type('UsuarioFalha');
    cy.contains('button', 'Search').click();
    cy.get(selectors.toastMessage).should('be.visible');
  });

  it('Pesquisar um Employee pelo ID Inexistente', () => {
    cy.get(selectors.idInput).type('000000');
    cy.contains('button', 'Search').click();
    cy.get(selectors.toastMessage).should('be.visible');
  });
});
