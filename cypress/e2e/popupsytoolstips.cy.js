describe('Trabajando Tooltips y Popups', ()=>{
    it('Test de evetns', ()=>{
        cy.visit('https://demoqa.com/tooltip-popover')
        cy.get('#confirmButton').click()
        cy.contains('You selected cancel').should('exist')
    })
    it('Interacion con los toolstips', ()=>{
        cy.visit('https://demoqa.com/tooltip-popover')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout')
        cy.contains('You hovered over the Button').should('not exist')
    })
})