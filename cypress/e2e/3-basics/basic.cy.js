/// <reference types="cypress" />

describe('verify cypress basic commands',function(){
    it('verify the title of page',function(){
        cy.visit('https://www.google.com/')
        cy.title().should('contain','Google')     
    })
    it('how to get the current url in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('contain',"contactus")
    })
    it('how to get element in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("h2[name='contactme']").should('have.attr','class','section_header')
        cy.contains('CONTACT US').should('have.attr','name','contactme')
        cy.get('input[name]').should('have.length',3)
})
    it.skip('how to get element in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-checkboxes-RadioButtons/index.html')
        cy.get('label').contains('option 1').should('be.visible')
    }) 
    it.only('how to get element in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.wait(2000)
        cy.log('2 second wait over')
        cy.get('label').contains('option 1').should('be.visible')
        cy.log('assertion done')
        cy.reload()
        cy.log('reload done')
    }) 
})  
    
