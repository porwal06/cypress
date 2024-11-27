describe('Projectx postpaid form', () => {
  it('Open projectx URL', () => {
    cy.visit('https://qa-jp.edanz.com/postpaid')
    cy.get('.agree-button').click()
    cy.get('.heading-login > a').click()
    cy.get('#edit-name').type('deepak.porwal+live@impelsys.com')
    cy.get('#edit-pass').type('121212')
    cy.get('#edit-submit').click()
    //cy.screenshot()
    cy.wait(5000)
    // Fill data into postpaid form
    cy.url().should('include', '/postpaid/order') // => true
    cy.wait(10000)
    cy.get('#s-t-quote').click()
    cy.get('#s-t-quote').click()
    cy.get('#newEdit-1').click()
    cy.get('#jnl-n').click()
    cy.get('.dropzone-one').selectFile('cypress/fixtures/en-demoWord.docx', {
      action: 'drag-drop'
    })
    cy.get('.submission-type-order > input').click()

    cy.url().should('include', '/add-address')
    // cy.getAllLocalStorage()
    cy.get('#payment-category-work').click()
    cy.get('#pay-by-wire').click()
    cy.get('.organization').type('ORG-III')
    cy.get('input[name="department"]').type('DEPT-III')
    cy.get('input[name="tel"]').type('9999999999')
    cy.get('input[name="invoice-to"]').type('InvoiceName')
    cy.get('.next').click()

    cy.url().should('include', '/confirm')
    cy.get('#submitAndProceed').click()

    cy.wait(5000)
    cy.url().should('include', '/thankyou')
    // cy.get('.btn').click()
    // cy.wait(5000)
    // cy.get('.logout').click()

  })
})