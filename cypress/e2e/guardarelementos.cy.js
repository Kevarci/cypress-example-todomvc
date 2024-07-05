describe('Guardando elementos', ()=> {
    const inputs = form.find('input')
    it('Guardar elementos', ()=> {
        cy.get('input[placeholder="What needs to be done?"]').parents('form').as('form')
        expect(inputs.length).to.eq(15)
    })
})
describe('Yields', ()=> {
    const getName = () => {
        return 'name'
    }
    it('Usando los yields', ()=> {
        cy.get('nav').then((nav) => {})
    })
    it('Usando en termino wrap', ()=> {
        cy.wrap(1).then((num,) => {
            cy.wrap(num).should('equal', 1)
        }).should('equal', 1)
    })
    it('Usando obejtos', ()=> {
        cy.wrap({name: getName}).invoke('name').should('eq', 'name')
    })
})