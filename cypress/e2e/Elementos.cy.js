describe('Encontrar elementos', ()=> {
    beforeEach( ()=> {
        cy.visit('http://localhost:8888/#/')
    })
    it('Usando los contains', ()=> {
        cy.contains('TodoMVC')
        cy.contains('.header.header', 'todos') // Este es el metodo correcto para usar el contains, ya que no busca solo por la palabra.
        cy.get('.info').contains('Double-click to edit a todo')
    })
    it('Usando los parents', ()=> {
        cy.get('input[placeholder="What needs to be done?"]').parents()
    })
    // it('Usando los parents mas precisos', ()=>{
    //     // cy.get('input[placeholder="What needs to be done?"]').parents().find('label')
    //     cy.get('#toggle-all').find('label')
    // })
    // Este ultimo nos funciona hasta que los procesos de agregar todos no se ejecute 

}) 