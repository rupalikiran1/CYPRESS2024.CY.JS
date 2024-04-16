/// <reference types="cypress"/>

describe('verify the file upload in cypress',function(){

    it('verify the file upload in cypress - example 1',function(){
    cy.on('window:alert',function(str){
        expect(str).to.eq('your file has now been uploaded!')
        return true
    })
    cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
    cy.get('input[type="file"]').selectFile('C:\\Users\\hp\\Desktop\\cypress2024\\cypress\\fixtures\\example.json')
    cy.get('input[type="submit"]').click()
    cy.url().should('contain','example')
})
it.only('verify the file upload in cypress - example 2',function(){
    cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
    cy.get('input[type="file"]').first().selectFile(["C:\\Users\\hp\\Desktop\\cypress2024\\cypress\\fixtures\\example.json","C:\\Users\\hp\\Desktop\\cypress2024\\cypress\\fixtures\\examples.json"])
    cy.get('#ember379').should('contain',"2")

})
})