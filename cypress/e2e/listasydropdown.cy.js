describe('Listas y Dropdowns', ()=>{
    it('Intereactuando con dropdowns', ()=>{
        cy.visit('https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html')
        cy.get('.custom-select').select
    })
})