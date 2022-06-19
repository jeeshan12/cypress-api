# Cypreess API Automation

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohdjeeshan)



[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields)](http://makeapullrequest.com)

##### `A boilerplate framework that helps you to write automation tests for REST API and GraphQL.`



# Table of contents
- [Installing Dependencies](#installing-dependencies)
- [Custom Commands](#custom-commands)
- [Specs](#specs)
- [Execution](#execution)
- [Docker](#docker)
- [Reporting](#reporting)

# Installing Dependencies

[(Back to top)](#table-of-contents)

1. Run  below command in terminal to install the node dependencies locally
    ```
     npm ci 
   ```
 
2. Run below command to check installed cypress version
   ```
     npx cypress verify 
   ```

# Custom Commands

[(Back to top)](#table-of-contents)

### Custom Command for graphQL 
`cy.performSpaceXOperations(options, logOptions= {})`

##### options: Object
###
 | options | description  |  required  |
  | :---:   | :-: | :-: |
 | query | graphqlQuery  |  Y  |
 | variables | graphqlVariables  |  N **(optional)** |
 | url   | endpoint | Y  |
 | method   | POST/GET | Y `(POST by default)`  |
 | headers   | headers to pass for request| N `(set to "Content-Type": "application/json" by default)` **(optional)** |
 | method   | POST/GET | N `(POST by default)` **(optional)**  |
 |failOnStatusCode|failOnStatusCode| N `(false by default)` **(optional)**  |

##### logOptions: Object(optional)    Needed for logging Custom command information in test runner
###
 | options | description  |  default message  |
  | :---:   | :-: | :-: |
 | displayName | display name for request  |  GrapQL Request  |
 | message | message  |  Performing GraphQL Request  |
 | name   | name | performGraphQLRequest  |
  | autoEnd | autoEnd logging  |  true  |
  
### Custom command for Rest API

`cy.getRequest(options, logOptions= {})`
| options | description  |  required  |
  | :---:   | :-: | :-: |
 | url   | endpoint | Y  |
 | query   | query Params `(type: Object)` |  N `({} by default)`**(optional)**  |
 | headers   | headers to pass for request| N `(set to "Content-Type": "application/json" by default)` **(optional)** |
 | log   | logging info | N `(true by default)` **(optional)**  |
 |failOnStatusCode|failOnStatusCode| N `(false by default)` **(optional)**  |


##### logOptions: Object(optional)    Needed for logging Custom command information in test runner
###
 | options | description  |  default message  |
  | :---:   | :-: | :-: |
 | displayName | display name for request  |  Get Request  |
 | message | message  |  Performing Get Request  |
 | name   | name | performGetRequest  |
  | autoEnd | autoEnd logging  |  true  |
  
  
`cy.postRequest(options, logOptions= {})`
| options | description  |  required  |
  | :---:   | :-: | :-: |
 | url   | endpoint | Y  |
 | body   | Request Body`(Object|String)` | Y |
 | headers   | headers to pass for request| N `(set to "Content-Type": "application/json" by default)` **(optional)** |
 | log   | logging info | N `(true by default)` **(optional)**  |
 |failOnStatusCode|failOnStatusCode| N `(false by default)` **(optional)**  |


##### logOptions: Object(optional)    Needed for logging Custom command information in test runner
###
 | options | description  |  default message  |
  | :---:   | :-: | :-: |
 | displayName | display name for request  |  Post Request  |
 | message | message  |  Performing Post Request  |
 | name   | name | performPostRequest  |
  | autoEnd | autoEnd logging  |  true  |
  
  
  `cy.deleteRequest(options, logOptions= {})`
| options | description  |  required  |
  | :---:   | :-: | :-: |
 | url   | endpoint | Y  |
 | body   | Request Body `(Object|String|{})`| N **(Optional)**  |
 | headers   | headers to pass for request| N `(set to "Content-Type": "application/json" by default)` **(optional)** |
 | log   | logging info | N `(true by default)` **(optional)**  |
 |failOnStatusCode|failOnStatusCode| N `(false by default)` **(optional)**  |


##### logOptions: Object(optional)    Needed for logging Custom command information in test runner
###
 | options | description  |  default message  |
  | :---:   | :-: | :-: |
 | displayName | display name for request  |  Delete Request  |
 | message | message  |  Performing Delete Request  |
 | name   | name | performDeleteRequest  |
  | autoEnd | autoEnd logging  |  true  |
  
`cy.putRequest(options, logOptions= {})`
| options | description  |  required  |
  | :---:   | :-: | :-: |
 | url   | endpoint | Y  |
 | body   | Request Body `(Object|String|{})`| Y  |
 | headers   | headers to pass for request| N `(set to "Content-Type": "application/json" by default)` **(optional)** |
 | log   | logging info | N `(true by default)` **(optional)**  |
 |failOnStatusCode|failOnStatusCode| N `(false by default)` **(optional)**  |


##### logOptions: Object(optional)    Needed for logging Custom command information in test runner
###
 | options | description  |  default message  |
  | :---:   | :-: | :-: |
 | displayName | display name for request  |  Put Request  |
 | message | message  |  Performing Put Request  |
 | name   | name | performPutRequest  |
  | autoEnd | autoEnd logging  |  true  |
 
# Specs
 [(Back to top)](#table-of-contents)
**Specs are written under cypress/e2e folder**.
Rest API tests can be found under api `rest` folder.
GraphQL  can be found under api `graphql` folder.


# Execution

[(Back to top)](#table-of-contents)

Tests can be executed either via command line or from test runner.

1. Run  below command in terminal to run the tests from command line.
    ```
    npm run test
    ```
2. To run the test with test runner, run the below command and execute the tests that you need to run from the test runner UI.
     ```
    npx cypress open
    ```
**Note : If you want to see how to execute all the tests from cypress test runner , refer to this repository** `https://github.com/jeeshan12/cypress-run-all-specs.git`

# Docker
**Note: In progress. Will be released soon**
You can run the tests using Docker as well. To do this
1. You need to build the image using the command.
    ```
    docker build -t <<imageTag>> .
    ```
    
    
<<imageTag>> is the name of the image. Generally your dockerusername followed by the name of the image. It's not mandate but a good practice to name your image like this. For me command will look like this

     docker build -t jeeshan12 .
2. Once image is build you can now execute the tests in container by running the below command

    ```
    docker run --rm  <<imageTag>> npm run test
    ```

If you want to start the container in intercative mode run the below command
   ```
   docker run --rm  -it <<imageTag>> /bin/bash
   ```
 Above command starts the conatiner in intercative mode with bash. Now you can debug and explore more inside the container.
 **Above commands will automatically removes the container after execution.**
 `To remove all the stopped containers you can run the command` **`docker rm $(docker ps -a -q)`**
# Reporting

[(Back to top)](#table-of-contents)

**In progress**