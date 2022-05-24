describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#username').type('admin1')
        cy.get('#password').type('12345678')
        cy.get('button[Type = "Submit"').contains('Login').should('be.visible').click()
    })

    it('Change Password Admin', () => {
        cy.visit('http://127.0.0.1:8000/password')
        cy.get('#current_password').type('12345678')
        cy.get('#password').type('123456789')
        cy.get('#password-confirm').type('123456789')
        cy.get('button[Type = "Submit"').contains('Update Password').should('be.visible').click()
    })
})