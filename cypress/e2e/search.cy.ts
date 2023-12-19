describe('add-product-to-cart', () => {
  it('should be able to search for products', () => {
    cy.visit('/')
    cy.get('input[name=q]').type('sweatshirt').parent('form').submit()

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=sweatshirt')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should be not be able to visit search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
