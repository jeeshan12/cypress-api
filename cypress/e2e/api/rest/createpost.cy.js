/// <reference types="cypress" />

describe('Create posts', function () {
  this.beforeAll(() => {
    cy.fixture('posts.json').as('posts')
  })
  it('[POST] Create Posts with fixture', function () {
    cy.postRequest({
      url: '/posts',
      body: this.posts,
    }).then((response) => {
      expect(response.status).to.eq(201)
      const body = response.body
      expect(body.id).to.eq(101)
    })
  })

  it('[POST] Create Posts without fixtures', function () {
    cy.postRequest({
      url: '/posts',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    }).then((response) => {
      expect(response.status).to.eq(201)
      const body = response.body
      expect(body.id).to.eq(101)
    })
  })

  it('Perform Creating  a user', () => {
    cy.postRequest({
      url: 'https://reqres.in/api/users',
      body: JSON.stringify({
        name: 'morpheus',
        job: 'leader',
      }),
    }).then((response) => {
      expect(response.status).to.eq(201)
    })
  })
})
