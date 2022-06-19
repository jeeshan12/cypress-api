export function getUsers() {
  return `{
        users {
          id
          name
          rocket
          timestamp
          twitter
        }
      }`
}

export function getUsersWithLimit(limit) {
  return `{
          users(limit: ${limit}) {
            id
            name
            rocket
            timestamp
            twitter
          }
        }`
}

export function getUsersWithLimitUsingVariables() {
  return `
  query getUsersWithLimit($limit: Int) {
    users(limit: $limit){
      id
      name
      rocket
    }
  }`
}

export function creatUserQuery() {
  return `mutation insertUser($name: String, $id: uuid, $rocket: String) {
        insert_users(objects: {
          id: $id,
            name: $name,
          rocket: $rocket
        }){
          returning{
            name
            id
            rocket
          }
        }
      }      
    `
}

function createUserFragement() {
  return `fragment userInfo on  users{
        id
        name
      }
      `
}

export function getUserQueryWithFragments() {
  const fragments = createUserFragement()
  return `
    ${fragments}
     query users{
        users {
         ...userInfo
          name
          timestamp
        }
      }
      `
}
