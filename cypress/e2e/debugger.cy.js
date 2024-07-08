describe('Debuggear con cypres', ()=> {
    it('button test', ()=> {
        cy.visit('/command/querying')
        cy.get('#query-btn').then((btn) => {
            debugger
        })
    })
})