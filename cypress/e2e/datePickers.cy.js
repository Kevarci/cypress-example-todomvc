describe('Trabajando los date pickers', ()=> {
    it('Prueba de date picker', ()=> {
        cy.visit('https://www.seleniumeasy.com/test/date-picker-demo.html');
        cy.get('datepicker-overview-example').find('input').eq(0).type('11/03/2023', {force:true})
        cy.get('datepicker-overview-example').find('svg').click
    })
})