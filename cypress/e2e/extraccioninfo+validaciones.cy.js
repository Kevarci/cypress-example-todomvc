describe('Extrayendo informacion y haciendo validaciones', ()=> {
    it('Extraer informacion', ()=> {
        cy.visit('/')
        cy.get('#firstName').as('name')
        cy.get('@name').type('Kevin')
        cy.get('@name').then(($name) => {
            texto = $nombre.val()
            expect($name.val()).to.equal('Kevin')
        })
        cy.get('@nombre').invoke('val').should('equal', 'kevin')
        cy.get('@nombre').invoke('val').as('nombreGlobal')
    })
    it('Compartir informacion', ()=> {
        cy.get('@lastName').as('nombre2')
        cy.get('@nombre2').type(texto)
        cy.get('@firstName').type(this.nombreGlobal)
    })
})