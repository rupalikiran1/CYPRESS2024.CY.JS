import examples from  '../../fixtures/examples.json';
/// <reference types="cypress" />

let students = [
    {
        firstName:"krupa",
        lastName:"kotkar",
        email:"krupakotkar01@gmail.com",
        msg:"I am learning avascript"
    },
    {
        firstName:"amol",
        lastName:"rao",
        email:"amolrao090@gmail.com",
        msg:"I am learning sql"
    },
    {
        firstName:"sarika",
        lastName:"pansare",
        email:"sarikapansare@gmail.com",
        msg:"I am learning cypress"
    }
]

describe('fixtures in cypress',function (){

    it.only('reading fixture file obj -1 file import',function (){
        cy.visit('https://webdriveruniversity.com/contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(examples[0].firstName)
        cy.get('input[name="last_name"]').type(examples[0].lastName)
        cy.get('input[name="email"]').type(examples[0].email)
        cy.get('textarea[name="message"]').type(examples[0].msg)
    })
    it.only('reading fixture file obj -1 file import',function (){
        cy.visit('https://webdriveruniversity.com/contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(examples[1].firstName)
        cy.get('input[name="last_name"]').type(examples[1].lastName)
        cy.get('input[name="email"]').type(examples[1].email)
        cy.get('textarea[name="message"]').type(examples[1].msg)

})
})
