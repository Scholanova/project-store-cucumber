const axios = require('axios')

class HTTPClient {
  constructor ({ baseURL }) {
    this.instance = axios.create({
      baseURL
    })
  }

  get ({ path, params }) {
    return this.instance
      .get(path, { params })
  }

  post ({ path, data }) {
    return this.instance
      .post(path, data)
  }

  delete ({ path }) {
    return this.instance
      .delete(path)
  }
}

module.exports = HTTPClient