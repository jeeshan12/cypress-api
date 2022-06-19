/// <reference types="cypress" />

describe('Create posts', function () {
  it('[POST] Delete Post', function () {
    cy.deleteRequest(
      {
        url: '/posts/1',
      },
      {
        displayName: 'Delete POST',
        message: 'Delete Post with ID 1',
        name: 'performDeletePost',
      },
    ).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
