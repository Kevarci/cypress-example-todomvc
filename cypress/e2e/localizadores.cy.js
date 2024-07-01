describe('Tipos de lcoalizadores', ()=> {
    it('Localizadores por Get', ()=> {
        cy.visit('/')
        cy.get('.new-todo') //metodo por etiqueta o descendencia
    })   
    it('Localizadores por atributo', ()=> {
        cy.visit('/')
        cy.get('[placeholder="What needs to be done?"]') //metodo por atributo
    })
    it('Localizador por atributo y un tag', ()=>{
        cy.visit('/')
        cy.get('input[placeholder="What needs to be done?"]') //metodo por Atri-tag
    })
    it('Localizador por un ID', ()=> {
        cy.visit('/')
        cy.get('#todoapp') //metodo por ID si colocamos numeral es id
    })
    it('Localizador por un class', ()=> {
        cy.visit('/')
        cy.get('.new-todo') //metodo por class si colocamos punto es class
    })

})