/// <reference types="cypress" />

import { login, wait, wait2 } from "./functions";

describe('Cenário 3: Adição de Produtos ao Carrinho', () => {
    beforeEach(() => {
        login();
    })

    afterEach(() => {
        wait2(2500);
    })

    it('Adicionar produtos no carrinho', () => {
        cy.get('.btn_inventory').each(($el, index, $list) => {
            cy.wrap($el).should('be.visible').click()
            wait()
            cy.get('.btn_inventory').eq(index).should('be.enabled').should('be.visible')
        })
    })

})