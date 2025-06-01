/// <reference types="cypress" />

describe('Testes de Pesquisa de Funcionários - Módulo PIM', () => {

  const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  const selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    searchMenu: '.oxd-main-menu-search',
    menuItem: '.oxd-main-menu-item > .oxd-text',

    nameInput: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input',
    idInput: ':nth-child(2) > .oxd-input',
    searchButton: '.oxd-form-actions > .oxd-button--secondary',

    toastMessage: '.oxd-toast'
  };

  const loginENavegarParaPIM = () => {
    cy.visit(URL);
    cy.get(selectors.usernameInput).type('Admin');
    cy.get(selectors.passwordInput).type('admin123');
    cy.get(selectors.submitButton).click();
    cy.get(selectors.searchMenu).type('PIM');
    cy.get(selectors.menuItem).contains('PIM').click();
  };

  const pesquisarFuncionario = ({ nome, id }) => {
    if (nome) cy.get(selectors.nameInput).type(nome);
    if (id) cy.get(selectors.idInput).type(id);
    cy.get(selectors.searchButton).click();
  };

  beforeEach(() => {
    loginENavegarParaPIM();
  });

  it('Pesquisar um funcionário pelo Nome', () => {
    pesquisarFuncionario({ nome: 'Usuario' });
  });

  it('Pesquisar um funcionário pelo ID', () => {
    pesquisarFuncionario({ id: '0416' });
  });

  it('Pesquisar um funcionário inexistente pelo Nome', () => {
    pesquisarFuncionario({ nome: 'UsuarioInexistente' });
    cy.get(selectors.toastMessage).should('be.visible');
  });

  it('Pesquisar um funcionário inexistente pelo ID', () => {
    pesquisarFuncionario({ id: '000000' });
    cy.get(selectors.toastMessage).should('be.visible');
  });

});
