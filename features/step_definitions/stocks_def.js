const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const { buildStock } = require('../utils/stock_generator')

When('I create a stock for the store', function () {
  this.createStockData = buildStock({}, { withId: false, withStoreId: false })

  return this.httpClient
    .post({ path: `/stores/${this.store.id}/stocks`, data: this.createStockData })
    .then((axiosResponse) => {
      this.requestResponse = axiosResponse
    })
})

When('I get that stock by id', function () {

  return this.httpClient
    .get({ path: `/stores/${this.stock.storeId}/stocks/${this.stock.id}` })
    .then((axiosResponse) => {
      this.requestResponse = axiosResponse
    })
})

Then('the response contains a stock with the data I provided', function () {
  stocksAreEqual({
    ...this.createStockData,
    storeId: this.store.id
  }, this.requestResponse.data, { compareWithId: false })
})

// Then('the response contains that store', function () {
//   storesAreEqual(this.store, this.requestResponse.data, { compareWithId: true })
// })
//
// Then('store does not exist anymore', function () {
//   return this.httpClient
//     .get({ path: `/stores/${this.store.id}` })
//     .then((axiosResponse) => {
//       expect(axiosResponse.status).to.eq(404)
//     })
// })

function stocksAreEqual (stockA, stockB, { compareWithId = true } = {}) {
  expect(stockA.name).to.eq(stockB.name)
  expect(stockA.type).to.eq(stockB.type)
  expect(stockA.value).to.eq(stockB.value)
  expect(stockA.storeId).to.eq(stockB.storeId)

  if (compareWithId) {
    expect(stockA.id).to.eq(stockB.id)
  }
}