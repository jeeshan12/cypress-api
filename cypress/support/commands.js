// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getRequest', (options, logOptions = {}) => {
  const queryParams = options?.query ? options.query : {}
  const headers = options?.headers ? options.headers : {}
  const isLogEnabled = options?.log ? options.log : true
  let defaultLogProperties = {
    displayName: 'Get Request',
    message: 'Performing Get Request',
    name: 'performGetRequest',
    autoEnd: true,
  }
  const failOnStatusCode = options?.failOnStatusCode
    ? options?.failOnStatusCode
    : false
  defaultLogProperties = { ...defaultLogProperties, ...logOptions }

  return cy.request({
    method: 'GET',
    url: options.url,
    qs: {
      ...queryParams,
    },
    headers: {
      'Content-Type': 'appplication/json',
      ...headers,
    },
    log: isLogEnabled,
    failOnStatusCode: failOnStatusCode,
  })
})

Cypress.Commands.add('postRequest', (options, logOptions = {}) => {
  const headers = options?.headers ? options.headers : {}
  const isLogEnabled = options?.log ? options.log : true
  const failOnStatusCode = options?.failOnStatusCode
    ? options?.failOnStatusCode
    : false
  if (!options?.body)
    return new Error('Please provide the valid body for creating the resource')
  let defaultLogProperties = {
    displayName: 'Post Request',
    message: 'Performing post Request',
    name: 'performPostRequest',
    autoEnd: true,
  }
  defaultLogProperties = { ...defaultLogProperties, ...logOptions }
  return cy.request({
    method: 'POST',
    url: options.url,
    body: options.body,
    headers: {
      'Content-Type': 'appplication/json',
      ...headers,
    },
    log: isLogEnabled,
    failOnStatusCode: failOnStatusCode,
  })
})

Cypress.Commands.add('deleteRequest', (options, logOptions = {}) => {
  const headers = options?.headers ? options.headers : {}
  const isLogEnabled = options?.log ? options.log : true
  const failOnStatusCode = options?.failOnStatusCode
    ? options?.failOnStatusCode
    : false
  const body = options?.body ? options.body : {}
  let defaultLogProperties = {
    displayName: 'Delete Request',
    message: 'Performing Delete Request',
    name: 'performDeleteRequest',
    autoEnd: true,
  }
  defaultLogProperties = { ...defaultLogProperties, ...logOptions }
  return cy.request({
    method: 'DELETE',
    url: options.url,
    body: body,
    headers: {
      'Content-Type': 'appplication/json',
      ...headers,
    },
    log: isLogEnabled,
    failOnStatusCode: failOnStatusCode,
  })
})

Cypress.Commands.add('putRequest', (options, logOptions = {}) => {
  if (!options?.body)
    return new Error('Please provide the valid body for updating the resource')
  const headers = options?.headers ? options.headers : {}
  const isLogEnabled = options?.log ? options.log : true
  const failOnStatusCode = options?.failOnStatusCode
    ? options?.failOnStatusCode
    : false
  const body = options?.body ? options.body : {}
  let defaultLogProperties = {
    displayName: 'Put Request',
    message: 'Performing Put Request',
    name: 'performPutRequest',
    autoEnd: true,
  }
  defaultLogProperties = { ...defaultLogProperties, ...logOptions }
  return cy.request({
    method: 'PUT',
    url: options.url,
    body: body,
    headers: {
      'Content-Type': 'appplication/json',
      ...headers,
    },
    log: isLogEnabled,
    failOnStatusCode: failOnStatusCode,
  })
})

Cypress.Commands.add('performSpaceXOperations', (options, logOptions = {}) => {
  if (!options?.query) throw new Error('You need to provide valid query string')
  if (!options?.url) throw new Error('You need to provide valid endpoint')
  let defaultLogProperties = {
    displayName: 'GrapQL Request',
    message: 'Performing GraphQL Request',
    name: 'performGraphQLRequest',
    autoEnd: true,
  }
  const headers = options?.headers ? options.headers : {}
  const variables = options?.variables ? options.variables : {}
  defaultLogProperties = { ...defaultLogProperties, ...logOptions }
  const failOnStatusCode = options?.failOnStatusCode
    ? options?.failOnStatusCode
    : false
  const method = options?.method ? options.method : 'POST'
  const log = Cypress.log({
    autoEnd: defaultLogProperties.autoEnd,
    consoleProps() {
      return {
        query: options.query,
      }
    },
    displayName: defaultLogProperties.displayName,
    message: defaultLogProperties.message,
    name: defaultLogProperties.name,
  })
  return cy
    .request({
      url: options.url,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: {
        query: options.query,
        variables: {
          ...variables,
        },
      },
      failOnStatusCode: failOnStatusCode,
    })
    .then(({ body, status }) => {
      log.snapshot().end()
      return [{ body, status }]
    })
})
