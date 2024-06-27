///<reference types="cypress" />

describe('verify contact us page', function () { // scenario
  it.only('verify contact us page for valid data', function () { //test case
    //AAA
    //Arengements
    //Actions
    //Assertion
    //Arengements
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    //Actions
    cy.get('input[name="first_name"]').type('rupali')
    cy.get('input[name="last_name"]').type('kotkar')
    cy.get('input[name="email"]').type('rupali@gmail.com')
    cy.get('textarea[name="message"]').type('i am learning cypress')
    cy.get('[type="submit"]').click()

    //Assertion
    cy.get('h1').should('have.text', 'Thank You for your Message!')

  })
  it('verify contact ud page for invalid data', function () {

  })
})