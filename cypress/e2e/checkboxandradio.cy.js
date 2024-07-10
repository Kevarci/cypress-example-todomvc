describe('Chequeo de checboxes y radio buttons', ()=> {
    it('relacion de label con sus inputs', ()=> {
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.get('.action-checkboxes [type="checkbox"]').check().should('be.checked')
        cy.get('forminput').check(['subscribe', 'accept'])
    })
    it('Otra forma de carle click a los checkbox aunque no muy correcta', ()=> {
        cy.once('uncaught:exception', ()=> false);
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.get('#gender-radio').click()
        cy.get('#gender-radio').click({froce:true})
        cy.get('#gender-radio').check({froce:true})
        
    })
    it('Otra forma de carle click a los checkbox forma correcta', ()=> {
        cy.once('uncaught:exception', ()=> false);
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.get('label[for="gender-radio-1"]').click()
        cy.get('label[for="hobbies-checkbox-1"]').click()
    })
})