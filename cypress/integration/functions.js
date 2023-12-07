export function login(){
    // Login
    cy.visit('https://saucedemo.com/')
  //usernme & password
  cy.get('[data-test=username]').type('standard_user');
  cy.get('[data-test=password]').type('secret_sauce');

  //botão login
  cy.get('[data-test=login-button]').click();

}

export function wait2(ms){ cy.wait(ms) }

export function wait(){ wait2(500) }