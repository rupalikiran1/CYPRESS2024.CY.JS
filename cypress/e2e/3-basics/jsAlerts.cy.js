// js alert , we cannot inspect
// window.alert()
//window.confirm()
// window.prompt()

/// <reference types="cypress" />
describe('manage js alert', function () {

    this.beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('window:alert', function () {
        cy.on('window:alert', function (text) {
            expect(text).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('click for JS Alert').click()
        cy.get('#result').should('jave.text', 'you successfully clicked an alert')
    })
    it('window:confirm - ok click', function () {
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS confirm')
            return true
        })
        cy.contains('click for JS confirm').click()
        cy.get('#result').should('have.text', 'you  clicked:ok')
    })

    it('window:confirm - ok cancel', function () {
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS confirm')
            return false
        })
        cy.contains('click for JS confirm').click()
        cy.get('#result').should('have.text', 'you  clicked:cancel')
    })

    it.only('window:prompt', function () {
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('hello i am i am learning js')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('contain', 'hello i am i am learning js')
        })
    })

})
