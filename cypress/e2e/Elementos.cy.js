describe('Encontrar elementos', ()=> {
    // it('Usando los contains', ()=> {
    //     cy.visit('http://localhost:8888/#/')
    //     cy.contains('Todos')
    //     cy.contains('header.header', 'new-todo')
    // })
    it('Usando los parents', ()=> {
        cy.visit('http://localhost:8888/#/')
        cy.get('input[placeholder="What needs to be done?"]').parents()
    })
    it('Usando los parents mas precisos', ()=>{
        cy.visit('http://localhost:8888/#/')
        // cy.get('input[placeholder="What needs to be done?"]').parents().find('label')
        cy.get('form').find('label')
    })

}) 