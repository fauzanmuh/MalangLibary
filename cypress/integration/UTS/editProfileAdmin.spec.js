describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#username').type('admin1')
        cy.get('#password').type('123456789')
        cy.get('button[Type = "Submit"').contains('Login').should('be.visible').click()
    })

    it('Edit Profile Admin', () => {
        cy.visit('http://127.0.0.1:8000/profile')
        cy.get('#username').clear('admin1').type('admin1')
        cy.get('#nama').clear('Administrator 1').type('Administrator 1')
        cy.get('#no_hp').clear('081223656719').type('081245678998')
        cy.get('#email').clear('adminkedua@gamil.com').type('admin1@gmail.com')
        cy.get('textarea[type = "alamat"').clear('Malang').type('Kepanjen')
        cy.get('button[Type = "Submit"').contains('Submit').should('be.visible').click()
    })
})