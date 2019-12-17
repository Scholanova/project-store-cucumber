const HTTPClient = require('../utils/http_client')
const { Given } = require('cucumber')

Given('the server url is {string}', function (serverURL) {
  this.httpClient = new HTTPClient({ baseURL: serverURL })
})

