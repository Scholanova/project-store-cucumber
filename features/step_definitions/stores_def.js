const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const faker = require('faker')
const { buildStore } = require('../utils/store_generator')

Given('I have a store', function () {
  const storeData = buildStore(undefined, { withId: false })

  return this.httpClient
    .post({ path: '/stores', data: storeData })
    .then((axiosResponse) => {
      // Verify create was successful
      storesAreEqual(axiosResponse.data, storeData, { compareWithId: false })

      this.store = axiosResponse.data
    })
})

When('I create a store', function () {
  this.createStoreData = buildStore(undefined, { withId: false })

  return this.httpClient
    .post({ path: '/stores', data: this.createStoreData })
    .then((axiosResponse) => {
      this.requestResponse = axiosResponse
    })
})

When('I get that store by id', function () {
  return this.httpClient
    .get({ path: `/stores/${this.store.id}` })
    .then((axiosResponse) => {
      this.requestResponse = axiosResponse
    })
})

When('I get a store by id with a random id', function () {
  return this.httpClient
    .get({ path: `/stores/${faker.random.number({ min: 10000 })}` })
    .then((axiosResponse) => {
      this.requestResponse = axiosResponse
    })
})

When('I delete that store', function () {
  return this.httpClient
    .delete({ path: `/stores/${this.store.id}` })
    .then((axiosResponse) => {
      this.requestResponse = axiosResponse
    })
})

Then('the response contains a store with the data I provided', function () {
  storesAreEqual(this.createStoreData, this.requestResponse.data, { compareWithId: false })
})

Then('the response contains that store', function () {
  storesAreEqual(this.store, this.requestResponse.data, { compareWithId: true })
})

Then('store does not exist anymore', function () {
  return this.httpClient
    .get({ path: `/stores/${this.store.id}` })
    .then((axiosResponse) => {
      expect(axiosResponse.status).to.eq(404)
    })
})

function storesAreEqual (storeA, storeB, { compareWithId = true } = {}) {
  expect(storeA.name).to.eq(storeB.name)

  if (compareWithId) {
    expect(storeA.id).to.eq(storeB.id)
  }
}