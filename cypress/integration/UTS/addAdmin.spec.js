describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/login')
        cy.get('#username').type('admin')
        cy.get('#password').type('123456789')
        cy.get('button[Type = "Submit"').contains('Login').should('be.visible').click()
    })

    it('Tambah Admin', () => {
        cy.visit('http://127.0.0.1:8000/admin/admin/create')
        cy.get('#username').type('admin1')
        cy.get('#password').type('12345678')
        cy.get('#nama').type('Administrator 1')
        cy.get('#no_hp').type('081233656719')
        cy.get('#email').type('adminkedua@gamil.com')
        cy.get('textarea[type = "alamat"').type('Malang')
        cy.get('button[Type = "Submit"').contains('Submit').should('be.visible').click()
    })
})