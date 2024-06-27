///<reference types="cypress" />
describe('verify contact us page', function () {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it.only('verify contact us page for valid data', function () {
        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //cy.get('[name="first_name"]').type(rupali))
        //cy.get('[name="last_name"]').type(kotkar)
        //cy.get('[name="email"]').type(rupali@gmail.com)
        //cy.get('[name="message"]').type('i am learning cypress')
        //cy.get('[type="submit"]').click()

        cy.contactUs('rupali', 'kotkar', 'rupali@gmail.com', 'i am learning cypress', '[type="submit"]')
        //cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank you for your Message!')
    })
    it('verify contact us page for invalid email id', function () {
        //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //cy.get('[name="first_name"]').type(rupa))
        //cy.get('[name="last_name"]').type(kotkar)
        //cy.get('[name="email"]').type(rupali)
        //cy.get('[name="message"]').type('hello')
        //cy.get('[type="submit"]').click()
        cy.contactUs('rupa', 'kotkar', 'rupali', 'hello', '[type="submit"]')
        //cy.get('[type="submit"]').click()
        cy.contains('Error:Invalid email address').should('be.visible')
    })
    it('verify contact is page for incomplet data', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('rupa')

        cy.get('[name="email"]').type('rupali@gmail.com')
        cy.get('[name="message"]').type('hello')

        cy.get('[type="submit"]').click()

        cy.contains('Error:all fields are required').should('be.visible')
    })
    it('verify contact us page for reset button', function () {
        // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //cy.get('[name="first_name"]').type('rupali')
        //cy.get('[name="last_name"]').type('kotkar')
        // cy.get('[name="email"]').type('rupali@gmail.com')
        //cy.get('[name="message"]').type('i am learning cypress')
        cy.contactUs('rupa', 'kotkar', 'rupali', 'hello', '[type="reset"]')
        //cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text', "")
        cy.get('[name="last_name"]').should('have.text', "")
        cy.get('[name="email"]').should('have.text', "")
        cy.get('[name="message"]').should('have.text', "")

    })
})