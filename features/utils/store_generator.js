const faker = require('faker')

function buildStore ({
  id = faker.random.number(),
  name = faker.company.companyName()
} = {}, {
  withId = false
} = {}) {
  const idValue = withId ? id : undefined

  return {
    id: idValue,
    name
  }
}

module.exports.buildStore = buildStore