/// <reference types="cypress" />
import { creatUserQuery } from '../../../support/query/query'
describe('Spacex GraphQL', function () {
  this.beforeAll(() => {
    cy.wrap({ name: creatUserQuery }).invoke('name').as('creatUserQuery')
  })
  it('Insert a new user', function () {
    cy.task('generateRandomString', { len: 12, charset: 'alphabetic' }).as(
      'name',
    )
    cy.task('generateUUID').as('uuid')
    cy.then(function () {
      cy.performSpaceXOperations(
        {
          url: 'https://api.spacex.land/graphql/',
          query: this.creatUserQuery,
          variables: {
            name: this.name,
            id: this.uuid,
            rocket: 'SpaceX',
          },
        },
        {
          displayName: 'Creating a new User [Mutation]',
          message: 'Create a new user for SpaceX',
          name: 'createUser',
        },
      ).spread(({ body, status }) => {
        const insertedUser = body.data.insert_users
        expect(status).to.equal(200)
        expect(insertedUser.returning[0]).to.deep.equal({
          name: this.name,
          id: this.uuid,
          rocket: 'SpaceX',
        })
      })
    })
  })
})
