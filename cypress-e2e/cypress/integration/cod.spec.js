describe('Standalone Change of Director', function() {
    beforeEach(function(){
            Cypress.Cookies.defaults({
                whitelist: 'JSESSIONID'
                });
    })

      it('checks with the login',function(){   
      cy.visit('https://coops-dev.pathfinder.gov.bc.ca/auth/')
      cy.get('input[aria-label="Enter your Incorporation Number"]').type('CP0001430')
      cy.get('input[aria-label="Enter your Passcode"]').type('524590148')
      cy.get('button.sign-in-btn').click()
      })

      it('checks with the Standalone COD',function(){
          cy.get('#btn-standalone-directors').click()
          cy.contains('Appoint New Director').click()
          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections').click()
          cy.get('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div').click()
          cy.get('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div').within(($form) => {
          cy.get('#new-director__first-name').clear().type('TEST')
          cy.get('input[aria-label="Initial"]').clear().type('TEST2')
          cy.get('input[aria-label="Last Name"]').clear().type('TEST3')
          cy.get('[name=street-address]').clear().type('1 TEST ST')
          cy.get('[name=street-address]').click()
          cy.get('[name=street-address-additional]').clear().type('TEST FIELD 1')
          cy.get('[name=address-city]').clear().type('victoria')
          cy.get('[name=postal-code]').clear().type('v1v1v1')
          cy.get('[name=address-country]').clear().type('canada{enter}')
          cy.get('[name=delivery-instructions]').clear().type('TEST FIELD 2')
          cy.contains('Done').click()
          })
        })
          it('checks with the cease button for COD',function(){
              cy.get('#director-8-cease-btn ').click()
              cy.get('#director-7-cease-btn ').click()
          })
         it('checks with the certified button for COD',function(){
             cy.get('#certified-by-textfield').type('test')
             cy.get('[type=checkbox]').click({force: true})
             cy.get('#cod-file-pay-btn').click()
         })
          it('checks with the payment page for COD',function(){
              cy.get('#main-content > h1').contains('Add Invoice(s) to your Cart to make payment')
              cy.get('#PBCSCN005 > tbody > tr > td:nth-child(3)').contains('BENRYK MEWS HOUSING CO-OPERATIVE')
              cy.get('#paylistbutton').click()
          })
          it('checks with the cart page for COD',function(){
              cy.get('#creditForm > div > div.panel-heading > div:nth-child(1) > h3').contains('Credit Card Cart')
              cy.get('#credit_payBtn').click()     
          })
          it('checks with the Payment information page for COD',function(){
              cy.get('#form-heading').contains('Enter Payment Information')
              cy.get('[name=trnCardNumber]').type('4030000010001234')
              cy.get('[name=trnCardCvd]').type('123')
              cy.get('[name=submitButton]').click()
          })
        })
    
