'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/blooming-meadow-93930',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
