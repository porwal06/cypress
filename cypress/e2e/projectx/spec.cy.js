//const { describe } = require("mocha")

/*describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it
    cy.get('.action-email').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})*/

describe('Projectx postpaid form', () => {
  it('Open projectx URL', () => {
    cy.visit('https://jp.edanz.com/postpaid')
    cy.get('.heading-login > a').click()
    cy.get('#edit-name').type('deepak.porwal+live@impelsys.com')
    cy.get('#edit-pass').type('121212')
    cy.get('#edit-submit').click()
    //cy.screenshot()
    cy.wait(5000)
    // cy.on('uncaught:exception', (err, runnable) => {
    //   expect(err.message).to.include('Minified React error #200')
    //   return false
    // })
    cy.get('.dropzone-one').selectFile('cypress/fixtures/en-demoWord.docx', {
      action: 'drag-drop'
    })
    //cy.get('[style="min-height: 400px;"] > .cols1 > .col2 > .file-upload-form > .upload > .jp-item-float > .upload-btn > .file-container > .dropzone > button').selectFile([''])
    //cy.visit('http://jp.projectx/postpaid/order')

  })
})