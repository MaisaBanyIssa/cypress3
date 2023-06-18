/// <reference types ="Cypress"/>
describe('log in', () => {
    it('login standard_user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get("button.btn_inventory").click({multiple:true})

        // for (let i =0 ; i<6 ; i++){
            // cy.get('div#inventory_container')

        // }
    });
});