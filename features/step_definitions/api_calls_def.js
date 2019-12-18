const { When, Then } = require('cucumber')
const assert = require('assert')

When('I ping the server', function () {
  return this.httpClient
    .get({ path: '/status' })
    .then((axiosResponse) => {
      this.requestResponse = axiosResponse
    })
})

Then('the response status should be {int}', function (statusCode) {
  assert.equal(this.requestResponse.status, statusCode)
})

Then('the response contains an id', function () {
  assert.ok(typeof this.requestResponse.data.id === 'number')
})
