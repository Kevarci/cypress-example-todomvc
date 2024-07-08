describe('Test', ()=>{
    let TODO_ITEM_ONE = 'buy some cheese'
    let TODO_ITEM_TWO = 'feed the cat'
    let TODO_ITEM_THREE = 'book a doctors appointment'
    
    beforeEach( ()=> {
        cy.once('uncaught:exception', () => false),
        cy.visit('http://localhost:8888/#/')
    })

    it('add 2 todos', ()=>{
        cy.get('.new-todo')
            .type('learn testing{enter}')
            .type('be cool{enter}')
        cy.get('.todo-list li').should('have.length', 2)
    })

    // context('Cuando la web este inicialmente abierta comprobar', ()=> {
    //     cy.focused().should('have.class', 'new-todo')
    // })
    it('Comprobar localizadores atri, get, atri+tag, Id y class, ', ()=> {
        cy.get('.info').contains('Double-click to edit a todo')
        cy.get('[placeholder="What needs to be done?"]')
        cy.get('input[placeholder="What needs to be done?"]')
        // cy.get('#toggle-all').find('class').should('contains', 'Mark all as complete')
        cy.get('.todoapp').find('.new-todo').get('input[placeholder="What needs to be done?"]')
    })
    it('Comprobar elementos contains y parents', ()=> {
        cy.contains('TodoMVC')
        cy.contains('.header.header', 'todos')
        cy.get('.info').contains('Double-click to edit a todo')
        cy.get('.new-todo')
            .type('learn testing{enter}')
                .type('be cool{enter}')
        cy.get('.todoapp').find('.main').get('input[id="toggle-all"]').parents().find('label')
        
    })
    it('Comprobar navegacion de la web', ()=>{
        cy.reload()
        cy.go('back')
        cy.reload(true)

    })
    it('Probando los yields', ()=> {
        cy.get('.info').then((info) => {
            cy.wrap(info).should('have.class', 'info')
        })
    })
})