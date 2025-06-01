/// <reference types="cypress" />

describe('Testes de Cadastro - Cancelar e Excluir Funcionário', () => {

  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

  const selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    searchMenu: '.oxd-main-menu-search',
    menuItem: '.oxd-main-menu-item > .oxd-text',

    addButton: '.orangehrm-header-container > .oxd-button',
    firstNameInput: '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
    middleNameInput: ':nth-child(2) > :nth-child(2) > .oxd-input',
    lastNameInput: ':nth-child(3) > :nth-child(2) > .oxd-input',
    employeeIdInput: '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input',
    saveButton: '.oxd-button--secondary',

    employeeIdSearchInput: ':nth-child(2) > .oxd-input',
    searchButton: '.oxd-form-actions > .oxd-button--secondary',

    actionsMenu: '.oxd-table-cell-actions > :nth-child(2)',
    cancelDeleteButton: '.orangehrm-modal-footer > .oxd-button--ghost',
    confirmDeleteButton: '.oxd-button--label-danger',
  };

  const login = () => {
    cy.visit(url);
    cy.get(selectors.usernameInput).type('Admin');
    cy.get(selectors.passwordInput).type('admin123');
    cy.get(selectors.submitButton).click();
  };

  const acessarPIM = () => {
    cy.get(selectors.searchMenu).type('PIM');
    cy.get(selectors.menuItem).contains('PIM').click();
  };

  const cadastrarFuncionario = () => {
    cy.get(selectors.addButton).click();
    cy.get(selectors.firstNameInput).type('Teste');
    cy.get(selectors.middleNameInput).type('Cancelar');
    cy.get(selectors.lastNameInput).type('Exclusão');
    cy.get(selectors.employeeIdInput).clear().type('9999');
    cy.get(selectors.saveButton).click();
    cy.wait(5000);
  };

  const pesquisarFuncionarioPorId = (id) => {
    cy.get(selectors.employeeIdSearchInput).type(id);
    cy.get(selectors.searchButton).click();
    cy.wait(5000);
  };

  beforeEach(() => {
    login();
    acessarPIM();
    cadastrarFuncionario();
  });

  it('Cancelar Exclusão de Cadastro', () => {
    acessarPIM();
    pesquisarFuncionarioPorId('9999');

    cy.get(selectors.actionsMenu).click();
    cy.get(selectors.cancelDeleteButton).click();    
  });

  it('Confirmar Exclusão de Cadastro', () => {
    acessarPIM();
    pesquisarFuncionarioPorId('9999');

    cy.get(selectors.actionsMenu).click();
    cy.get(selectors.confirmDeleteButton).click();
  });

});
