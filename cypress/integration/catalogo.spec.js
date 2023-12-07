/// <reference types="cypress" />

import { login, wait, wait2 } from "./functions";

describe('Cenário 2: Catálogo de Produtos', () => {
    beforeEach(() => {
        login();
    })

    afterEach(() => {
        wait2(2500);
    })

    it('verificar se os produtos estão corretamente listados.', () => {
        cy.get('.inventory_list').children().should('have.length', 6);
    })

    it('Vlida informações dos produtos', () => {
    
        // verificação do nome dos produtos
        cy.get('.inventory_item_name').should('have.length', 6)
        wait()
  
        // preço
        cy.get('.inventory_item_price').should('have.length', 6)
        wait()
  
        // botão de adicionar ao carrinho
        cy.get('.btn_inventory').should('have.length', 6)
        wait()
    
        // imagens
        cy.get('.inventory_item_img .inventory_item_img').should('have.length', 6)
        wait()
    
        // descrição
        cy.get('.inventory_item_desc').should('have.length', 6)
        wait()
      })

      it('Busca de produtos ', () => {
        // Verificando se os filtros estão funcionando corretamente
  
        // Filtro A-Z
        cy.get('[data-test="product_sort_container"]').select('az')
        wait()
        cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack')
        cy.get('.inventory_item_name').last().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
  
        cy.get('footer').scrollIntoView()
        wait()
  
        // Filtro Z-A
        cy.get('[data-test="product_sort_container"]').select('za')
        wait()
        cy.get('.inventory_item_name').first().should('have.text', 'Test.allTheThings() T-Shirt (Red)')
        cy.get('.inventory_item_name').last().should('have.text', 'Sauce Labs Backpack')
  
        cy.get('footer').scrollIntoView()
        wait()
  
        // Ordenado pelo preço mais baixo
        cy.get('[data-test="product_sort_container"]').select('lohi')
        wait()
        cy.get('.inventory_item_price').first().should('have.text', '$7.99')
        cy.get('.inventory_item_price').last().should('have.text', '$49.99')
  
        cy.get('footer').scrollIntoView()
        wait()
  
        // Preço mais alto
        cy.get('[data-test="product_sort_container"]').select('hilo')
        wait()
        cy.get('.inventory_item_price').first().should('have.text', '$49.99')
        cy.get('.inventory_item_price').last().should('have.text', '$7.99')
  
        cy.get('footer').scrollIntoView()
      })

})