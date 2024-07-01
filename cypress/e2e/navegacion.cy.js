describe('Primera prueba en proyecto', ()=> {
    it('navegar a la web todomvc', ()=> {
        cy.visit('http://localhost:8888/#/')
    })
    it('Recargar la pagina', ()=> {
        cy.reload() 
    })
    it('recargar la pagina de forma forzada', ()=> {
        cy.visit('http://localhost:8888/#/')
        cy.reload(true)
    })
    it('Navegar hacia atras', ()=> {
        cy.visit('http://localhost:8888/#/')
        cy.visit('http://localhost:8888/#/')
        cy.go('back')
    })
})