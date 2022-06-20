/// <reference types="cypress" />
import { EnvUtility } from '../support/config/envUtility'

describe('Environment Handling', function () {
  it('Test for dynamic env', function () {
    let envUtility = new EnvUtility(Cypress.env('execEnv'))
    cy.log(envUtility.getEnvironmentConfig())
    cy.log(envUtility.getEnvironmentConfig().url)
  })
})
