describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/login')
    })

    it('Login', () => {
        cy.get('#username').type('admin')
        cy.get('#password').type('123456789')
        cy.get('button[Type = "Submit"').contains('Login').should('be.visible').click()
    })
})