describe('Register', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8000/register')
    })

    it('Register', () => {
        cy.get('#username').type('fauzanmuh')
        cy.get('#nim').type('1941720171')
        cy.get('#name').type('Muhammad Fauzan')
        cy.get('#no_hp').type('08953186719')
        cy.get('#email').type('d49ae484c1-539aab@inbox.mailtrap.io')
        cy.get('#tgl_lahir').type('2001-07-01')
        cy.get('#password').type('12345678')
        cy.get('#jurusan').select(1)
        cy.get('#password-confirm').type('12345678')
        cy.get('textarea[type = "alamat"').type('Malang')
        cy.get('button[Type = "Submit"').contains('Register').click().url().should("include", "/email/verify")
    })
})