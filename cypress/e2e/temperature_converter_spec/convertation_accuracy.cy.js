import characterdata from "../../fixtures/temperature_data.json"

describe('dropdowns convertations', () =>{
    beforeEach(() => {
        cy.visit('/temperature-converter/')
    })
    characterdata.forEach((data) =>{
        it(`Temperature convertation test ${data.TestCase}`, () =>{
            cy.get('select[name="convertFrom"]').select(data.convertedFromValue)
            cy.get('select[name="convertTo"]').select(data.convertedToValue)
            cy.get('input[name="userInput"]').clear().type(data.givenTemperature)
            cy.get('input[name="Go"]').click()
            cy.get('div[id="answer"]').children('p').invoke("text").should("be.eq",
            `${data.givenTemperature} ${data.convertedFromValue} = ${data.expectedTemperature} ${data.convertedToValue}`)
        });
    });
})