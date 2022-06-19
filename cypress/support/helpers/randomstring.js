const randomstring = require('randomstring')
function generateRandomString({ len, charset }) {
  return randomstring.generate({
    length: len,
    charset: charset,
  })
}

module.exports = {
  generateRandomString: generateRandomString,
}
