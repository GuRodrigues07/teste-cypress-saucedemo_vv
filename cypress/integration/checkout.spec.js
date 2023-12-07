/// <reference types="cypress" />

import { login, wait, wait2 } from "./functions";

describe('Cenário 4: Finalização da Compra', () => {
    beforeEach(() => {
        login();
    })

    afterEach(() => {
        wait2(2500);
    })

    it('Fluxo de finalização de compra', () => {
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();

        wait();
        cy.get('.shopping_cart_link').click();

        wait();
        cy.get('[data-test=checkout]').click();

        wait();
        cy.get('[data-test=firstName]').type('Vaite');

        wait();
        cy.get('[data-test=lastName]').type('Esquilo');

        wait();
        cy.get('[data-test=postalCode]').type('1234');

        wait();
        cy.get('[data-test=continue]').click();

        wait();
        cy.get('[data-test=finish]').click();

         // Verifica se a compra foi finalizada com sucesso
         wait();
         cy.url().should('be.equal', 'https://www.saucedemo.com/checkout-complete.html');

    })
})