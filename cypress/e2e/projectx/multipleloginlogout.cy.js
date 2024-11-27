describe('Projectx login logout', () => {
  it('Login Logout', () => {
    // QA settting
    const url = 'https://qa3-jp.edanz.com/english-editing-c'
    const mep_user_email = 'yfujii+japantest232@edanz.com'//'yfujii+japantest249@edanz.com'
    const mep_user_pass = 'japantest232'//'japantest249'
    const normal_user_email = 'deepak.porwal+qa3@impelsys.com'
    const normal_user_pass = '121212'
    // localhost settting
    // const url = 'http://jp.projectx/english-editing-c'
    // const mep_user_email = 'deepak.porwal+local@impelsys.com'
    // const mep_user_pass = '121212'
    // const normal_user_email = 'deepak.porwal+jplocal@impelsys.com'
    // const normal_user_pass = '121212'

  // MEP user login logout
    cy.visit(url)
    cy.get('.agree-button').click()
    cy.get('.col1 > .login').click()
    cy.get('#edit-name').type(mep_user_email)
    cy.get('#edit-pass').type(mep_user_pass)
    cy.get('#edit-submit').click()
    //cy.screenshot()
    cy.wait(5000)
    cy.get('div.my-account > .my-account').click()
    cy.contains('プロフィール設定').click()
    cy.get('div.my-account > .my-account').click()
    cy.get('.logout').click()

  //Non-MEP user login logout
    cy.wait(8000);
    //cy.visit(url)
    cy.url().should('include', '/english-editing-c') // => true
    cy.get('.col1 > .login').click()
    cy.get('#edit-name').type(normal_user_email)
    cy.get('#edit-pass').type(normal_user_pass)
    cy.get('#edit-submit').click()
    //cy.screenshot()
    cy.wait(5000)
    cy.get('div.my-account > .my-account').click()
    cy.contains('プロフィール設定').click()
    cy.get('div.my-account > .my-account').click()
    cy.get('.logout').click()
    

  // MEP user login logout
      cy.wait(8000);
      //cy.visit(url)
      cy.url().should('include', '/english-editing-c') // => true
      cy.get('.col1 > .login').click()
      cy.get('#edit-name').type(mep_user_email)
      cy.get('#edit-pass').type(mep_user_pass)
      cy.get('#edit-submit').click()
      //cy.screenshot()
      cy.wait(5000)
      cy.get('div.my-account > .my-account').click()
      cy.contains('プロフィール設定').click()
      cy.get('div.my-account > .my-account').click()
      cy.get('.logout').click()

  //Non-MEP user login logout
      cy.wait(8000);
     // cy.visit(url)
     cy.url().should('include', '/english-editing-c') // => true
      cy.get('.col1 > .login').click()
      cy.get('#edit-name').type(normal_user_email)
      cy.get('#edit-pass').type(normal_user_pass)
      cy.get('#edit-submit').click()
      //cy.screenshot()
      cy.wait(5000)
      cy.get('div.my-account > .my-account').click()
      cy.contains('プロフィール設定').click()
      cy.get('div.my-account > .my-account').click()
      cy.get('.logout').click()
    })
  })