describe('Tipos de lcoalizadores', ()=> {
    beforeEach( ()=> {
        cy.visit('http://localhost:8888/#/')
    })
    it('Localizadores por Get', ()=> {
        cy.get('.new-todo') //metodo por etiqueta o descendencia
    })   
    it('Localizadores por atributo', ()=> {
        cy.get('[placeholder="What needs to be done?"]') //metodo por atributo
    })
    it('Localizador por atributo y un tag', ()=>{
        cy.get('input[placeholder="What needs to be done?"]') //metodo por Atri-tag
    })
    it('Localizador por un ID', ()=> {
        cy.get('#todoapp') //metodo por ID si colocamos numeral es id
    })
    it('Localizador por un class', ()=> {
        cy.get('.new-todo') //metodo por class si colocamos punto es class
    })

})