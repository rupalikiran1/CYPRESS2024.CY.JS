///<reference types='cypress' />
describe('get element text using .invoke(), .text()', function () {
    it('get text by .invoke() method', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('.section_header').invoke('text').then((text) => {
            cy.log(text)
        })
    })
    it('get text by .text() method', function () {
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('.section_header').then(($el) => {
            cy.log($el.text())
        })
    })
})