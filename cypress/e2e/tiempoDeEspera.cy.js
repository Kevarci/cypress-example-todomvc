describe('Tiempos de Espera', () => {
    it('Usando intercept', () => {
        cy.intercept('/accounts/*').as('getAccount')
        cy.visit('/accounts/123')
        cy.wait('@getAccount').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })

it('Wait test', ()=> {
    cy.visit('/commands/waiting')
    cy.get('.wait-input1').type('wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input2').type('wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input3').type('wait 1000ms after typing')
    cy.wait(1000)
    cy.intercept('GET', '**/comments/*').as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').its('response.statucode').should()
})
it('Deshabilitar el retry', ()=> {
    cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5', {time} )
})
})