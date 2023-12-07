/// <reference types="cypress" />

import { login, wait } from "./functions";


describe('Cenário 1: Login e Navegação', () => {
    it('Login e redirecionamento', () => {
        
        cy.visit('https://www.saucedemo.com/');
       
        //usernme & password
        cy.get('[data-test=username]').type('standard_user');
        wait();
        cy.get('[data-test=password]').type('secret_sauce');
    
        //botão login
        cy.get('[data-test=login-button]').click();
        wait();

        // Verificar se o usuário é redirecionado corretamente para a página inicial após o login
        cy.url().should('be.equal', 'https://www.saucedemo.com/inventory.html')
    })

    it('Menu de navegação', () => {
        
        //função para realizar o login automaticamente
        login();

        //navegação entre os produtos da pagina
        for(var i=0; i<6; i++){
            cy.get(`#item_${i}_title_link > .inventory_item_name`).click()
            wait();
            cy.get('[data-test="back-to-products"]').click()
            wait();
        }

        //carrinho de compras
        cy.get('.shopping_cart_link').click();
        wait();
        //varificar se foi redirecionado ao carrinho de compras
        cy.url().should('be.equal', 'https://www.saucedemo.com/cart.html');
        wait();

        //retorna a pagina inicial
        cy.get('[data-test=continue-shopping]').click();
    })

    it('elementos de navegação', () => {
        //função para realizar o login automaticamente
        login();

        //valida a descrição de cada produto passando item a item
        cy.get('.inventory_item_label').each(($el, index, $list) => {
            wait();
            cy.wrap($el);
            cy.get(`#item_${index}_title_link`).should('be.visible');
        })

        //Valida botão de adicionar ao carrinho
        cy.get('.btn_inventory').each(($el, index, $list) => {
            cy.wrap($el);
            wait();
            cy.get('.btn_inventory').eq(index).should('be.enabled').should('be.visible');
        })

        //valida se o preço dos itens está visivel
        for(var i=1; i<7; i++){
            cy.get(`:nth-child(${i}) > .inventory_item_description > .pricebar > .inventory_item_price`).should('be.visible');  
        }

    })
})