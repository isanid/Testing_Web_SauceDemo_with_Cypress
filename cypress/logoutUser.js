describe('Testing web SauceDemo', () => {

    it('Logout', () => {
        const Url = Cypress.env('baseUrl')
        cy.visit(Url)

        cy.get('input[name="user-name"]').type('standard_user')
        cy.get('input[name="password"]').type('secret_sauce')

        cy.get('input[id="login-button"]').click()

        cy.get('div[class="bm-burger-button"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()

    })
})