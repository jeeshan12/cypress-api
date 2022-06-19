/// <reference types="cypress" />
import { getUserQueryWithFragments } from '../../../support/query/query'
describe('Spacex GraphQL', function () {
  this.beforeAll(() => {
    cy.wrap({ name: getUserQueryWithFragments }).invoke('name').as('userQuery')
  })

  it('Get SpaceX Users with Limit using variables', function () {
    cy.performSpaceXOperations(
      {
        url: 'https://api.spacex.land/graphql/',
        query: this.userQuery,
      },
      {
        displayName: 'SpacX users with Fragments',
        message: 'Get User Info with Fragments',
        name: 'getUsersWithFragments',
      },
    ).spread(({ body, status }) => {
      expect(status).to.eq(200)
      cy.wrap(body).its('data.users').should('have.length.gte', 0)
    })
  })
})
