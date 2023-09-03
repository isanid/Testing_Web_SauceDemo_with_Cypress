describe('Testing web SauceDemo', () => {
    const Url = Cypress.env('baseUrl')
    it('Login - If username & password is not filled', () => {

        cy.visit(Url)

        cy.get('input[name = "user-name"]')
        cy.get('input[name = "password"]')

        cy.get('input.btn_action').click();

        cy.get('[data-test=error]').should('contain', 'Username is required');

    })

    it('Login - If the username is wrong', () => {
        cy.visit(Url)

        cy.get('input[name="user-name"]').type('standard')
        cy.get('input[name="password"]').type('secret_sauce')

        cy.get('input.btn_action').click()

        cy.get('[data-test=error]').should('contain', 'Username and password do not match any user in this service')
    })

    it('Login - If the password is wrong', () => {
        cy.visit(Url)

        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('_sauce')

        cy.get('input.btn_action').click()

        cy.get('[data-test=error]').should('contain', 'Username and password do not match any user in this service')
    })

    it('Login - If username & password is correct', () => {
        cy.visit(Url)

        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')

        cy.get('input[id="login-button"]').click()

        cy.get('.inventory_list').should('be.visible');
    })
})