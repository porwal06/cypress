describe('Projectx postpaid form', () => {
  it('Open projectx URL', () => {
    cy.visit('https://qa-jp.edanz.com/postpaid')
    cy.get('.agree-button').click()
    const uuid = () => Cypress._.random(0, 1e6)

    const id = uuid()
    const en_fname = `EN Fname ${id}`
    const en_lname = `EN Lname ${id}`
    const jp_fname = `JP Fname ${id}`
    const jp_lname = `JP Lname ${id}`
    const email = `deepak.porwal+${id}@impelsys.com`
    
    cy.get('#edit-field-family-name-und-0-value').type(en_lname)
    cy.get('#edit-field-ws-first-name-und-0-value').type(en_fname)
    cy.get('#edit-field-ja-family-name-und-0-value').type(jp_lname)
    cy.get('#edit-field-ja-first-name-und-0-value').type(jp_fname)
    cy.get('#edit-mail').type(email)
    cy.get('#edit-pass-pass1').type('121212')
    cy.get('#edit-pass-pass2').type('121212')
    cy.get('#edit-submit--2').click()
    
    // //cy.screenshot()
    cy.wait(5000)
    // // Fill data into postpaid form
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
    cy.getAllLocalStorage()
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