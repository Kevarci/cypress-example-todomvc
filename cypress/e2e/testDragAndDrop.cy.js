describe('Test para probar los elmentos de drag and drops', ()=>{
    it('Probando elementos', ()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy/getComputedStyle('#dragBox').trigger('mousedown', {
            which:1,
            pageX:600,
            pageY:100
        }).trigger('mousemove', {
            which:1,
            pageX:600,
            pageY:100
        }).trigger('mouseup')
    })
})