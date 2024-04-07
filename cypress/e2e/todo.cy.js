describe('example to-do app', () => {
    beforeEach(() => {
    Cy.visit('https://example.cypress.io/todo')
    })
    it('displays two todo items by default', () =>{
        cy.get('.todo-list li').should('have.length',2)
        cy.get('.todo-list li').first().should('have.text','pay electric bill')
        cy.get('.todo-list li').last().should('have.text','walk the dog')
    })
    it('can add new todo items',() => {
        const newItem = 'feed the cat'
        cy.get('[data-test=new-todo]').type('${newItem}{enter}')
        cy.get('.todo-list li')
          .should('have.length',3)
          .last()
          .should('have.text',newItem)
    })
    it('can check off an item as completed',() => {
        cy.contains('pay electric bill')
          .parent()
          .find('input[type=checkbox]')
          .check()
        cy.contains('pay electric bill')
          .parent('li')
          .should('have.class','completed')
        
    })
    context('with a checked task',() => {
        beforeEach(() => {
        cy.contains('pay electric bill')
          .parent()
          .find('input[type=checkbox]')
          .check()  
        })
        it('can filter for uncompleted tasks', () => {
            cy.contains('Active').click()
            cy.get('.todo-list li')
             .should('have.length',1)
             .first()
             .should('have.text','walk the dog')
        })
        it('can filter for completed tasks', () => {
         cy.contains('completed').click()
         
         cy.get('.todo-list li')
           .should('have.length',1)
           .first()
           .should('have.text','pay electric bill')

        cy.contains('walk the dog').should('not.exist')

    })
    it('can delete all completed tasks', () => {
        cy.contains('clear completed').click()

        cy.get('.todo-list li')
          .should('have.length',1)
          .last()
          .should('not.have.text','pay electric bill')

    cy.contains('clear completed').should('not.exist')   
 })
})
})
