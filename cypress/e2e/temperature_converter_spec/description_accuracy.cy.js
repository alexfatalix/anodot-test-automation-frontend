describe('ldescription accuracy', () =>{
    beforeEach(() => {
        cy.visit('/temperature-converter/')
    })
    
    it('Celsius to kelvin', () =>{
        cy.get('p').contains('K = C + 273.15')
    });
    it('celsius to fahrenheit', () =>{
        cy.get('li').contains('Take the temperature in Celsius and multiply 1.8')
        cy.get('li').contains('Add 32 degrees')
        cy.get('li').contains('The result is degrees Fahrenheit.')
    });
    //TODO check formulas 
})