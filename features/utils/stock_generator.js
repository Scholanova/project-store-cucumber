const faker = require('faker')

function buildStock ({
  id = faker.random.number(),
  name = faker.commerce.productName(),
  type = faker.random.arrayElement(['Fruit', 'Nail']),
  value = faker.random.number({ min: 1, max: 1000 }),
  storeId = faker.random.number()
} = {}, {
  withId = false,
  withStoreId = false
} = {}) {
  const idValue = withId ? id : undefined
  const storeIdValue = withStoreId ? storeId : undefined

  return {
    id: idValue,
    name,
    type,
    value,
    storeId: storeIdValue
  }
}

module.exports.buildStock = buildStock