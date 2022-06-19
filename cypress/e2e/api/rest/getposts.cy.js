/// <reference types="cypress" />

describe('GET posts', () => {
  it('Get All Posts', () => {
    cy.getRequest({
      url: '/posts',
    }).then((response) => {
      const body = response.body
      expect(body.length).to.eq(100)
      expect(response.status).to.eq(200)
      expect(body[1].title).to.equal('qui est esse')
    })
  })
  it('Get Comments with Query String', () => {
    cy.getRequest({
      url: '/comments',
      query: {
        postId: 1,
      },
      log: false,
    }).then((response) => {
      const body = response.body
      expect(response.status).to.eq(200)
      expect(body.length).to.eq(5)
      const POST_IDS = Cypress._.filter(body, (b) => b.postId === 1)
      expect(POST_IDS.length).to.equal(5)
    })
  })
})
