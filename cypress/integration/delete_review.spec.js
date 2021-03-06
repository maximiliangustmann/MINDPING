/// <reference types="cypress" />

context('Delete review', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deletes review', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.visit('reviews')

    cy.get('[data-cy=delete]').click()

    cy.contains('TestTitle').should('not.exist')
  })
})
