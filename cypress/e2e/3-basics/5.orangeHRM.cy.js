///<reference types="cypress" />
describe('verify login page for OHRM', function () {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })
    it('verify login for valid data', function () {
        cy.OHRMLogin('Admin', 'admin123')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', "Dashboard")
    })
    it.only('verify login for invalid data', function () {
        cy.OHRMLogin('Dip', 'admin123')

        cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
    })
})