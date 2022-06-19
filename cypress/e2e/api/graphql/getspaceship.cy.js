/// <reference types="cypress" />
import {
  getUsers,
  getUsersWithLimit,
  getUsersWithLimitUsingVariables,
} from '../../../support/query/query'
describe('Spacex GraphQL', function () {
  this.beforeAll(() => {
    cy.wrap({ name: getUsers }).invoke('name').as('userQuery')
    cy.wrap({ name: getUsersWithLimit })
      .invoke('name', 10)
      .as('userQueryWithLimit')
    cy.wrap({ name: getUsersWithLimitUsingVariables })
      .invoke('name')
      .as('userQueryWithLimitUsingVariables')
  })
  it('Get SpaceX Users', function () {
    cy.performSpaceXOperations({
      url: 'https://api.spacex.land/graphql/',
      query: this.userQuery,
    }).spread(({ body, status }) => {
      expect(status).to.eq(200)
      cy.wrap(body).its('data.users').then(cy.log)
    })
  })

  it('Get SpaceX Users with Limit', function () {
    cy.performSpaceXOperations(
      {
        url: 'https://api.spacex.land/graphql/',
        query: this.userQueryWithLimit,
      },
      {
        displayName: 'SpacX users with Limit',
        message: 'Get User with limit 10',
        name: 'getUsersWithLimit',
      },
    ).spread(({ body, status }) => {
      expect(status).to.eq(200)
      cy.wrap(body).its('data.users').then(cy.log)
    })
  })

  it('Get SpaceX Users with Limit using variables', function () {
    cy.performSpaceXOperations(
      {
        url: 'https://api.spacex.land/graphql/',
        query: this.userQueryWithLimitUsingVariables,
        variables: {
          limit: 10,
        },
      },
      {
        displayName: 'SpacX users with Limit using variables',
        message: 'Get User with limit 10 using variables',
        name: 'getUsersWithLimitUsingVariables',
      },
    ).spread(({ body, status }) => {
      expect(status).to.eq(200)
      cy.wrap(body).its('data.users').then(cy.log)
    })
  })
})
