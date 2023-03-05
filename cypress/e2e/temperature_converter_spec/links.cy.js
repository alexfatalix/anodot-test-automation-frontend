describe('links to other parts', () =>{
    beforeEach(() => {
        cy.visit('/temperature-converter/')
        cy.get('h1').invoke("text").as("header")
    })
    
    it('Check link Logo', () =>{
        cy.get('img[alt="The Online Converter Logo"]').click()
        cy.get('@header').should("be.eq", "The Online Converter")
    });
    it('Check link Home', () =>{
        cy.get('a').contains('Home').click()
        cy.get('@header').should("be.eq", "The Online Converter")
    });
    //TODO check other links
})