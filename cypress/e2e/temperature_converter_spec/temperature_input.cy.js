describe('Test temperature input field', () =>{
    beforeEach(() => {
        cy.visit('/temperature-converter/')
    })
    
    it('Valid input', () =>{
        cy.get('input[name="userInput"]').clear().type(10)
        cy.get('input[name="Go"]').click()
        cy.get('div[id="answer"]').children('p').invoke("text").should("be.eq", '10 degree Celsius = 10 degree Celsius')
    });
    it('Text input', () =>{
        cy.get('input[name="userInput"]').clear().type("wrong")
        cy.get('input[name="Go"]').click()
        cy.get('div[id="answer"]').children('p').invoke("text").should("be.eq", '0 degree Celsius = 0 degree Celsius')
    });
    it('Below absolute zero value input', () =>{
        cy.get('input[name="userInput"]').clear().type(-274)
        cy.get('input[name="Go"]').click()
        cy.get('div[id="answer"]').children('p').invoke("text").should("be.eq", 'Error: Your input cannot be below absolute zero')
    });
    it('Absolute zero value input', () =>{
        var absolute_zero = -273.15
        cy.get('input[name="userInput"]').clear().type(absolute_zero)
        cy.get('input[name="Go"]').click()
        cy.get('div[id="answer"]').children('p').invoke("text").should("be.eq", '-273.15 degree Celsius = -273.15 degree Celsius')
    });
    it('Extra large value input', () =>{
        cy.get('input[name="userInput"]').clear().type(10000000000000000000)
        cy.get('input[name="Go"]').click()
        cy.get('div[id="answer"]').children('p').invoke("text").should("be.eq", '10000000000000000000 degree Celsius = 10000000000000000000 degree Celsius')
    });
})