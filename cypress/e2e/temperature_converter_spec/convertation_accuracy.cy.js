describe('dropdowns convertations', () =>{
    before(() => {
        cy.visit('/temperature-converter/')
    })
    it('Temperature convertation test', () =>{
        cy.get('select[name="convertFrom"]').select("degree Celsius")
        cy.get('select[name="convertTo"]').select("degree Fahrenheit")
        cy.get('input[name="userInput"]').clear().type(10)
        cy.get('input[name="Go"]').click()
        cy.get('div[id="answer"]').children('p').invoke("text").should("be.eq", "10 degree Celsius = 50 degree Fahrenheit")
    });
})