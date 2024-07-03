
/// <reference types="cypress" />
describe('traversing method', function () {
    it.skip('by - -letkideit', function () {
        cy.visit('https://www.letskodeit.com/home')
        cy.get('h4[class="dynamic-heading"]').first().should('have.text', 'Cypress.io Test Automation')
        cy.get('h4[class="dynamic-heading"]').last().should('have.text', 'Selenium WebDriver 4 with Java')
        cy.get('h4[class="dynamic-heading"]').eq(2).should('have.text', 'Selenium WebDriver 4 with Python')

        cy.get('.zen-course-author-info').first().children().should('have.length', 2)

        cy.get('.zen-course-img').first().parent().should('have.attr', 'href', "/courses/cypress-automation-framework")
        cy.get('.zen-course-img').first().parentsUntil('[class="col-md-12"]').should('have.length', 3)

        cy.get('[class="dynamic-heading"]').eq(3).closest('[class="col-md-12"]').should('have.attr', 'id', 'course-list')
    })
    it('get result for flipcart', function () {
        cy.visit('https://www.flipkart.com')
        cy.get('[placeholder="Search For products,brands and more"]').type('bag {enter}')
        cy.get('[class="syl9yP"]').first().should('have.text', 'SAFARI')
        cy.get('[class="syl9yP"]').last().should('have.text', 'TAHAFASHION')
        cy.get('[class="syl9yP"]').should('have.length', 40)

    })
})
